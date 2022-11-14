import { IonPage, IonContent, IonHeader,useIonToast, useIonRouter,IonButton,IonLoading, IonList, IonItem } from "@ionic/react";
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
        const navigation =useIonRouter()


      
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
              navigation.push('/dashboard','root',"replace") 

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
                <p className="log-p">Welcome to <em className="em">FRNDR</em>, enter your details below to continue .</p>
            </div>
            <div className="input">
            <IonLoading message="processing" duration={0} isOpen={busy}/>
                <form className="form" >
                    <div className="innert-input">
                        <label htmlFor="" className="label">Email/ Mobile Number</label>
                        <input type="text" name='email' placeholder="Enter your username or email" className="input-type" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="innert-input">
                        <label htmlFor="" className="label">Password</label>
                        <input type="text" name='password' placeholder="Enter Password" className="input-type" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="inner">
                        <Link rel="stylesheet" to="" className="anchor">Forgot password?</Link>
                        <IonButton  onClick={handleSubmit} color="#4B164C" className="but" >login</IonButton>
                    </div>
                </form>
            </div>
            <p className="ordiv">OR</p>
            <div className="log-media">
                <Link to="" className="google"><i className="fa-brands fa-google logo-icon"></i></Link>
                <Link to="" className="facebook"><i className="fa-brands fa-facebook logo-icon"></i></Link>
                <Link to="" className="apple"><i className="fa-brands fa-apple logo-icon"></i></Link>
            </div>
            <div className="log">
              <p>Don’t have an account?</p><span><Link to="/register">Register</Link></span>
            </div>
            </div>
        </IonContent>
      
    </IonPage>
    );
  };

  export default Login;