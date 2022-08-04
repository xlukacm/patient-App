import React, { FC, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import IPatientsDetails from "../models/patientDetails";
import { useForm } from "react-hook-form";

export interface Props {
  patient: IPatientsDetails[];
  addPatient: (index: IPatientsDetails) => void;
}
const AddPatient: FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [patientArray, setPatientArray] = useState(props.patient);

  useEffect(() => {
    setPatientArray(props.patient);
  }, [props]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPatientsDetails>({});
  const onSubmit = (data: IPatientsDetails) => {
    data.id = Math.max(...patientArray.map((o) => o.id)) + 1;
    props.addPatient(data);
    console.log("bol som tu");
    console.log({ data });
  };

  return (
    <Box sx={{ float: "right", marginRight: 1 }}>
      <Button variant="outlined" color="success" onClick={handleClickOpen}>
        Add new patient
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new patient</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <DialogContentText sx={{marginBottom:2}}>
              Fill in all data about the new patient
            </DialogContentText>
            <Box sx={{textAlign:"center"}}>
              <TextField
                  {...register("name")}
                  placeholder="Name"
                  type="text"
                  sx={{padding:"5px"}}
                  required
              />
              <TextField
                  {...register("age", { valueAsNumber: true })}
                  placeholder="Age"
                  type="number"
                  sx={{padding:"5px"}}
                  required
              />
              <TextField
                  {...register("disease")}
                  placeholder="Disease"
                  type="text"
                  sx={{padding:"5px"}}
                  required
              />
              <TextField
                  {...register("born")}
                  placeholder="Born"
                  type="text"
                  sx={{padding:"5px"}}
                  required
              />
              <TextField
                  {...register("address")}
                  placeholder="Address"
                  type="text"
                  sx={{padding:"5px"}}
                  required
              />
              <TextField
                  {...register("phone")}
                  placeholder="Phone"
                  type="text"
                  sx={{padding:"5px"}}
                  required
              />
            </Box>
          </DialogContent>
          <DialogActions sx={{margin:2}}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              type="submit"
              color="success"
              variant="contained"
              onClick={handleClose}
            >
              Subscribe
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};
export default AddPatient;
