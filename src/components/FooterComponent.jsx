import React from 'react';
import style from './FooterComponents.module.css'




function FooterComponent (props) {
    return (
        <div className={style.blockIcon}>
            <div className={style.icon} style={props.style} >
                <a className={style.a} href={props.href} >{props.view}</a>
            </div>
        </div>
    );
}

export default FooterComponent;
