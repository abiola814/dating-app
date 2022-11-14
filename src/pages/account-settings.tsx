import { IonPage, IonContent,IonBackButton,IonRange } from "@ionic/react";

import './account-settings.css';

const AccountSettings: React.FC = () => {

    return (
        <IonPage>
            <IonContent>
                <div className="main-account">
                    <div className="account-head">
                        <div className="account-set">
                            <IonBackButton text="" defaultHref="/dashboard/tab3" />
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
                            <p className="settings-email">johndoe@gmail.com</p>
                        </div>
                    </div>
                    <div className="account-discovery">
                        <h2 className="set-head">Discovery</h2>
                        <div className="account-location">
                            <label htmlFor="">Location</label>
                            <p>
                                <input className="" type="text" placeholder="Current location(San Francisco)"/>
                                <i className="fa-solid fa-location-dot"></i>
                            </p>
                        </div>
                    </div>
                    <div className="account-distance">
                        <div className="kilo-dist">
                            <h2>Distance</h2>
                            <p>50 km</p>
                        </div>
                        <IonRange value={50} pin={true} ></IonRange>
                    </div>
                    <div className="account-age">
                        <div className="kilo-dist">
                            <h2>Age Range</h2>
                            <p>2-6</p>
                        </div>
                        <IonRange
      dualKnobs={true}
      value={{
        lower: 20,
        upper: 80,
      }}
    ></IonRange>

                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default AccountSettings;