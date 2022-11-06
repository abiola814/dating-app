import { IonPage, IonContent, IonHeader,useIonToast, IonButton,IonLoading, IonList, IonItem } from "@ionic/react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Alert, } from "react-bootstrap";
import { loginUser } from "../firebaseconfigs";
import './login.css';
import { useDispatch } from "react-redux";
import { setUserState } from "../redux/actions";

const Login: React.FC = () => {

  const [busy,setBusy] = useState<boolean>(false)

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");
        const [present] = useIonToast();
        const dispatch = useDispatch()
        let history = useHistory();


      
        async function handleSubmit(){
          setBusy(true)
          await loginUser(email,password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential;
            console.log(user)
            present({
              message: 'login successful!',
              duration: 1500,
              position: 'middle'
            });
            dispatch(setUserState(user.user.email))
            history.push('/dashboard') 

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            present({
              message: errorMessage,
              duration: 4000,
              position: 'middle'
            });
          });
       
          // try {
          //   await logIn(email, password);
          //   history("/login");
          // } catch (err) {
          //   if (err instanceof Error) {
          //     // ✅ TypeScript knows err is Error
          //     console.log(err.message);
          //   } else {
          //     console.log('Unexpected error', err);
          //   }
          //   // setError(err.message);
          // }
          setBusy(false)
        };

    return (
      <IonPage>
      
        
        <IonContent scroll-y="false">
         <div className="log-main">
            <div className='image'>
                <img src="assets/image/back.png" alt="main-logo" className='log-img'/>
            </div>
            <div className='letter'>
                <h2 className="log-h2">Login to your account</h2>
                <p className="log-p">Welcome to FRNDR, enter your details below to continue .</p>
            </div>
            <div className="input">
            <IonLoading message="processing" duration={0} isOpen={busy}/>
                <form className="form" >
                    <div className="inner-input">
                        <label htmlFor="">Email/ Mobile Number</label>
                        <input type="text" name='email' placeholder="Enter your username or email" className="input-type" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="inner-input">
                        <label htmlFor="">Password</label>
                        <input type="text" name='password' placeholder="Enter Password" className="input-type" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="inner">
                        <a rel="stylesheet" href="" className="anchor">Forgot password?</a>
                        <IonButton  onClick={handleSubmit} color="#4B164C" className="but" >login</IonButton>
                    </div>
                </form>
            </div>
            <p>OR</p>
            <IonItem className="log-media">
                <a href="" className="google"><i className="fa-brands fa-google logo-icon"></i></a>
                <a href="" className="facebook"><i className="fa-brands fa-facebook logo-icon"></i></a>
                <a href="" className="apple"><i className="fa-brands fa-apple logo-icon"></i></a>
            </IonItem>
            <div className="log">
              <p>Dont have an account?</p><span><Link to="/register">Register</Link></span>
            </div>
            </div>
        </IonContent>
      
    </IonPage>
    );
  };

  export default Login;