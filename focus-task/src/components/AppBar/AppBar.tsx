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
            <Link to={"/home"}>
              <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                <IonIcon icon={home}></IonIcon>
                <Typography sx={{ fontSize: "13px" }}>Home</Typography>
              </IconButton>
            </Link>
          </li>
          <li>
            <Link to={"/timer"}>
              <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                <IonIcon icon={timer}></IonIcon>
                <Typography sx={{ fontSize: "13px" }}>Timer</Typography>
              </IconButton>
            </Link>
          </li>
          <li>
            <Link to={"/completed"}>
              <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                <IonIcon icon={list}></IonIcon>
                <Typography sx={{ fontSize: "13px" }}>Hecho</Typography>
              </IconButton>
            </Link>
          </li>
        </ul>
      </Box>
    </Box>
  );
}
