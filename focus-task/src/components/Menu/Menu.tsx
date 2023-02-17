import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Opciones</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem button>
            <Link to="/completed">
              <IonLabel>Tareas realizadas</IonLabel>
            </Link>
          </IonItem>
          <IonItem button>
            <IonLabel>Tareas Eliminadas</IonLabel>
          </IonItem>
        </IonContent>
      </IonMenu>
    </>
  );
}
export default Menu;
