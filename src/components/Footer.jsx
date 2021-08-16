import React from 'react';
import style from './Footer.module.css'
import FooterComponent from "./FooterComponent";
import iconA from "./common/img/ic_1.svg"
import iconB from "./common/img/ic_2.svg"
import iconC from "./common/img/ic_3.svg"
import iconD from "./common/img/ic_4.svg"
import iconF from "./common/img/ic_5.svg"


function Footer () {
    const blockA = {
        backgroundImage: `url(${iconA})`,
    }
    const blockB = {
        backgroundImage: `url(${iconB})`,
    }
    const blockC = {
        backgroundImage: `url(${iconC})`,
    }
    const blockD = {
        backgroundImage: `url(${iconD})`,
    }
    const blockF = {
        backgroundImage: `url(${iconF})`,
    }
    return (
        <>
        <div className={style.footer}>
            <FooterComponent style={blockA} href={'#'} view={'Услуги проектирования'}/>
            <FooterComponent style={blockB} href={'https://www.linkedin.com/in/oleg-stacevich-a71061209/'} view={'Строительно-монтажные работы'}/>
            <FooterComponent style={blockC} href={'#'} view={'Экспертная деятельность'}/>
            <FooterComponent style={blockD} href={'#'} view={'Техническое обслуживание'}/>
            <FooterComponent style={blockF} href={'#'} view={'Испытательная лаборатория'}/>
        </div>
            <h6 className={style.p}>© 2021 Your name may be here, All rights reserved.</h6>
        </>
    );
}

export default Footer;
