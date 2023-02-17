import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { checkbox, pause, play } from "ionicons/icons";
import { useEffect, useState } from "react";
import AppBar from "../components/AppBar/AppBar";

import Nav from "../components/Nav/Nav";
import "./Tab2.css";
interface Props {
  actual: String;
  setActual: Function;
}
const Tab2 = (props: Props) => {
  const [minutes, setTime] = useState(29);
  const [seconds, setSeconds] = useState(59);
  const [plays, setPlay] = useState(false);
  const [intervals, setIntervals] = useState(0);
  useEffect(() => {
    let intervalId: any;
    if (plays) {
      intervalId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
        if (seconds === 0) {
          setTime((time) => time - 1);
          setSeconds(59);
        }
      }, 1000);
      if (minutes === 0 && seconds === 0) {
        setIntervals((interval) => interval + 1);
        setTime((time) => 29);
        setSeconds((seconds) => 59);
      }
    }
    return () => clearInterval(intervalId);
  }, [plays, minutes, seconds]);
  return (
    <IonPage>
      <IonContent fullscreen>
        <Nav isnav={false} />
        <Box
          width="100%"
          padding="20px"
          minHeight={"calc(100vh - 165.5px)"}
          height={"max-content"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          flexWrap={"wrap"}
        >
          {props.actual !== "" ? (
            <Box
              width="100%"
              padding="20px"
              sx={{ background: "#282828", borderRadius: "20px" }}
              display="flex"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Typography sx={{ color: "white" }}>{props.actual}</Typography>
              <IconButton
                sx={{ color: "white" }}
                onClick={() => {
                  props.setActual("");
                  setTime((time) => 29);
                  setSeconds((seconds) => 59);
                }}
              >
                <IonIcon icon={checkbox}></IonIcon>
              </IconButton>
            </Box>
          ) : null}

          <Box>
            <Typography variant="h1" fontWeight={800} fontSize="100px">
              {minutes}:{seconds}
            </Typography>
          </Box>
          <Box width="100%" display={"flex"} justifyContent="center">
            <IconButton
              size="large"
              onClick={() => setPlay(!plays)}
              sx={{ width: "150px", height: "150px" }}
            >
              <IonIcon icon={plays ? pause : play}></IonIcon>
            </IconButton>
          </Box>
          <Box width="100%" padding="20px">
            Times: {intervals}
          </Box>
        </Box>
        <AppBar />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
