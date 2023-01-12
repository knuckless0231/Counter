import s from "../Containeer.module.css";
import {Button} from "../../Universalbutton/Button";
import React, {useState} from "react";


type CounterPropsType = {
    count:number
    counter:()=>void
    reset:()=>void
    min:number
    max:number
    alertText:string
}

export const Counter = (props:CounterPropsType) => {


    return <div>
        <div className={s.count + ` ${props.count === props.max ? s.red : ''}`}>{props.count}</div>
        <span className={s.alertText}>{props.alertText}</span>
        <div className={s.button}>
            <div className={s.bt}><Button name={'+1'} func={props.counter} disabled={props.count === props.max} /></div>
            <div className={s.bt}><Button name={'reset'} func={props.reset} disabled={props.count === props.min}/></div>
        </div>
    </div>
}