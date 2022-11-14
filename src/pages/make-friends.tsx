import { IonPage, IonContent, IonHeader, IonButton, useIonRouter } from "@ionic/react";
import { CSSProperties } from "react";
import TinderCard from 'react-tinder-card'
import './make-friends.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from "react-router";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


const MakeFriend: React.FC = () => {
    const navigation = useIonRouter();
function about(){
    navigation.push('/friends','root',"replace") 

}
    return (
      <IonPage  className="makebody">

        <IonHeader>
        <div className="navline">
        <img src="assets/image/icons/logo.png" alt=""/>
        <i className="fa-regular fa-bell"></i>
    </div>
        </IonHeader>
        <IonContent>

        <Swiper
      spaceBetween={10}

      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
         <SwiperSlide>
        <div className="avatar-profile">
            <img src="assets/image/avatar/AvatarMystory.png" alt=""/>
            <img src="assets/image/avatar/AddStory.png" className="plus-sign" alt=""/>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="avatar-profile">
            <img src="assets/image/avatar/profileselena.png" alt=""/>
            <p className="avatar-name">Selena</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="avatar-profile">
            <img src="assets/image/avatar/profileClara.png" alt=""/>
            <p className="avatar-name">Clara</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="avatar-profile">
            <img src="assets/image/avatar/profileselena.png" alt=""/>
            <p className="avatar-name">Selena</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="avatar-profile">
            <img src="assets/image/avatar/profileselena.png" alt=""/>
            <p className="avatar-name">Selena</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="avatar-profile">
            <img src="assets/image/avatar/profilefabian.png" alt=""/>
            <p className="avatar-name">Fabian</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="avatar-profile">
            <img src="assets/image/avatar/profileGeorge.png" alt=""/>
            <p className="avatar-name">Ge</p>
        </div>
        </SwiperSlide>
        </Swiper>
         

    <div className="search-partners">
        <div className="make-friends">
            <p>Make Friends</p>
        </div>
        <p className="search-p">Search Partners</p>
    </div>

    <div className="home-picture">
        <div className="percentage-match">
            <p>70% Match</p>
        </div>
        <img src="assets/image/SaraHome.png" alt="" className="main-picture" onClick={about}/>
        <img src="assets/image/saraJohns.png" alt="" className="one"/>
        <img src="assets/image/AmendaGrace.png" alt="" className="two"/>
        <img src="assets/image/JaneSmith.png" alt="" className="three"/>

        <div className="profile-text">
            <h4 className="name-title">Sara Johns</h4>
            <p className="address">Califonia, USA, (54km)</p>
        </div>

        <div className="profile-icon">
            <div className="xmark">
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="like">
                <i className="fa-solid fa-heart"></i>
            </div>
            <div className="star">
                <i className="fa-solid fa-star"></i>
            </div>
        </div>

            </div>
        </IonContent>
    
    </IonPage>

    );
  };

  export default MakeFriend;