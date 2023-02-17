import { IonIcon } from "@ionic/react";
import { Box, IconButton, Typography } from "@mui/material";
import { home, list, timer } from "ionicons/icons";
import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <Box
      width={"100%"}
      padding="20px"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Box width={"100%"}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <li>
            <IconButton sx={{ display: "flex", flexDirection: "column" }}>
              <IonIcon icon={home}></IonIcon>
              <Link to={"/home"}>
                <Typography sx={{ fontSize: "13px" }}>Home</Typography>
              </Link>
            </IconButton>
          </li>
          <li>
            <IconButton sx={{ display: "flex", flexDirection: "column" }}>
              <IonIcon icon={timer}></IonIcon>
              <Link to={"/timer"}>
                <Typography sx={{ fontSize: "13px" }}>Timer</Typography>
              </Link>
            </IconButton>
          </li>
          <li>
            <IconButton sx={{ display: "flex", flexDirection: "column" }}>
              <IonIcon icon={list}></IonIcon>
              <Link to={"/completed"}>
                <Typography sx={{ fontSize: "13px" }}>Hecho</Typography>
              </Link>
            </IconButton>
          </li>
        </ul>
      </Box>
    </Box>
  );
}
