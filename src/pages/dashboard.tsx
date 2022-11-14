import {

	IonTabBar,
	IonApp,
	IonTabs,
	IonRouterOutlet,
	IonTabButton,
	IonSpinner,
	IonIcon,
	IonLoading,
} from "@ionic/react";

import React from "react";

import { Redirect } from "react-router";
import { Route } from "react-router-dom";


import "./dashboard.css";


import {
	heart,
	person,
	star,
	pricetag,
	chatbubbles,
} from "ionicons/icons";


import { lazy, Suspense } from "react";

const Liked = lazy(() => import("./liked"));
const Profile = lazy(() => import("./profile"));
const Message = lazy(() => import("./Message"));
const MakeFriend = lazy(() => import("./make-friends"));
const Favour = lazy(() => import("./dashboadfavourite"));
const Dashboard: React.FC = () => {

		
	  
	// const email = useSelector((state: any) => state.user.email)
	// let history = useHistory();

	// async function logout()
	// {
	//   await Logout()
	//   history.push('/')
	// }
	return (
		<IonApp>
		<React.StrictMode>
		<IonTabs>
			<IonRouterOutlet>
			<Suspense fallback={	<IonLoading message="processing data from server" duration={2000} isOpen={true}/>}>
				<Route path="/dashboard/tab1" component={Liked} />
				<Route path="/dashboard/tab2" component={MakeFriend} />
				<Route path="/dashboard/tab3" component={Profile} />
				<Route exact path="/dashboard/tab4" component={Message} />
				<Route path="/dashboard/tab5" component={Favour} />  
				<Route exact path="/dashboard">
					<Redirect to="/dashboard/tab5" />
				</Route>
				</Suspense>
			</IonRouterOutlet>

			<IonTabBar className="IonTabButton" slot="bottom">
				<IonTabButton tab="account" href="/dashboard/tab2">
					<IonIcon icon={pricetag} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="contact" href="/dashboard/tab1">
					<IonIcon icon={heart} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="favourite" href="/dashboard/tab5">
					<IonIcon icon={star} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="message" href="/dashboard/tab4">
					<IonIcon icon={chatbubbles} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<IonTabButton tab="settingffs" href="/dashboard/tab3">
					<IonIcon icon={person} className="IonTabButton"></IonIcon>
				</IonTabButton>
				<div className="close-tap"></div>
			</IonTabBar>
			
		</IonTabs>
		</React.StrictMode>
		</IonApp>
	);
};
export default Dashboard;
