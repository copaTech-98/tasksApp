import { IonContent, IonIcon, IonItem, IonLabel, IonPage } from "@ionic/react";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";

import { Storage } from "@ionic/storage";
import "./Tab3.css";
import { trash } from "ionicons/icons";
import Toast from "../components/Toast/Toast";
import Nav from "../components/Nav/Nav";
import AppBar from "../components/AppBar/AppBar";
const store = new Storage();
interface task {
  id: number;
  task: string;
  type: string;
  timer: string;
}
interface Props {
  taskDone: Array<task>;
  setTaskDone: Function;
}
const Tab3 = (props: Props) => {
  interface task {
    id: number;
    task: string;
    type: string;
    timer: string;
  }

  const deleteT = (id: number) => {
    props.setTaskDone((prevTasks: task[]) => {
      const newTasks = prevTasks.filter((t) => t.id !== id);
      store
        .set("tasksDone", JSON.stringify(newTasks))
        .then((response) => {
          Toast.fire({ icon: "success", title: "Eliminado" });
        })
        .catch((e) => {
          Toast.fire({ icon: "error", title: e });
        });
      localStorage.setItem("tasksDone", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  useEffect(() => {
    (async () => {
      await store.create();
      if (await store.get("tasksDone")) {
        props.setTaskDone(eval(await store.get("tasksDone")));
      }
    })();
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <Nav isnav={false} />
        <Box minHeight={"calc(100vh - 165.5px)"} height="max-content">
          <Box>
            <Typography variant="h4" textAlign={"center"} padding="20px">
              Completado
            </Typography>
          </Box>
          <Box>
            {props.taskDone.length > 0
              ? props.taskDone.map((t) => (
                  <IonItem
                    color={"dark"}
                    detail={true}
                    style={{ margin: "5px 0" }}
                    button
                  >
                    <IonLabel>{t.task}</IonLabel>
                    <IconButton
                      onClick={() => deleteT(t.id)}
                      sx={{ color: "white" }}
                    >
                      <IonIcon slot="end" icon={trash}></IonIcon>
                    </IconButton>
                  </IonItem>
                ))
              : null}
          </Box>
        </Box>

        <AppBar />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
