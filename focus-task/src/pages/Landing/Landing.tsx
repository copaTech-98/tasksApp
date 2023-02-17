import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { logoGoogle } from "ionicons/icons";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import splas from "../../assets/img/splash.png";
import Toast from "../../components/Toast/Toast";
import { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";
import { Redirect } from "react-router";

const store = new Storage();
const Landing = () => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    (async () => {
      await store.create();
      const data = await store.get("user");
      data ? setLogin(true) : setLogin(false);
    })();
    GoogleAuth.initialize({
      clientId:
        "806940456122-vs0lt13vtcaukcapft1fuji5kj7k0moh.apps.googleusercontent.com",
      scopes: ["profile", "email"],
      grantOfflineAccess: true,
    });
  }, []);

  async function signIn(): Promise<void> {
    const result = await GoogleAuth.signIn();
    console.info("result", result);
    if (result) {
      Toast.fire({ icon: "success", title: "Login OK!" });
      store
        .set("user", JSON.stringify(result))
        .then((response) => {
          setLogin(true);
        })
        .catch((e) => {
          Toast.fire({ icon: "error", title: "Internal error:" + e });
        });
    } else {
      Toast.fire({
        icon: "error",
        title: "Error no fue posible acceder con este usuario!",
      });
    }
    console.log(result);
  }

  return (
    <IonPage>
      {login && <Redirect to={"/home"} />}
      <IonContent fullscreen>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box width={"100%"} zIndex={99999}>
            <Typography
              variant="h4"
              textAlign={"center"}
              fontWeight={800}
              sx={{ color: "#282828" }}
            >
              FocusTask
            </Typography>
          </Box>
          <Box position="absolute">
            <img src={splas} alt="FocusTask" />
          </Box>
          <Button
            variant="contained"
            color="error"
            startIcon={<IonIcon icon={logoGoogle}></IonIcon>}
            onClick={signIn}
          >
            Login with Google
          </Button>
        </Box>
      </IonContent>
    </IonPage>
  );
};
export default Landing;
