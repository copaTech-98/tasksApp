import {
  IonContent,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";

import "./Tab1.css";
import React, { useEffect, useState } from "react";
import meditation from "../assets/img/meditation.png";
import {
  Alert,
  Box,
  Button,
  Chip,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import {
  add,
  arrowForward,
  trash,
  checkmarkDone,
  eyeOff,
  play,
  pause,
  reloadCircle,
} from "ionicons/icons";
import Menu from "../components/Menu/Menu";
import Toast from "../components/Toast/Toast";
import { Storage } from "@ionic/storage";
import Nav from "../components/Nav/Nav";
import AppBar from "../components/AppBar/AppBar";
import { Link } from "react-router-dom";

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
  actual: String;
  setActual: Function;
}
const Tab1 = (props: Props) => {
  const [dataTask, setDataTask] = useState<task>({
    id: 0,
    task: "",
    type: "",
    timer: "",
  });
  const handleChange = (e: any) => {
    console.log(e.target.name, e.target.value, e);
    setDataTask({
      ...dataTask,
      id: dataTask.id + 1,
      [e.target.name]: e.target.value,
    });
  };
  const [tasks, setTasks] = useState<task[]>([]);

  useEffect(() => {
    (async () => {
      await store.create();
      const tasks = await eval(await store.get("tasks"));

      tasks ? setTasks(eval(tasks)) : setTasks([]);
    })();
  }, []);
  const [showForm, setShowForm] = useState(false);

  //TODO: EN TYPESCRIPT SE MANEJAN INTERFACES, ESTA ES UNA INTERFACE PARA ESTADO LOCAL,
  //PARA HACER USO DE LA INTERFACE SE UTILIZA LA ETIQUETE <> Y DENTRO EL NOMBRE DE LA INTERFAZ,
  //EN LA INTERFAZ SE DEFINEN LOS TIPOS DE DATOS QUE SE VAN A UTILIZAR

  const saveTask = async () => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks, dataTask];
      store
        .set("tasks", JSON.stringify(newTasks))
        .then((response) => {
          Toast.fire({ icon: "success", title: "Guardado" });
        })
        .catch((e) => {
          Toast.fire({ icon: "error", title: e });
        });

      return newTasks;
    });
    await setDataTask({ id: 0, task: "", type: "", timer: "" });
    console.log(tasks);
  };
  const handleActual = (data: string) => {
    props.setActual(data);
  };
  const deleteT = (id: number) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((t) => t.id !== id);
      store
        .set("tasks", JSON.stringify(newTasks))
        .then((response) => {
          Toast.fire({ icon: "success", title: "Eliminado" });
        })
        .catch((e) => {
          Toast.fire({ icon: "error", title: e });
        });

      return newTasks;
    });
  };
  const doneTask = async (id: number) => {
    const onetaskDone = tasks.filter((t) => t.id === id);
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((t) => t.id !== id);
      store
        .set("tasks", JSON.stringify(newTasks))
        .then((response) => {
          Toast.fire({ icon: "success", title: "Eliminado" });
        })
        .catch((e) => {
          Toast.fire({ icon: "error", title: e });
        });

      return newTasks;
    });
    props.setTaskDone((prevState: task[]) => {
      const newState = [...prevState, onetaskDone[0]];
      store
        .set("tasksDone", JSON.stringify(newState))
        .then((response) => {
          Toast.fire({ icon: "success", title: "Terminado" });
        })
        .catch((e) => {
          Toast.fire({ icon: "error", title: e });
        });

      return newState.map((task) => ({ ...task }));
    });
  };
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [loadingAudio, setLoadingAudio] = useState(false);

  useEffect(() => {
    const audioElement = new Audio();
    audioElement.src = "./ruidoblanco.mp3";
    setLoadingAudio(true);
    audioElement.addEventListener("canplaythrough", () => {
      setAudio(audioElement);
      setLoadingAudio(false);
    });
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      if (audio) audio.pause();
    } else {
      if (audio) audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <Menu />
      <IonPage style={{ background: "#F7F7F7" }} id="main-content">
        <IonContent fullscreen style={{ background: "#F7F7F7 !important" }}>
          <Nav isnav={true} />
          <Box padding="10px">
            <Link
              to={{
                pathname:
                  "https://www.mediafire.com/file/cxwvfwqt58w2tmz/com.focustask.apk/file",
              }}
              target="_blank"
            >
              <Alert severity="warning" variant="filled">
                Descargar APP!
              </Alert>
            </Link>
          </Box>
          <Box height="max-content">
            <Box width="100%" display={"flex"} justifyContent="center">
              <Button>
                <Chip
                  label="Calm"
                  sx={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                />
              </Button>

              <Button>
                <Chip
                  label="Sleep"
                  sx={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                />
              </Button>
              <Button>
                <Chip
                  label="Workout"
                  sx={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                />
              </Button>
            </Box>
            <Box padding="10px">
              <Box
                padding="20px"
                sx={{
                  background: "#DDE3F1",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                borderRadius="20px"
                display="flex"
              >
                <Box>
                  <Typography
                    fontSize={"16px"}
                    width="50%"
                    fontWeight={"bold"}
                    minWidth="150px"
                    sx={{ color: "#565656" }}
                  >
                    10 minutos de meditación al día, es la mejor opción
                  </Typography>
                </Box>
                <Box width={"300px"}>
                  <img
                    src={meditation}
                    alt="meditation"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Box>
            </Box>
            <Box width="100%" padding="20px">
              <Box
                width="100%"
                padding="10px"
                sx={{
                  background: "white",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                {!loadingAudio ? (
                  <IconButton sx={{ color: "#282828" }} onClick={toggleAudio}>
                    <IonIcon icon={isPlaying ? pause : play}></IonIcon>
                  </IconButton>
                ) : (
                  <IonIcon icon={reloadCircle}></IonIcon>
                )}
                <Typography>Ruido blanco.</Typography>
              </Box>
            </Box>
            <Box
              width="100%"
              padding="20px"
              display="flex"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Typography variant="h4">Lista de tareas</Typography>
              <Box>
                <IonFabButton
                  size="small"
                  onClick={() => setShowForm(!showForm)}
                >
                  {showForm ? (
                    <IonIcon icon={eyeOff}></IonIcon>
                  ) : (
                    <IonIcon icon={add}></IonIcon>
                  )}
                </IonFabButton>
              </Box>
            </Box>
            <Box
              width={"100%"}
              padding="20px"
              display="flex"
              justifyContent={"flex-start"}
              flexWrap="wrap"
            >
              {showForm && (
                <Box display="flex">
                  <IonItem>
                    <TextField
                      variant="standard"
                      placeholder="Tarea"
                      name="task"
                      onChange={handleChange}
                      value={dataTask.task}
                      sx={{ margin: "0px 20px" }}
                    />
                  </IonItem>
                  <IonFabButton
                    size="small"
                    color={"secondary"}
                    onClick={saveTask}
                  >
                    <IonIcon icon={arrowForward}></IonIcon>
                  </IonFabButton>
                </Box>
              )}
            </Box>
            <Box width={"100%"}>
              {tasks.length > 0
                ? tasks.map((t) => (
                    <IonItem
                      color={"dark"}
                      detail={true}
                      style={{ margin: "5px 0" }}
                      button
                      onClick={() => handleActual(t.task)}
                    >
                      <IonLabel>{t.task}</IonLabel>
                      <Link to="/timer">
                        <IconButton sx={{ color: "white" }}>
                          <IonIcon icon={play}></IonIcon>
                        </IconButton>
                      </Link>
                      <IconButton
                        onClick={() => deleteT(t.id)}
                        sx={{ color: "white" }}
                      >
                        <IonIcon slot="end" icon={trash}></IonIcon>
                      </IconButton>
                      <IconButton
                        sx={{ color: "white" }}
                        onClick={() => doneTask(t.id)}
                      >
                        <IonIcon icon={checkmarkDone}></IonIcon>
                      </IconButton>
                    </IonItem>
                  ))
                : null}
            </Box>
          </Box>

          <AppBar />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab1;
