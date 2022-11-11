import { IonPage, IonContent,useIonToast, IonHeader,IonInput, IonButton, IonItem, IonList, IonLoading } from "@ionic/react";
import Input, {parsePhoneNumber} from "react-phone-number-input";
import './register.css';
import './demo.css';
import './intlTelInput.css';
import { Link ,useHistory} from "react-router-dom";
import { useState } from "react";
// import PhoneInput from 'react-phone-input-2';
import { createUser } from "../firebaseconfigs";
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'


const Register: React.FC = () => {
    const [busy,setBusy] = useState<boolean>(false)
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [present] = useIonToast();
    const [phone, setPhone] = useState('');

    let history = useHistory();
    
    async function handleSubmit(){
        setBusy(true)
        console.log(email,number,password)
        history.push('/verify')
    await createUser(email,password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    history.push('/login')    // ...
  
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
     present({
        message: errorMessage,
        duration: 1500,
        position: 'middle'
      });
    }
    )

        setBusy(false)
    }
    
    function handleInput(e: React.ChangeEvent<HTMLInputElement>){
      setPhone(e.target.value);
    }

    return (
      <IonPage>
        <IonContent className="fit-content" scroll-y="false">
            <div className="reg-main">
         <IonList>
            <div className='image'>
                <img src="assets/image/back.png" alt="main-logo" className='reg-img'/>
            </div>
            <div className='letter-reg'>
                <h2 className="reg-h2">Register to your account</h2>
                <p className="reg-p">Fill the following essential details to getting registered.</p>
            </div>
            <IonLoading message="processing" duration={0} isOpen={busy}/>
            <div className="register-form">
                <form action="" className="form">
                    <div className="inner-reg-input">
                        <label htmlFor="" className="label">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your username or email" className="input-type"/>
                    </div>
                    <div className="inner-reg-input">
                        <label htmlFor="" className="label">Mobile Number</label>
                        <input className="input-type" value={phone} onChange={handleInput} placeholder="Enter your mobile number"/> 
                    </div>
                    <div className="inner-reg-input">
                        <label htmlFor="" className="label">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Enter Password" className="input-type"/>
                    </div>
                    <div className="input-check">
                        <p><input type="checkbox" className="check"/><span className="terms">I agree to that FRNDR terms and coditons.</span></p> <a href="" className="learn">Learn more.</a>
                    </div>
                    <div className="inner">
                        <IonButton onClick={handleSubmit} color="#4B164C" className="but">Register</IonButton>
                    </div>
                </form>
            </div>
            <div className="media">
              <p>Already have an account?</p><Link to="/login" className="log-under"><span>Login</span></Link>
            </div>
         </IonList>
            </div>
        </IonContent>

    </IonPage>
    );
  };

  export default Register;