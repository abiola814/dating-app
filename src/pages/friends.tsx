import { IonContent,IonSlide, IonSlides,IonHeader, IonPage,IonImg,IonGrid,IonRow,IonCol,IonNote, IonTitle, IonToolbar,IonButton } from '@ionic/react';
import "./friends.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Friends: React.FC = () => {
    let history = useHistory();
    function cancel(){
        history.push('/dashboard/tab2')  
    }
    return (
        <IonPage className='aboutbody'>
             <script src="https://kit.fontawesome.com/64bee0d46a.js" ></script>
     
         <IonContent>
    <div className="top-image">
        <div className="top-mark">
            <i className="fa-solid fa-xmark"></i>
        </div>
        <Swiper
      // install Swiper modules
      modules={[Pagination]}
                spaceBetween={5}
                slidesPerView={1}
                pagination={{ clickable: true,bulletClass: `swiper-pagination-bullet swiper-pagination-testClass` }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="swipercolor"
                >
            <SwiperSlide>
            <img src="assets/image/SaraProfile.png" className="top-main-image"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="assets/image/SaraProfile.png" className="top-main-image"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="assets/image/SaraProfile.png" className="top-main-image"/>
            </SwiperSlide>
            </Swiper>
        <div className="chat-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.3C0 2.42479 0.347678 1.58542 0.966548 0.966548C1.58542 0.347678 2.42479 0 3.3 0H14.3C15.1752 0 16.0146 0.347678 16.6335 0.966548C17.2523 1.58542 17.6 2.42479 17.6 3.3V9.9C17.6 10.7752 17.2523 11.6146 16.6335 12.2335C16.0146 12.8523 15.1752 13.2 14.3 13.2H10.3554L6.2777 17.2777C6.12386 17.4315 5.92788 17.5362 5.71453 17.5786C5.50119 17.6211 5.28005 17.5993 5.07908 17.516C4.87811 17.4328 4.70633 17.2919 4.58546 17.111C4.46459 16.9302 4.40005 16.7175 4.4 16.5V13.2H3.3C2.42479 13.2 1.58542 12.8523 0.966548 12.2335C0.347678 11.6146 0 10.7752 0 9.9V3.3ZM22 7.7V14.3C22 15.4 21.34 17.6 18.7 17.6H17.6V20.9C17.6 21.2663 17.38 22 16.5 22C16.2767 22 16.0952 21.9527 15.95 21.8757L11.6743 17.6H7.7L11 14.3H14.3C15.7663 14.3 18.7 13.42 18.7 9.9V4.4C19.8 4.4 22 5.06 22 7.7Z" fill="#730075"/>
            </svg>                
        </div>
        <div className="thumbnails">
            <div className="active"></div>
            <div className="thumb"></div>
            <div className="thumb"></div>
            <div className="thumb"></div>
        </div>
        <div className="match">70% Match</div>
    </div>

    <div className="text-content">
        <div className="name-content">
            <h2>Sara Williams (27)</h2>
            <p>California, USA 54km</p>
            <div className="more-button-circle">
                <div className="more-button-dots">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                    <div className="dot3"></div>
                </div>
            </div>
        </div>
        <div className="about-content">
            <h3>About</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
            <a href="#">Show more</a>
        </div>
        <div className="basic-info">
            <h3>Basic Information</h3>
            <p><span className="bold">Looking for:</span> Male</p>
            <p><span className="bold">Gender:</span> Female</p>
            <p><span className="bold">Age:</span> 27 Years old</p>
        </div>
    </div>

    <div className="profile-icons">
        <div className="xmark" onClick={cancel}>
            <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="like">
            <i className="fa-solid fa-heart"></i>
        </div>
        <div className="star">
            <i className="fa-solid fa-star"></i>
        </div>
    </div>
        </IonContent>
        </IonPage>
    )
}

export default Friends;