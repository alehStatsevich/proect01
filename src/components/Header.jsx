import React from "react";
import image from "./common/img/logo.svg"
import photo from "./common/img/search icon.svg"
import style from "./Header.module.css"


function Header() {
    return (
        <div>
            <div className={style.header}>
                <div>
                    <img className={style.logo} src={image} alt="logo"/>
                </div>
                <div className={style.block}>
                    <input type="text" placeholder="Поиск по сайту" className={style.search}/>
                    <img className={style.photo} src={photo} alt="photo"/>
                </div>
            </div>
        </div>
    )
}

export default Header;
