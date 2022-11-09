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
import "./chat.css";
import { Link, useParams } from "react-router-dom";

const Chat: React.FC<{ message_data: any[] }> = ({ message_data }) => {
	const { id } = useParams();

	console.log(message_data);
	const [currentChat] = message_data.filter(
		(message: { id: number }) => message.id === Number(id)
	);

	return (
		<IonPage>
			<IonHeader>
				<div className="messagebox header">
					<div className="header-wrapper">
						<Link to="/">
							<img src="/assets/icon/back_arrow.svg" alt="back_arrow" />
						</Link>
						<div>
							<div className="img-wrapper">
								<img src={currentChat.img} alt={currentChat.img_alt} />
								{currentChat.online && <div className="online-sign"></div>}
							</div>
						</div>
						<div>
							<h5 className="chat-name ">{currentChat.name}</h5>
							{currentChat.online ? (
								<p className="status">Online</p>
							) : (
								<p className="status">Offline</p>
							)}
						</div>
					</div>
				</div>
			</IonHeader>
			<IonContent>
				<section>
					<div className=" bg__encryption">
						<p className="encryption__wrapper ">
							<span
								className="encryption"
								style={{
									backgroundImage: `${"url('/assets/icon/encryption.svg')"}`,
								}}
							></span>
							<span className="encryption-message">
								Messages are end-to-end encrypted. No one outside of this chat,
								not even TLC, can read or listen to them.
							</span>
						</p>
					</div>
					<div className="messagebox-chats">
						<div className="from-me chats">
							<p>Hi. What’s up?</p>
							<p>20/09/14 13:09</p>
						</div>
						<div className="from-them chats">
							<p>Hi. I’m doing great.How about u?</p>
							<p>20/09/14 13:09</p>
						</div>
						<div className="from-me chats">
							<p>I’m also fine.Can we hang out today?</p>
							<p>20/09/14 13:09</p>
						</div>
						<div className="from-them chats">
							<p>Great idea. Let’s meet today.</p>
							<p>20/09/14 13:09</p>
						</div>
					</div>
					<div className="messagebox footer">
						<div className="wrapper">
							<div>
								<img src="/assets/icon/add_document.svg" alt="add icon" />
							</div>
							<div className="input-wrapper">
								<input type="text" placeholder="message" />
							</div>
							<div>
								<img src="/assets/icon/send_btn.svg" alt="send button" />
							</div>
						</div>
						<div className="close-tap"></div>
					</div>
				</section>
			</IonContent>
		</IonPage>
	);
};

export default Chat;