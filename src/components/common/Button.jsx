import React from "react";
import style from "./Button.module.css"

function Button() {
    return (
        <div className={style.block} onClick={()=>alert('"—ฅ/ᐠ.̫ .ᐟ|ฅ—"')} >
            наши компетенции
           {/*<button onClick={()=>alert('k')}>наши компетенции</button>*/}
        </div>
    );
}

export default Button;
