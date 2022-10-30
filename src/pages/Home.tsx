import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/react';
import './Home.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className='main'>
          <div className='image'>
            <img src="assets/image/back.png" alt="main-logo" />
          </div>
          <div className='letter'>
            <h3 className='home-h3'>Welcome to FRNDR</h3>
            <p className='home-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,etium maecenas sed urna</p>
          </div>
          <div className='buttons'>
          <div><IonButton routerLink='/login' fill='outline' className='login'>Login</IonButton></div>
          <div><IonButton routerLink='/register' className='register'>Register</IonButton></div>
          </div>
        </div>
      </IonContent>
  </IonPage>
  );
};

export default Home;
