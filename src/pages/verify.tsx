import { IonPage, IonContent, IonHeader, IonButton } from "@ionic/react";
import { NONAME } from "dns";
import './verify.css';

const Verify: React.FC = () => {
    return (
      <IonPage>
        <IonContent scroll-y="false">
        <div className="content">
          <div className="upper">
            <div className="mess">
                <i className="fa-solid fa-angle-left"></i>
                <img src="assets/image/back.png"  className="im-sent" alt="" />
            </div>
            <div className="verify-message">
              <h2>Verifiy Mobile Number</h2>
              <p>Enter verification code that sent to +1 123 456 7890 by SMS</p>
            </div>
            <div className="pin">
              <div className="inner-pin">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              </div>
              <p>Enter 4 digit code</p>
            </div>
            <div className="resend">Resend Code (0:30s)</div>
          </div>
            <div className="keypads">
              <div className="keys">
                <div className="num-flex">
                <div className="nums"><p>1</p></div>
                <div className="nums"><p>2</p><p className="let">ABC</p></div>
                <div className="nums"><p>3</p><p className="let">DEF</p></div>
                </div>
                <div className="num-flex">
                <div className="nums"><p>4</p><p className="let">GHI</p></div>
                <div className="nums"><p>5</p><p className="let">JKL</p></div>
                <div className="nums"><p>6</p><p className="let">MNO</p></div>
                </div>
                <div className="num-flex">
                <div className="nums"><p>7</p><p className="let">PQRS</p></div>
                <div className="nums"><p>8</p><p className="let">TUVW</p></div>
                <div className="nums"><p>9</p><p className="let">XYZ</p></div>
                </div>
                <div className="num-flex flex">
                  <div className=""></div>
                  <div className="nums" style={{visibility: 'hidden'}}>0</div>
                  <div className="nums">0</div>
                  <div className="nums-i"><i className="fa-light fa-delete-left"></i></div>
                </div>
              </div>
            </div>
        </div>
        </IonContent>
    </IonPage>
    );
  };

  export default Verify;