import {
	IonPage,
	IonContent,
	useIonToast,
	IonHeader,
	IonToolbar,
	IonInput,
	IonButton,
	IonItem,
	IonList,
	IonLoading,
} from "@ionic/react";
import "./message.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../firebaseconfigs";
import { MASSAGES_ONLINE as message_data } from "../constant";

const Message: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
			
					<aside className="wrapper">
						<h4 className="h4-margin">Online</h4>
						<div className="online">
							{message_data.map((info, i) => {
								return (
									!info.messages &&
									info.online && (
										<div className="img-wrapper" key={i}>
											<img src={info.img} alt={info.img_alt} />
											<div className="online-sign"></div>
										</div>
									)
								);
							})}
						</div>
					</aside>
					<h4 className="content-wrapper">My chats</h4>
			</IonHeader>
			<IonContent>
				<aside className="content-wrapper">
					
					<div className="container content">
						{message_data.map((info, i) => {
							return (
								info.messages && (
									<div className="messages-wrapper" key={i}>
										<div className="inner-wrapper">
											<div className="img-wrapper">
												<img src={info.img} alt={info.img_alt} />
												{info.online && <div className="online-sign"></div>}
											</div>
											<div className="messages">
												<h5>{info.name}</h5>
												{info.read ? (
													<p className="read">
														{info.messages[info.messages.length - 1]}
													</p>
												) : (
													<p className="not-read">
														{info.messages[info.messages.length - 1]}
													</p>
												)}
											</div>
										</div>
										{!info.read && (
											<div className="message-notification">
												{info.messages.length}
											</div>
										)}
									</div>
								)
							);
						})}
					</div>
				</aside>
			</IonContent>
		</IonPage>
	);
};
export default Message;