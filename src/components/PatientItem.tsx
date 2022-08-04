import React, { FC } from "react";
import IPatients from "../models/patients";
import {Box, Button, IconButton, Typography} from "@mui/material";
import EditIcon from "../images/pen-solid.svg";
import DeleteIcon from "../images/trash-solid.svg";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface Props {
  patients: IPatients;
  index: number;
  editPatient: (index: number) => void;
  deletePatient: (index: number) => void;
}

const PatientItem: FC<Props> = (props) => {
  const labelId = `enhanced-table-checkbox-${props.index}`;
  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={props.patients.name}
    >
      <TableCell component="th" align="center" id={labelId} scope="row" padding="none">
        {props.patients.id}
      </TableCell>
      <TableCell align="center">
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => props.editPatient(props.patients.id)}
        >
          {props.patients.name}
        </Typography>
      </TableCell>
      <TableCell align="center">{props.patients.age}</TableCell>
      <TableCell align="center">{props.patients.disease}</TableCell>
      <TableCell align="center">
        <Button
          onClick={() => props.editPatient(props.patients.id)}
        >
          <img src={EditIcon} style={{height:"15px"}} alt="EditIcon" />
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button
          onClick={() => props.deletePatient(props.index)}
        >
          <img src={DeleteIcon} style={{height:"15px"}} alt="DeleteIcon" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
export default PatientItem;