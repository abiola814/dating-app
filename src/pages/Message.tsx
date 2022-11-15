import {
	IonPage,
	IonContent,
	IonHeader,
	IonImg,
	IonLoading,
} from "@ionic/react";
import "./message.css";
import { Link } from "react-router-dom";
import { MASSAGES_ONLINE as message_data } from "../constant";
import React from "react";

const Message: React.FC = () => {
	return (
		<IonPage>
			<React.StrictMode>
				<IonLoading
					message="processing data from server"
					duration={1000}
					isOpen={true}
				/>
				<IonHeader>
					<div className="messageheader">
						<h2>Messages</h2>
						<i className="fa-sharp fa-solid fa-magnifying-glass"></i>
					</div>
					```
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
							{message_data[11].messages && (
								<Link
									to={`/chat/${message_data[11].id}`}
									className="messages-wrapper"
									key={message_data[11].id}
								>
									<div className="inner-wrapper">
										<div className="img-wrapper">
											<img
												src={message_data[11].img}
												alt={message_data[11].img_alt}
											/>
											{message_data[11].online && (
												<div className="online-sign"></div>
											)}
										</div>
										<div className="messages">
											<h5>{message_data[11].name}</h5>
											{message_data[11].read ? (
												<p className="read">
													{
														message_data[11].messages[
															message_data[11].messages.length - 1
														]
													}
												</p>
											) : (
												<p className="not-read">
													{
														message_data[11].messages[
															message_data[11].messages.length - 1
														]
													}
												</p>
											)}
										</div>
									</div>
									{!message_data[11].read && (
										<div className="message-notification">
											{message_data[11].messages?.length}
										</div>
									)}
								</Link>
							)}
							{message_data[12].messages && (
								<Link
									to={`/chat/${message_data[12].id}`}
									className="messages-wrapper"
									key={message_data[12].id}
								>
									<div className="inner-wrapper">
										<div className="img-wrapper">
											<img
												src={message_data[12].img}
												alt={message_data[12].img_alt}
											/>
											{message_data[12].online && (
												<div className="online-sign"></div>
											)}
										</div>
										<div className="messages">
											<h5>{message_data[12].name}</h5>
											{message_data[12].read ? (
												<p className="read">
													{
														message_data[12].messages[
															message_data[12].messages.length - 1
														]
													}
												</p>
											) : (
												<p className="not-read">
													{
														message_data[12].messages[
															message_data[12].messages.length - 1
														]
													}
												</p>
											)}
										</div>
									</div>
									{!message_data[12].read && (
										<div className="message-notification">
											{message_data[12].messages?.length}
										</div>
									)}
								</Link>
							)}
							{message_data[13].messages && (
								<Link
									to={`/chat/${message_data[13].id}`}
									className="messages-wrapper"
									key={message_data[13].id}
								>
									<div className="inner-wrapper">
										<div className="img-wrapper">
											<img
												src={message_data[13].img}
												alt={message_data[13].img_alt}
											/>
											{message_data[13].online && (
												<div className="online-sign"></div>
											)}
										</div>
										<div className="messages">
											<h5>{message_data[13].name}</h5>
											{message_data[13].read ? (
												<p className="read">
													{
														message_data[13].messages[
															message_data[13].messages.length - 1
														]
													}
												</p>
											) : (
												<p className="not-read">
													{message_data[13].messages
														? [message_data[13].messages.length - 1]
														: " "}
												</p>
											)}
										</div>
									</div>
									{!message_data[13].read && (
										<div className="message-notification">
											{message_data[13].messages?.length}
										</div>
									)}
								</Link>
							)}
							<Link
								to={`/chat/${message_data[14].id}`}
								className="messages-wrapper"
								key={message_data[14].id}
							>
								<div className="inner-wrapper">
									<div className="img-wrapper">
										<img
											src={message_data[14].img}
											alt={message_data[14].img_alt}
										/>
										{message_data[14].online && (
											<div className="online-sign"></div>
										)}
									</div>
									<div className="messages">
										<h5>{message_data[14].name}</h5>
										{message_data[14].read ? (
											<p className="read">
												{
													message_data[14].messages[
														message_data[14].messages.length - 1
													]
												}
											</p>
										) : (
											<p className="not-read">
												{message_data[14].messages
													? [message_data[14].messages.length - 1]
													: " "}
											</p>
										)}
									</div>
								</div>
								{!message_data[14].read && (
									<div className="message-notification">
										{message_data[14].messages?.length}
									</div>
								)}
							</Link>
							<Link
								to={`/chat/${message_data[15].id}`}
								className="messages-wrapper"
								key={message_data[15].id}
							>
								<div className="inner-wrapper">
									<div className="img-wrapper">
										<img
											src={message_data[15].img}
											alt={message_data[15].img_alt}
										/>
										{message_data[15].online && (
											<div className="online-sign"></div>
										)}
									</div>
									<div className="messages">
										<h5>{message_data[15].name}</h5>
										{message_data[15].read ? (
											<p className="read">
												{
													message_data[15].messages[
														message_data[15].messages.length - 1
													]
												}
											</p>
										) : (
											<p className="not-read">
												{message_data[15].messages
													? [message_data[15].messages.length - 1]
													: " "}
											</p>
										)}
									</div>
								</div>
								{!message_data[15].read && (
									<div className="message-notification">
										{message_data[15].messages?.length}
									</div>
								)}
							</Link>
							<Link
								to={`/chat/${message_data[16].id}`}
								className="messages-wrapper"
								key={message_data[16].id}
							>
								<div className="inner-wrapper">
									<div className="img-wrapper">
										<img
											src={message_data[16].img}
											alt={message_data[16].img_alt}
										/>
										{message_data[16].online && (
											<div className="online-sign"></div>
										)}
									</div>
									<div className="messages">
										<h5>{message_data[16].name}</h5>
										{message_data[16].read ? (
											<p className="read">
												{
													message_data[16].messages[
														message_data[16].messages.length - 1
													]
												}
											</p>
										) : (
											<p className="not-read">
												{message_data[16].messages
													? [message_data[16].messages.length - 1]
													: " "}
											</p>
										)}
									</div>
								</div>
								{!message_data[16].read && (
									<div className="message-notification">
										{message_data[16].messages?.length}
									</div>
								)}
							</Link>
							<Link
								to={`/chat/${message_data[17].id}`}
								className="messages-wrapper"
								key={message_data[17].id}
							>
								<div className="inner-wrapper">
									<div className="img-wrapper">
										<img
											src={message_data[17].img}
											alt={message_data[17].img_alt}
										/>
										{message_data[17].online && (
											<div className="online-sign"></div>
										)}
									</div>
									<div className="messages">
										<h5>{message_data[17].name}</h5>
										{message_data[17].read ? (
											<p className="read">
												{
													message_data[17].messages[
														message_data[17].messages.length - 1
													]
												}
											</p>
										) : (
											<p className="not-read">
												{message_data[17].messages
													? [message_data[17].messages.length - 1]
													: " "}
											</p>
										)}
									</div>
								</div>
								{!message_data[17].read && (
									<div className="message-notification">
										{message_data[17].messages?.length}
									</div>
								)}
							</Link>
						</div>
					</aside>
				</IonContent>
			</React.StrictMode>
		</IonPage>
	);
};
export default Message;
