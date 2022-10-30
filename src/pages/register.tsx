import { IonPage, IonContent, IonHeader,IonInput, IonButton, IonItem, IonList } from "@ionic/react";
import './register.css';
import { Link } from "react-router-dom";

const Register: React.FC = () => {
    return (
      <IonPage>
        <IonContent className="fit-content">
         <IonList className="reg-main">
            <div className='image'>
                <img src="assets/image/back.png" alt="main-logo" className='reg-img'/>
            </div>
            <div className='letter'>
                <h3 className="reg-h3">Register to your account</h3>
                <p className="reg-p">Fill the following essential details to getting registered.</p>
            </div>
            <IonItem>
                <form action="" className="form">
                    <div className="inner-input">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter your username or email" className="input-type"/>
                    </div>
                    <div className="inner-input">
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" placeholder="Enter your username or email" className="input-type"/>
                    </div>
                    <div className="inner-input">
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="Enter Password" className="input-type"/>
                    </div>
                    <div className="input-check">
                        <p><input type="checkbox" className="check"/><span className="terms">I agree to that FRNDR terms and coditons.</span></p> <a href="" className="learn">Learn more.</a>
                    </div>
                    <div className="inner">
                        <IonButton color="#4B164C" className="but">Register</IonButton>
                    </div>
                </form>
            </IonItem>
            <IonItem className="media">
              <p>Already have an account?</p><Link to="/login"><span>Login</span></Link>
            </IonItem>
         </IonList>
        </IonContent>
    </IonPage>
    );
  };

  export default Register;