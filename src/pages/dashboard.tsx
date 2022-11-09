import {
	IonContent,
	IonTabBar,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton,
	IonTabs,
	IonRouterOutlet,
	IonTabButton,
	IonIcon,
} from "@ionic/react";
import { State } from "ionicons/dist/types/stencil-public-runtime";
import { useSelector } from "react-redux";
import React from "react";
import { Logout } from "../firebaseconfigs";
import { Redirect, useHistory } from "react-router";
import { Route } from "react-router-dom";
import SearchFriends from "./search-friends";
import MakeFriend from "./make-friends";
import Message from "./Message";
import "./dashboard.css";

import {
	heart,
	person,
	chatbubbleEllipses,
	settings,
	star,
} from "ionicons/icons";
import Profile from "./profile";
import { MASSAGES_ONLINE as message_data } from "../constant";
import Chat from "./Chat";

const Dashboard: React.FC = () => {
	// const email = useSelector((state: any) => state.user.email)
	// let history = useHistory();

	// async function logout()
	// {
	//   await Logout()
	//   history.push('/')
	// }
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route path="/dashboard/tab1" component={SearchFriends} />
				<Route path="/dashboard/tab2" component={MakeFriend} />
				<Route path="/dashboard/tab3" component={Profile} />
				<Route
					path="/dashboard/tab4"
					render={(message_data) => <Message message_data={message_data} />}
				/>
				<Route
					path="/dashboard/tab4/:id"
					render={(message_data) => <Chat message_data={message_data} />}
				/>

				<Route exact path="/dashboard">
					<Redirect to="/dashboard/tab1" />
				</Route>
			</IonRouterOutlet>

			<IonTabBar className="IonTabButton" slot="bottom">
				<IonTabButton tab="account" href="/dashboard/tab2">
					<IonIcon icon={star} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="contact" href="/dashboard/tab1">
					<IonIcon icon={heart} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="settingsd">
					<IonIcon icon={star} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="message" href="/dashboard/tab4">
					<IonIcon icon={chatbubbleEllipses} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="settingffs" href="/dashboard/tab3">
					<IonIcon icon={person} className="IonTabButton"></IonIcon>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};
export default Dashboard;
