import { IonPage, IonContent,IonBackButton,IonButton } from "@ionic/react";
import { Link } from 'react-router-dom';
import './account-settings.css';

const AccountSettings: React.FC = () => {

    return (
        <IonPage>
            <IonContent>
                <div className="main-account">
                    <div className="account-head">
                        <div className="account-set">
                            <IonBackButton text="" className="fa-solid fa-angle-left" defaultHref="profile" />
                            <h2>Settings</h2>
                        </div>
                        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="acct-set">
                        <h2 className="set-head">Account Settings</h2>
                        <div className="phone-set">
                            <h3>Phone number</h3>
                            <p>91121334243</p>
                        </div>
                        <div className="phone-set">
                            <h3>Email</h3>
                            <Link to=""><p>johndoe@gmail.com</p></Link>
                        </div>
                    </div>
                    <div className="account-discovery">
                        <h3>Discovery</h3>
                        <div className="account-location">
                            <input type="text" placeholder="Current location(San Francisco)"/>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                    </div>
                    <div className="account-distance">
                        <div className="kilo-dist">
                            <h3>Distance</h3>
                            <p>50 km</p>
                        </div>
                        <div className="progress"></div>
                    </div>
                    <div className="account-age">
                        <div className="kilo-dist">
                            <h3>Age Range</h3>
                            <p>2-6</p>
                        </div>
                        <div className="progress"></div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default AccountSettings;