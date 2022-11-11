import { IonContent, IonHeader, IonPage,IonImg,IonGrid,IonRow,IonCol,IonNote, IonTitle, IonToolbar,IonButton } from '@ionic/react';
import "./fav.css"

const Favour: React.FC = () => {
    return (
        <IonPage>
             <script src="https://kit.fontawesome.com/64bee0d46a.js" ></script>
        <IonHeader>
        <div className="favorite">
        <h2>Favorite</h2>
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
         </IonHeader>
         <IonContent>
       
        </IonContent>
        </IonPage>
    )
}

export default Favour;