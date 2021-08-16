import React from "react";
import style from "./Company.module.css"
import Button from "../common/Button";
import Crumbs from "../slideTwo/Сrumbs";
// COMPONENT NOT RENDER
function Company() {
    return (
        <div className={style.company}>
           <Button/>
            <h1>Объекты<br/>химической<br/>промышленности</h1>
            <p>Важнейшим преимуществом компании является способность <br/>
                проектировать и строить «под ключ». При этом данные<br/>
                процессы ведутся одновременно, что позволяет заказчику <br/>
                значительно сократить общий строительный цикл объекта</p>
            <Crumbs/>
        </div>
    );
}

export default Company;
