import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import IUserData from "../models/IUserData";
import { useGlobalContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const accounts = [
  { mail: "bilbo@lotr.com", password: "heslojeheslo" },
  { mail: "gandalGreyf@lotr.com", password: "hesloniejeheslo" },
  { mail: "frodo@lotr.com", password: "heslojeheslo" },
  { mail: "aragorn@lotr.com", password: "hesloniejeheslo" },
];

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

//react-hook-form is new for me, but I think that I will use it more. It is funny hook, thanks
//help from https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98
const LoginView: FC = () => {
  const { context, setContext } = useGlobalContext();
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  console.log(context)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserData>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: IUserData) => {
    accounts.map((_) => {
      if (_.mail == data.email && _.password == data.password) {
        setContext(_.mail);
        navigate("/");
      } else {
        setShowError(true);
      }
    });
    reset();
  };
  return (
    <Box className="wrapper">
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title">Lets log you in.</h2>
        <TextField
          {...register("email")}
          placeholder="email"
          type="email"
          sx={{ width: "100%", marginBottom: 1 }}
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          error={!!errors?.email}
          required
        />
        <Typography sx={{ fontSize: "12px", color: "red" }}>
          {errors.email?.message}
        </Typography>
        <TextField
          {...register("password")}
          placeholder="password"
          type="password"
          sx={{ width: "100%", marginBottom: 1 }}
          error={!!errors?.password}
          required
        />
        <Typography sx={{ fontSize: "12px", color: "red" }}>
          {errors.password?.message}
        </Typography>
        <Button variant="contained" sx={{ width: "100%" }} type="submit">
          Log in
        </Button>
        {showError ? (
          <Typography sx={{ fontSize: "12px", color: "red" }}>
            Wrong mail or password
          </Typography>
        ) : null}
      </form>
    </Box>
  );
};
export default LoginView;
