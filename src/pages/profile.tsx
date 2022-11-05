import { IonPage, IonContent, IonHeader, IonButton } from "@ionic/react";
import { CSSProperties } from "react";
import TinderCard from 'react-tinder-card'
import './profile.css';


const Profile: React.FC = () => {
    

    return (
      <IonPage>
        <IonContent scroll-y="false">
          <div className="profile">
            <div className="header-profile">
              <h2>Profile</h2>
              <i className="fa-duotone fa-magnifying-glass"></i>
            </div>
            <div className="profile-photo">
              <div className="image-photo">
                <img src="assets/image/Avatar.png" alt="" />
                <div className="combo"><h4>75% Completed</h4></div>
              </div>
              <div className="profile-name">
                <h3>John Doe</h3>
                <div className="profile-user">
                  <span>@johndoe</span>
                  <i className="fa-solid fa-pen"></i>
                </div>
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
                <i className="fa-solid fa-crown"></i>
                <h2>FRNDR Premium</h2>
              </div>
              <div className="each-miscellanous">
                <i className="fa-regular fa-gear"></i>
                <h2>Settings</h2>
              </div>
              <div className="each-miscellanous">
                <i className="fa-regular fa-arrow-right-from-bracket"></i>
                <h2>Sign Out</h2>
              </div>
            </div>
            <div className="isale">
              <div className=""><i className="fa-solid fa-star" style={{color: '#DCD7E1'}}></i></div>
              <div className=""><i className="fa-solid fa-heart"style={{color: '#DCD7E1'}}></i></div>
              <div className=""><i className="fa-solid fa-star"style={{color: '#DCD7E1'}}></i></div>
              <div className=""><i className="fa-thin fa-messages"style={{color: '#DCD7E1'}}></i></div>
              <div className=""><i className="fa-solid fa-user"style={{color: '#730075'}}></i></div>
            </div>
          </div>
        </IonContent>
    </IonPage>
    );
  };

  export default Profile;