import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, home, list, square, timer, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useState } from "react";
import Landing from "./pages/Landing/Landing";

setupIonicReact();

const App: React.FC = () => {
  interface task {
    id: number;
    task: string;
    type: string;
    timer: string;
  }
  const [taskDone, setTaskDone] = useState<task[]>([]);
  const [actual, setActual] = useState("");
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Tab1
              taskDone={taskDone}
              setTaskDone={setTaskDone}
              actual={actual}
              setActual={setActual}
            />
          </Route>
          <Route exact path="/timer">
            <Tab2 actual={actual} setActual={setActual} />
          </Route>
          <Route exact path="/completed">
            <Tab3 taskDone={taskDone} setTaskDone={setTaskDone} />
          </Route>
          <Route exact path="/" component={Landing}></Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
