import React from "react";
import {Route, Switch} from "react-router-dom";
import Contacts from "./navComponents/Contacts";
import Company from "./navComponents/Сompany";
import Services from "./navComponents/Services";
import Objects from "./navComponents/Objects";
import Procurements from "./navComponents/Procurements";
import Partners from "./navComponents/Partners";
import News from "./navComponents/News";
import Home from "./slide/Home";
import Main from "./slide/Main";
import Nav from "./navComponents/Nav";

export const PATH = {
    COMPANY: '/company',
    SERVICES: '/services',
    OBJECTS: '/objects',
    PROCUREMENTS: '/procurements',
    PARTNERS: '/partners',
    NEWS: '/news',
    CONTACTS: '/contacts'
}

export function Routes() {
    return (
        <div>
            <Nav/>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} exact render={() => {}}/>
                {/*<Route path={PATH.COMPANY} render={() => <News/>}/>*/}
                <Route path={PATH.SERVICES} render={() => <Services/>}/>
                <Route path={PATH.OBJECTS} render={() => <Objects/>}/>
                <Route path={PATH.PROCUREMENTS} render={() => <Procurements/>}/>
                <Route path={PATH.PARTNERS} render={() => <Partners/>}/>
                <Route path={PATH.NEWS} render={() => <News/>}/>
                <Route path={PATH.CONTACTS} render={() => <Contacts/>}/>
            </Switch>
        </div>
    )
}

export default Routes;
