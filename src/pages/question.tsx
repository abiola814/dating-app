import { IonContent, IonHeader, IonPage,IonImg,IonGrid,IonRow,IonCol,IonNote, IonTitle, IonToolbar,IonButton, useIonRouter } from '@ionic/react';
import Select from "./Select";
import { SELCECTIONS as questions } from "../constant";
import "./question.css";
import { useHistory } from 'react-router';

const Question: React.FC = () => {
	const navigation = useIonRouter();
	function submit(){
	    navigation.push('/dashboard','root',"replace") 

	}
    return (
        <IonPage>
   
         <IonContent>
         <div className="questioncontainer">
				<div className="img-wrapper">
					<img
						src="assets/image/frndr_logo2.png"
						alt="frndr logo"
						className="question-image-logo"
					/>
				</div>
				<div className="questionheader">
					<h4>Answer to the following question...</h4>
				</div>
				<div className="questions">
					{questions.map((options, i) => {
						return (
							<div key={i}>
								<p>{`${i + 1}.Questions 0${i + 1}`}</p>
								<Select
									placeHolder="Select ..."
									options={options}
									onChange={(value: any) => console.log(value.name)}
								/>
							</div>
						);
					})}
				</div>
				<button onClick={submit} type="button">Next</button>
				<div className="tab"></div>
			</div>
        </IonContent>
        </IonPage>
    )
}

export default Question;