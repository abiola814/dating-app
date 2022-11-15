import { IonContent,IonBackButton,IonHeader, IonPage,IonImg } from '@ionic/react';

import './profilesetting.css'
const ProfileSetting: React.FC = () => {
    return (
        <IonPage className='bodys'>
            
        <IonHeader>
        <div className="profile-settings">
        <IonBackButton text="" defaultHref="/dashboard/tab3" />
            <h2 className='prosetpad'>Profile Settings</h2>
        </div>
         </IonHeader>
         <IonContent>
         <div className="pictures">
            <div className="pic1">
                <div className="cancel">
                    <i className="fa-solid fa-xmark"></i>
                </div>
    
                <div className="circle">
                    <p>1</p>
                </div>
    
                <IonImg src="assets/image/pf1.png" alt=""/>
            </div>
    
            <div className="pic2">
                <div className="cancel">
                    <i className="fa-solid fa-xmark"></i>
                </div>
    
                <div className="circle">
                    <p>2</p>
                </div>
                <IonImg src="assets/image/pf2.png" alt=""/>
            </div>
            <div className="pic3">
                <div className="cancel">
                    <i className="fa-solid fa-xmark"></i>
                </div>
    
                <div className="circle">
                    <p>3</p>
                </div>
                <IonImg src="assets/image/pf3.png" alt=""/>
            </div>
            <div className="pic4">
                <div className="cancel">
                    <i className="fa-solid fa-xmark"></i>
                </div>
    
                <div className="circle">
                    <p>4</p>
                </div>
                <IonImg src="assets/image/pf4.png" alt=""/>
            </div>
            <div className="pic5">
                <div className="cancel">
                    <i className="fa-solid fa-xmark"></i>
                </div>
    
                <div className="circle">
                    <p>5</p>
                </div>
                <IonImg src="assets/image/pf5.png" alt=""/>
            </div>
            <div className="pic6">
                <div className="cancel">
                    <i className="fa-solid fa-xmark"></i>
                </div>
    
                <div className="circle">
                    <p>6</p>
                </div>
                <IonImg src="assets/image/pf6.png" alt=""/>
            </div>
        </div>
    
        <div className="general-info">
            <h2 className="section-title">GENERAL INFO</h2>
            <form className="general-info-form">
                <input type="text" placeholder="John Doe"/>
                <select name="gender" id="">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="date" name="date-of-birth" id="dob"/>
                <select name="status" id="">
                    <option value="dating">Dating</option>
                    <option value="single">Single</option>
                </select>
                <textarea name="" id=""  placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit."></textarea>
                <div className="social-url">
                    <IonImg src="assets/image/icons/fb.png" className="social"/>
                    <input type="text" placeholder="URL here"/>
                </div>
                <div className="social-url">
                    <IonImg src="assets/image/icons/ig.png" className="social"/>
                    <input type="text" placeholder="URL here"/>
                </div>
            </form>
            
        </div>
    
        <div className="interests">
            <h2 className="section-title">INTERESTS</h2>
            <form className="interests">
                <input type="text" placeholder="Search your interests"/>
            </form>
    
            <div className="box-of-interests">
                <div className="football">
                    <i className="fa-duotone fa-futbol"></i>
                    <p>Football</p>
                </div>
                <div className="nature">
                    <i className="fa-sharp fa-solid fa-seedling"></i>
                    <p>Nature</p>
                </div>
                <div className="language">
                    <p>Language</p>
                </div>
                <div className="photograpy">
                    <i className="fa-solid fa-camera"></i>
                    <p>Photography</p>
                </div>
                <div className="writing">
                    <p>Writing</p>
                </div>
            </div>
        </div>
    
        <div className="questions">
            <h2 className="section-title">QUESTIONS</h2>
            <form className="questions-form">
                <div className="questions-form-items">
                    <label htmlFor="question1">1. Question 01</label>
                    <input type="text" placeholder="Answer 01"/>
                </div>
    
                <div className="questions-form-items">
                    <label htmlFor="question1">1. Question 02</label>
                    <input type="text" placeholder="Answer 02"/>
                </div>
    
                <div className="questions-form-items">
                    <label htmlFor="question1">1. Question 03</label>
                    <input type="text" placeholder="Answer 03"/>
                </div>
            </form>
        </div>
    
        <div className="save-div">
            <button className="save-button">Save</button>
        </div>
    
        </IonContent>
    </IonPage>
    )
}

export default ProfileSetting;