import { IonPage, IonContent, IonHeader, IonButton } from "@ionic/react";
import './login.css';

const Login: React.FC = () => {
    return (
      <IonPage>
        <IonContent>
         <div className="log-main">
            <div className='image'>
                <img src="assets/image/back.png" alt="main-logo" className='log-img'/>
            </div>
            <div className='letter'>
                <h3 className="log-h3">Login to your account</h3>
                <p className="log-p">Welcome to FRNDR, enter your details below to continue .</p>
            </div>
            <div className="input">
                <form action="" className="form">
                    <div className="inner-input">
                        <label htmlFor="">Email/ Mobile Number</label>
                        <input type="text" placeholder="Enter your username or email" className="input-type"/>
                    </div>
                    <div className="inner-input">
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="Enter Password" className="input-type"/>
                    </div>
                    <div className="inner">
                        <a rel="stylesheet" href="" className="anchor">Forgot password?</a>
                        <IonButton className="but">login</IonButton>
                    </div>
                </form>
            </div>
            <p>OR</p>
            <div className="log-media">
                <a href="" className="google"><i className="fa-brands fa-google logo-icon"></i></a>
                <a href="" className="facebook"><i className="fa-brands fa-facebook logo-icon"></i></a>
                <a href="" className="apple"><i className="fa-brands fa-apple logo-icon"></i></a>
            </div>
            <div className="log">
              <p>Already have an account?</p><span><a href="">Login</a></span>
            </div>
         </div>
        </IonContent>
    </IonPage>
    );
  };

  export default Login;