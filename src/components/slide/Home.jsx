import React from "react";
import style from "./Home.module.css"
import Button from "../common/Button";




export function Home() {
    return (
        <div className={style.home}>
            <Button/>
            <h1 className={style.homeH}>Объекты<br/>химической<br/>промышленности</h1>
            <p className={style.homeP}>Важнейшим преимуществом компании является способность <br/>
                проектировать и строить «под ключ». При этом данные<br/>
                процессы ведутся одновременно, что позволяет заказчику <br/>
                значительно сократить общий строительный цикл объекта</p>
        </div>
    );
}

export default Home;
