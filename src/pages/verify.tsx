import { IonPage, IonContent,IonInput, IonHeader,IonBackButton, IonButton } from "@ionic/react";
import { NONAME } from "dns";
import './verify.css';
import { Link ,useHistory} from "react-router-dom";
import OtpInput from "../components/OtpInput";
import { useState } from "react";
import { MuiOtpInput } from 'mui-one-time-password-input'
import { NumericKeyboard } from 'react-numeric-keyboard';


const Verify: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  let history = useHistory();
  
  const handleChange = (newValue :any) => {
    setOtp(newValue)
    
  }
  const handleComplete = (finalValue: any) => {
    history.push('/favourite')
  }
    return (
      <IonPage>
        <IonContent scroll-y="false">
        <div className="content">
          <div className="upper">
            <div className="mess">
                <IonBackButton text="" className="fa-solid fa-angle-left" defaultHref="register" />
                <img src="assets/image/back.png"  className="im-sent" alt="" />
            </div>
            <div className="verify-message">
              <h2>Verifiy Mobile Number</h2>
              <p>Enter verification code that sent to +1 123 456 7890 by SMS</p>
            </div>
            <div className="pin">
              <div className="inner-pin">
              <MuiOtpInput value={otp} onChange={handleChange} length={6} onComplete={handleComplete} />
              <IonInput inputmode="email"></IonInput>
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