import { IonPage, IonContent, IonHeader, IonButton } from "@ionic/react";
import './register.css';

const Register: React.FC = () => {
    return (
      <IonPage>
        <IonContent>
         <div className="reg-main">
            <div className='image'>
                <img src="assets/image/back.png" alt="main-logo" className='reg-img'/>
            </div>
            <div className='letter'>
                <h3 className="reg-h3">Register to your account</h3>
                <p className="reg-p">Fill the following essential details to getting registered.</p>
            </div>
            <div className="input">
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
                        <IonButton className="but">Register</IonButton>
                    </div>
                </form>
            </div>
            <div className="media">
              <p>Already have an account?</p><span>Login</span>
            </div>
         </div>
        </IonContent>
    </IonPage>
    );
  };

  export default Register;