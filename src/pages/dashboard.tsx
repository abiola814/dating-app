import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/react';
import { State } from 'ionicons/dist/types/stencil-public-runtime';
import { useSelector } from 'react-redux';
import './Home.css';
import React from 'react';
import { Logout } from '../firebaseconfigs';
import { useHistory } from 'react-router';

const Dashboard: React.FC = () => {
  const email = useSelector((state: any) => state.user.email)
  let history = useHistory();


  async function logout()
  {
    await Logout()
    history.push('/')
  }
    return (
      <IonPage>
        <IonContent>
          <div className='main'>
            <div className='image'>
              <img src="assets/image/back.png" alt="main-logo" />
            </div>
            <div className='letter'>
              <h3 className='home-h3'>Welcome {email}</h3>
            </div>
            <div className='buttons'>
            <div><IonButton onClick={logout} fill='outline' className='login'>Logout</IonButton></div>
            </div>
          </div>
        </IonContent>
    </IonPage>
    );

    };
  export default Dashboard;