import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import photo from "../common/img/pexels-marcin-jozwiak-3634730 1.png"
import style from "./Crumbs.module.css"




function Crumbs() {
    return (
        <div className={style.crumbs}>
            <Carousel>
                <div>
                    <img src={photo} />
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
                <div>
                    <img src={photo} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={photo} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Crumbs;
