import React, { FC, useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import mockData from "../mockPatients.json";
import {
  Avatar, Box, Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import IPatientsDetails from "../models/patientDetails";
import useLocalStorage from "../hooks/useLocalStorage";
import Layout from "../components/Layout";

export type PatientPageParams = {
  patientId: string;
};

const DetailView: FC = () => {
  const params = useParams<PatientPageParams>();
  const [patients, setPatients] = useState(mockData);
  const [currentPatient, setCurrentPatient] =
    React.useState<IPatientsDetails>();
  const [loginName,] = useLocalStorage("account", "");
  const navigate = useNavigate()
  if(loginName == ""){
    navigate("/login")
  }

  useEffect(() => {
    const index = patients.findIndex(
      (_) => _.id.toString() === params.patientId
    );
    if (index === -1) {
      return;
    }
    setCurrentPatient(patients[index]);
  }, [params.patientId]);

  //If there would be more time, I would make a map and listItem component by all props, not the whole list like this
  return (
    <div>
      <Layout/>
      <Box sx={{margin:2}}>
        <Typography>Detail of {currentPatient?.name}</Typography>
        <Button sx={{float:"right"}} href="/">Back to table</Button>
      </Box>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Name of patient"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {currentPatient?.name}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Age"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {currentPatient?.age}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Disease"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {currentPatient?.disease}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Born"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {currentPatient?.born}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Adress"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {currentPatient?.address}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Phone number"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {currentPatient?.phone}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};
export default DetailView;
