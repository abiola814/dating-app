import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Verify from './pages/verify';
import Chat from './pages/Chat';
import AccountSettings from './pages/account-settings';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useEffect, useState } from 'react';
import { getcurentuser } from './firebaseconfigs';
import Dashboard from './pages/dashboard';
import { setUserState } from './redux/actions';
import { useDispatch } from 'react-redux';
import Favourite from './pages/favourite';
import { MASSAGES_ONLINE } from "./constant";
import Question from './pages/question';
import { lazy, Suspense } from 'react';
const Friends = lazy(() => import("./pages/friends"));
const ProfileSetting = lazy(() => import("./pages/profilesetting"));

setupIonicReact();

const Datingrouter: React.FC = () => {
  return(
    <IonReactRouter>

      <IonRouterOutlet>
      <Suspense fallback={<IonSpinner/>}>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route  path="/dashboard" component={ Dashboard } />
        <Route exact path="/verify" component={ Verify } />
        <Route exact path="/favourite" component={ Favourite } />
        <Route exact path="/friends" component={ Friends } />
        <Route exact path="/profilesetting" component={ ProfileSetting } />
        <Route  path="/chat/:id" component={ () => <Chat message_data={MASSAGES_ONLINE}/>} />
        <Route exact path="/account-settings" component={ AccountSettings } />
        <Route exact path="/question" component={ Question } />
      </Suspense>
  </IonRouterOutlet>
</IonReactRouter>
  )
}

const App: React.FC = () => {
  const [busy,setBusy]=useState(true)
  const dispatch = useDispatch()
  useEffect(() =>{
  getcurentuser().then((user: any) => {
    if (user){
      //login
      dispatch(setUserState(user.email))
      window.history.replaceState({},'','/dashboard')
    } else{
        window.history.replaceState({},'','/dashboard')

    }
    setBusy(false)
  })
  })
  return(
  <IonApp>
  { busy ? <IonSpinner/> : <Datingrouter/>}
   {/* <IonReactRouter>
    <IonRouterOutlet>
    <Route exact path="/dashboard" component={ dashboard } />
  </IonRouterOutlet>
  </IonReactRouter>  */}
  </IonApp>
)
  }
export default App;
