import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { home, search, personCircle } from "ionicons/icons";
import { Redirect, Route } from "react-router";

import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

const Tabs: React.FC = () => {
    return(
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/Tabs" to="/Tabs/Homepage" />
                <Route exact path="/Tabs/Homepage" component={HomePage}/>
                <Route exact path="/Tabs/Searchpage" component={SearchPage}/>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="Homepage" href="/Tabs/Homepage">
                    <IonIcon icon={home}></IonIcon>
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Searchpage" href="/Tabs/Searchpage">
                    <IonIcon icon={search}></IonIcon>
                    <IonLabel>Search</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Profilepage" href="/Tabs/Profilepage">
                    <IonIcon icon={personCircle}></IonIcon>
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default Tabs;