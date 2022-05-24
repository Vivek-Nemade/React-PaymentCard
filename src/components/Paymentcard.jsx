import React from "react";
import style from "./paymentcard.module.css"

const Paymentcard=({mainstyle,Date,Logo,Gift,Machine_OS,PayType})=>{

    return(
        <div className={mainstyle}>
            <div className={style.topDiv}>
                <h4>{Date}</h4>
                <img className={style.logodiv} src={Logo} alt="" />
            </div>
            <p>Case Study</p>
            <h1>{Gift}</h1>
            <h1>{PayType}</h1>
            <div className={style.bottomDiv}>
                <h3>{Machine_OS} - Mobile </h3>
                <h1><i class="material-icons">trending_flat</i></h1>
            </div>

        </div>
    )
}

export default Paymentcard;