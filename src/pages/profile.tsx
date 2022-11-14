

import { Link } from "react-router-dom";
import './profile.css';
import React, { useRef } from 'react';
import { ProfileInterest } from "../constant";

import {
  IonButton,
  IonModal,
  IonContent,
  IonPage,
  IonList,
  IonImg
} from '@ionic/react';


import './main.css';

import { useHistory } from "react-router-dom";
const Profile: React.FC = () => {
    
  const modal = useRef<HTMLIonModalElement>(null);
  let history = useHistory();
  function setting(){
      history.push('/account-settings')  
  }
  function dismiss() {
    modal.current?.dismiss();
  }


    return (
      <IonPage>
        <IonContent>
          <div className="profile">
            <div className="header-profile">
              <h2>Profile</h2>
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="profile-photo">
              <div className="image-photo">
                <IonImg src="assets/image/Avatar.png" alt="" className="ion-profile-img"/>
                <span><h3 className="combo">75% Completed</h3></span>
              </div>
              <div className="profile-name">
                <div className="profile-user">
                  <h2>John Doe</h2>
                  <Link to="/profilesetting"><i className="fa-solid fa-pen edit-prof"></i></Link>
                </div>
                  <span className="at-email">@johndoe</span>
              </div>
            </div>
            <div className="profile-about">
              <h2>Bio</h2>
              <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sed enim suscipit phasellus nibh sed.</p>
              <p className="gender"><span className="boldness">Gender :</span> Male</p>
              <p className="gender"><span className="boldness">Looking for :</span> Female</p>
              <p className="gender"><span className="boldness">Age : </span> 27 Years old</p>
            </div>
            <div className="header-interest">
              <h2>Interest</h2>
              <div className="interests">
                {ProfileInterest.map((item, i) => {
                  return <span key={i}>{item}</span>;
                })}
              </div>
            </div>
            <div className="profile-display">
              <div className="alte">
                <h2>1234</h2>
                <p>Visitors</p>
              </div>
              <div className="alte">
                <h2>1234</h2>
                <p>Likes</p>
              </div><div className="alte">
                <h2>1234</h2>
                <p>Matches</p>
              </div>
            </div>
            <div className="miscellanous">
              <div className="each-miscellanous">
                <div className="icon-down"><i className="fa-solid fa-crown crown"></i></div>
                <h2 className="premium">FRNDR Premium</h2>
              </div>
              <div className="each-miscellanous" onClick={setting}>
                <div className="icon-down"><i className="fa-solid fa-gear set"></i></div>
                <h2 className="premium">Settings</h2>
              </div>
              <div className="each-miscellanous" id="open-custom">
                <div className="icon-down"><i  className="fa-solid fa-arrow-right-from-bracket sign"></i></div>
                <h2 className="premium">Sign Out</h2>
              </div>
            </div>
  
          </div>
        </IonContent>
				<IonModal ref={modal} trigger="open-custom" initialBreakpoint={0.3} >
        <IonContent >

        
            <IonList className="signoutcard" >
                <div className="signoutflex">
                <h2>Are you sure?</h2>	
              </div>
              <div className="signoutflex">
              <p className='signoutp'> Do you want to sign out from the account?</p>
              </div>
              <div className="signoutflex">
                  <IonButton className="btnsignout">sign out</IonButton> 
              </div>
            </IonList>
        
          </IonContent>
        </IonModal>
    </IonPage>
    );
  };

  export default Profile;