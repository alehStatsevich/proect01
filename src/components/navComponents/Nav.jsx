import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";
import style from "./Nav.module.css"



function Nav() {
    return (
        <div className={style.nav}>
            <NavLink to={PATH.COMPANY} className={style.link} activeStyle={{
                backgroundColor: "black",
                color: "white"
            }}>О компании</NavLink>
            <NavLink to={PATH.SERVICES} className={style.link} activeStyle={{
                backgroundColor: "black",
                color: "white"
            }}
            >Услуги</NavLink>
            <NavLink to={PATH.OBJECTS} className={style.link} activeStyle={{
                backgroundColor: "black",
                color: "white"
            }}>Обьекты</NavLink>
            <NavLink to={PATH.PROCUREMENTS} className={style.link} activeStyle={{
                backgroundColor: "black",
                color: "white"
            }}>Закупки</NavLink>
            <NavLink to={PATH.PARTNERS} className={style.link} activeStyle={{
                backgroundColor: "black",
                color: "white"
            }}>Партнеры</NavLink>
            <NavLink to={PATH.NEWS} className={style.link} activeStyle={{
                backgroundColor: "black",
                color: "white"
            }}>Новости</NavLink>
            <NavLink to={PATH.CONTACTS} className={style.link} activeStyle={{
                backgroundColor: "black",
                color: "white"
            }}>Контакты</NavLink>
            <div/>
        </div>
    )
}

export default Nav
