import { IonMenuButton } from "@ionic/react";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";
interface User {
  email: string;
  familyName: string;
  givenName: string;
  id: string;
  imageUrl: string;
  name: string;
  serverAuthCode: string;
}
const store = new Storage();
export default function Nav(props: any) {
  const [user, setUser] = useState<User>({
    email: "",
    familyName: "",
    givenName: "",
    id: "",
    imageUrl: "",
    name: "",
    serverAuthCode: "",
  });
  useEffect(() => {
    (async () => {
      await store.create();
      const data = (await store.get("user"))
        ? JSON.parse(await store.get("user"))
        : null;
      if (data) {
        setUser(data);
      }
    })();
  }, []);
  return (
    <Box>
      <Box display={"flex"} padding="5px" justifyContent={"space-between"}>
        <IonMenuButton></IonMenuButton>
        <Box display={"flex"}>
          <IconButton>
            <Avatar src={user.imageUrl} alt={user.name} sizes="small" />
          </IconButton>
        </Box>
      </Box>
      {props.isnav && (
        <Box padding="20px 20px">
          <Typography sx={{ color: "#565656" }}>
            Hola de nuevo, {user.givenName}
          </Typography>
          <Typography
            sx={{ color: "#282828", fontSize: "28px", fontWeight: "bold" }}
          >
            Como va tu día?
          </Typography>
        </Box>
      )}
    </Box>
  );
}
