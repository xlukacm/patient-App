import React, { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import useLocalStorage from "../hooks/useLocalStorage";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import IUserData from "../models/IUserData";
import { UserContexts } from "../context/UserProvider";
import {useNavigate} from "react-router-dom";

const accounts = [
  { mail: "bilbo@lotr.com", password: "heslojeheslo" },
  { mail: "gandalGreyf@lotr.com", password: "hesloniejeheslo" },
  { mail: "frodo@lotr.com", password: "heslojeheslo" },
  { mail: "aragorn@lotr.com", password: "hesloniejeheslo" },
];

const validationSchema = yup.object().shape({
  //some problem, todo
  // login: yup.string().email().required()
  //     .email('Email is invalid'),
  password: yup.string().min(8).max(32).required(),
});

//react-hook-form is new for me, but I think that I will use it more. It is funny hook, thanks
//help from https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98

const LoginView: FC = () => {
  // const {login,setLogin} = useContext(UserContexts);
  const [, setLoginName] = useLocalStorage("account", "");
  const navigate = useNavigate()

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
        setLoginName(_.mail);
        navigate("/")
      }
    });
    // reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Lets log you in.</h2>
        <TextField
          {...register("email")}
          placeholder="email"
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          error={!!errors?.email}
          required
        />
        <TextField
          {...register("password")}
          placeholder="password"
          type="password"
          error={!!errors?.password}
          required
        />
        <button type="submit">Log in</button>
      </form>
      {/*<UserContexts.Provider value={login}>{login}</UserContexts.Provider>*/}
    </>
  );
};
export default LoginView;
