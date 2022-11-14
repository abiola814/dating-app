import { useIonLoading } from "@ionic/react";
import React from "react";
import { IonContent, IonHeader, IonPage,IonImg,IonGrid,IonRow,IonCol,IonNote, IonTitle, IonToolbar,IonButton, useIonRouter } from '@ionic/react';
import './favourite.css';
import { INTERESTS } from "../constant";
import { useHistory } from 'react-router';

const Loadings: React.FC = () => {
    const [present, dismiss] = useIonLoading();

    return(
        <div>
     
              </div>

    )
}
export default Loadings;