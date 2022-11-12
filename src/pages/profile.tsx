

import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import TinderCard from 'react-tinder-card'
import './profile.css';
import React, { useRef } from 'react';
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';

import './main.css';


const Profile: React.FC = () => {
    
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }


    return (
      <IonPage>
        <IonContent>
          <div className="profile">
            <div className="header-profile">
              <h2>Profile</h2>
              <i className="fa-duotone fa-magnifying-glass"></i>
            </div>
            <div className="profile-photo">
              <div className="image-photo">
                <img src="assets/image/Avatar.png" alt="" />
                <span><h3 className="combo">75% Completed</h3></span>
              </div>
              <div className="profile-name">
                <div className="profile-user">
                  <h2>John Doe</h2>
                  <Link to=""><i className="fa-solid fa-pen"></i></Link>
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
              <div className="profile-interest">
                <div className="mandem"><p>⚽️ Football</p></div>
                <div className="mandem"><p>🍃  Nature</p></div>
                <div className="bigger"><p>🗣 Language</p></div>
                <div className="bigger"><p className="">📸 Photography</p></div>
                <div className="mandem"><p>✍🏻 Writing</p></div>
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
                <h2>FRNDR Premium</h2>
              </div>
              <div className="each-miscellanous">
                <div className="icon-down"><i className="fa-solid fa-gear set"></i></div>
                <h2>Settings</h2>
              </div>
              <div className="each-miscellanous">
                <div className="icon-down"><i id="open-custom-dialog" className="fa-solid fa-arrow-right-from-bracket sign"></i></div>
                <h2>Sign Out</h2>
              </div>
            </div>
  
          </div>
        </IonContent>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h1>Dialog header</h1>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Item 1</IonLabel>
              </IonItem>
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Item 2</IonLabel>
              </IonItem>
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Item 3</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
    </IonPage>
    );
  };

  export default Profile;