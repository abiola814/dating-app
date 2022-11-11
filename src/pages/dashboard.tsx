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
import Favour from "./dashboadfavourite";
import "./dashboard.css";


import {
	heart,
	person,
	chatbubbleEllipses,
	settings,
	star,
} from "ionicons/icons";
import Profile from "./profile";
import { MASSAGES_ONLINE } from "../constant";
import Chat from "./Chat";
import Liked from "./liked";

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
				<Route path="/dashboard/tab1" component={Liked} />
				<Route path="/dashboard/tab2" component={MakeFriend} />
				<Route path="/dashboard/tab3" component={Profile} />
				<Route exact path="/dashboard/tab4" component={Message} />
				<Route path="/dashboard/tab5" component={Favour} />  
				<Route exact path="/dashboard">
					<Redirect to="/dashboard/tab4" />
				</Route>
			</IonRouterOutlet>

			<IonTabBar className="IonTabButton" slot="bottom">
				<IonTabButton tab="account" href="/dashboard/tab2">
					<IonIcon icon="assets/image/icons/Vectornotification.svg" className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="contact" href="/dashboard/tab1">
					<IonIcon icon={heart} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="favourite" href="/dashboard/tab5">
					<IonIcon icon={star} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="message" href="/dashboard/tab4">
					<IonIcon icon={chatbubbleEllipses} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="settingffs" href="/dashboard/tab3">
					<IonIcon icon={person} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<div className="close-tap"></div>
			</IonTabBar>
			
		</IonTabs>
		
	);
};
export default Dashboard;
