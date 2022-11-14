import { IonPage, IonContent,IonInput,IonBackButton,useIonRouter,IonImg } from "@ionic/react";
import './verify.css';

import { useState } from "react";
import { MuiOtpInput } from 'mui-one-time-password-input'



const Verify: React.FC = () => {
  const [otp, setOtp] = useState('');


  const navigation = useIonRouter();
  
  const handleChange = (newValue :any) => {
    setOtp(newValue)
    
  }
  const handleComplete = (finalValue: any) => {
    navigation.push('/favourite','root',"replace") 
   }
    return (
      <IonPage>
        <IonContent scroll-y="false">
        <div className="content">
          <div className="upper">
            <div className="mess">
                <IonBackButton text="" className="fa-solid fa-angle-left" defaultHref="register" />
                <IonImg src="assets/image/back.png"  className="im-sent" alt="" />
            </div>
            <div className="verify-message">
              <h2>Verifiy Mobile Number</h2>
              <p>Enter verification code that sent to <strong>+1 123 456 7890</strong> by SMS</p>
            </div>
            <div className="pin">
              <div className="inner-pin">
              <MuiOtpInput value={otp} onChange={handleChange} length={6} onComplete={handleComplete} />
              <IonInput inputmode="email" className="box"></IonInput>
              </div>
              <p>Enter 4 digit code</p>
            </div>
            <div className="resend">Resend Code (0:30s)</div>
          </div>

        </div>
        </IonContent>
    </IonPage>
    
    );
  };

  export default Verify;