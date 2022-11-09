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

const Message: React.FC = ({ message_data }: any) => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
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
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<aside className="content-wrapper">
					<h4>My chats</h4>
					<div className="container content">
						{message_data.map((info, i) => {
							return (
								info.messages && (
									<Link
										to={`/${info.id}`}
										className="flex mt-3 items-center justify-between"
										key={i}
									>
										<div className="flex gap-[21px] items-center ">
											<div className="relative w-[49px] h-[49px]">
												<img
													src={info.img}
													alt={info.img_alt}
													className="w-full h-full"
												/>
												{info.online && (
													<div className="h-[13px] w-[13px] absolute top-[-1px] right-0 bg-green-600 rounded-full border-[3px] border-white"></div>
												)}
											</div>
											<div className="flex flex-col gap-[3px] self-start mt-2">
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
											<div className="w-[21px] h-[21px] bg-primary text-white flex justify-center rounded-full">
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
		</IonPage>
	);
};
export default Message;
