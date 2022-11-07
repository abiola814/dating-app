import { IonContent, IonHeader, IonPage,IonImg,IonGrid,IonRow,IonCol,IonNote, IonTitle, IonToolbar,IonButton } from '@ionic/react';
import "./question.css"


const Question: React.FC = () => {
    return (
        <IonPage>
        <IonHeader className="reg-main">
           <img src="assets/image/back.png" alt="main-logo" className='reg-img'/>
         </IonHeader>
         <IonContent>
               <h1 className='interesth1'>Answer to the following question...</h1>
        </IonContent>
        </IonPage>
    )
}

export default Question;