import { IonContent, IonPage, useIonRouter,IonImg } from '@ionic/react';
import './favourite.css';
import { INTERESTS } from "../constant";


const Favourite: React.FC = () => {
  const navigation = useIonRouter();
  function submit(){
    navigation.push('/question','root',"replace") 
  }
  return (
    <IonPage>

      <IonContent>
      <div className="interestcontainer">
				<div className="img-wrapper">
					<IonImg
						src="assets/image/frndr_logo2.png"
						alt="frndr logo"
						className="interest-image-logo"
					/>
				</div>
				<div className="interestheader">
					<h4>Pick your Interests...</h4>
					<div>
						<input type="text" placeholder="search" />
					</div>
					<p>You should select at least 5 interests</p>
				</div>
				<div className="interests">
					{INTERESTS.map((item, i) => {
						return <span key={i}>{item}</span>;
					})}
				</div>
				<button onClick={submit} type="button">Next</button>
				<div className="tab"></div>
			</div>
      </IonContent>
  </IonPage>
  );
};

export default Favourite;
