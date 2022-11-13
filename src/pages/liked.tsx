import { IonContent, IonHeader, IonPage,IonImg,IonGrid,IonRow,IonCol,IonNote, IonTitle, IonToolbar,IonButton } from '@ionic/react';
import "./fav.css"

const Liked: React.FC = () => {
    return (
        <IonPage className='dashboardfav'>
        <IonHeader>
        <div className="favorite">
            <h2>Liked</h2>
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
         </IonHeader>
         <IonContent>
         <div className="favorite-cards">
            <div className="row">
                <div className="image1">
                    <div className="percentage-match-liked">
                        <h4 className="percentage-match-text">70% Match</h4>
                    </div>
                    <img src="assets/image/saraJohns.png" alt=""/>
                    <div className="col-text">
                        <h4 className="name-title">Sara Johns</h4>
                        <p className="address">Califonia, USA, (54km)</p>
                    </div>
                </div>
                <div className="image2">
                    <div className="percentage-match-liked">
                        <h4 className="percentage-match-text">70% Match</h4>
                    </div>
                    <img src="assets/image/AmendaGrace.png" alt=""/>
                    <div className="col-text">
                        <h4 className="name-title">Amenda Grace</h4>
                        <p className="address">Califonia, USA, (54km)</p>
                    </div>
                </div>
            </div>
    
            <div className="row">
                <div className="image3">
                    <div className="percentage-match-liked">
                        <h4 className="percentage-match-text">70% Match</h4>
                    </div>
                    <img src="assets/image/LaraWilliams.png" alt=""/>
                    <div className="col-text">
                        <h4 className="name-title">Lara Williams</h4>
                        <p className="address">Califonia, USA, (54km)</p>
                    </div>
                </div>
                <div className="image4">
                    <div className="percentage-match-liked">
                        <h4 className="percentage-match-text">70% Match</h4>
                    </div>
                    <img src="assets/image/JaneSmith.png" alt=""/>
                    <div className="col-text">
                        <h4 className="name-title">Jane Smith</h4>
                        <p className="address">Califonia, USA, (54km)</p>
                    </div>
                </div>
            </div>
    
            <div className="row">
                <div className="image5">
                    <div className="percentage-match-liked">
                        <h4 className="percentage-match-text">70% Match</h4>
                    </div>
                    <img src="assets/image/7.png" alt=""/>
                </div>
    
                <div className="image6">
                    <div className="percentage-match-liked">
                        <h4 className="percentage-match-text">70% Match</h4>
                    </div>
                    <img src="assets/image/8.png" alt=""/>
                </div>
            </div>
        </div>
        </IonContent>
        </IonPage>
    )
}

export default Liked;