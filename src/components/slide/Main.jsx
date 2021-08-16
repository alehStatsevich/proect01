import React from "react";
import style from "./Main.module.css"
import About from "./About";
import Business from "./Business";
import {NavLink, Route} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import Home from "./Home";
import Design from "./Design";
import Marketing from "./Marketing";

function Main() {
    const routes = [
        {path: '/home', Component: Home},
        {path: '/about', Component: About},
        {path: '/business', Component: Business},
        {path: '/design', Component: Design},
        {path: '/marketing', Component: Marketing}
    ]
    return (
        <div className={style.main}>

                <div className={style.crumbs}>
                    <NavLink to="/home" className={style.crumb} activeStyle={{
                        backgroundColor: "white"
                    }}/>
                    <NavLink to="/about" className={style.crumb} activeStyle={{
                        backgroundColor: "white"
                    }}/>
                    <NavLink to="/business" className={style.crumb} activeStyle={{
                        backgroundColor: "white"
                    }}/>
                    <NavLink to="/design" className={style.crumb} activeStyle={{
                        backgroundColor: "white"
                    }}/>
                    <NavLink to="/marketing" className={style.crumb} activeStyle={{
                        backgroundColor: "white"
                    }}/>
                </div>
            {routes.map(({path, Component}) => (
                <Route key={path} exact path={path}>
                    {({match}) => (
                        <CSSTransition
                            timeout={10}
                            classNames="page"
                            unmountOnExit
                            in={match != null}
                        >
                            <Component/>
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </div>
    );
}

export default Main;
