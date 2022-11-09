import { IonContent, IonHeader, IonPage,IonImg,IonGrid,IonRow,IonCol,IonNote, IonTitle, IonToolbar,IonButton } from '@ionic/react';
import './favourite.css';


const Favourite: React.FC = () => {
  return (
    <IonPage>
     <IonHeader className="reg-main">
        <img src="assets/image/back.png" alt="main-logo" className='reg-img'/>
    </IonHeader>
      <IonContent>
            <h1 className='interesth1'>Pick your interests...</h1>
            <div className="inner-input">
                <input type="text" placeholder="Search" className="input-type"/>
                <div>
                <IonNote>You should select at least 5 interests</IonNote>
                </div>
            </div>
        <IonGrid>
        <IonRow className='modifyrow'>
          <IonCol className='select__item'>✍🏻Writing</IonCol>
          <IonCol className='select__item'>📸Photography</IonCol>
          <IonCol className='select__item'>🗣Language</IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow className='modifyrow'>
          <IonCol  className='select__item'>✍🏻Writing </IonCol>
          <IonCol  className='select__item'>📸Photography </IonCol>
          <IonCol  className='select__item'>🗣Language</IonCol>
        </IonRow>
      </IonGrid>
            <IonGrid>
        <IonRow className='modifyrow'>
          <IonCol  className='select__item'>✍🏻Writing</IonCol>
          <IonCol  className='select__item'>📸Photography</IonCol>
          <IonCol  className='select__item'>🗣Language</IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow className='modifyrow'>
          <IonCol  className='select__item'>✍🏻Writing</IonCol>
          <IonCol  className='select__item'>📸Photography</IonCol>
          <IonCol  className='select__item'>🗣Language</IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow className='modifyrow'>
          <IonCol  className='select__item'>✍🏻Writing </IonCol>
          <IonCol  className='select__item'>📸Photography </IonCol>
          <IonCol  className='select__item'>🗣Language</IonCol>
        </IonRow>
      </IonGrid>
            <IonGrid>
        <IonRow className='modifyrow'>
          <IonCol  className='select__item'>✍🏻Writing</IonCol>
          <IonCol  className='select__item'>📸Photography</IonCol>
          <IonCol  className='select__item'>🗣Language</IonCol>
        </IonRow>
      </IonGrid>
      

      <IonButton className='buttonposition'>Next</IonButton>
      </IonContent>
  </IonPage>
  );
};

export default Favourite;
