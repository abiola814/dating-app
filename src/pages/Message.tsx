import {
	IonPage,
	IonContent,
	IonHeader,
	IonImg,IonLoading
} from "@ionic/react";
import "./message.css";
import { Link} from "react-router-dom";
import { MASSAGES_ONLINE as message_data } from "../constant";
import React from "react";


const Message: React.FC = () => {
	return (
		<IonPage>

	 <React.StrictMode>
	 <IonLoading message="processing data from server" duration={1000} isOpen={true}/>
			<IonHeader>
			<div className="messageheader">
            <h2>Messages</h2>
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
      		 </div>```
		
					<aside className="wrapper">
						<h4 className="h4-margin content-wrapper">Online</h4>
						<div className="online">
							{message_data.map((info, i) => {
								return (
									!info.messages &&
									info.online && (
										<div className="img-wrapper" key={i}>
											<IonImg src={info.img} alt={info.img_alt} />
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
									<Link to={`/chat/${info.id}`} className="messages-wrapper" key={i}>
										<div className="inner-wrapper">
											<div className="img-wrapper">
												<IonImg src={info.img} alt={info.img_alt} />
												{info.online && <div className="online-sign"></div>}
											</div>
											<div className="messages">
												<h5 className="eniyan">{info.name}</h5>
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
									</Link>
								)
							);
						})}
					</div>
				</aside>
			</IonContent>
			</React.StrictMode>
		</IonPage>
	);
};
export default Message;