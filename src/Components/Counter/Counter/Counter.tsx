import s from "./counter.module.css";
import {Button} from "../../Universalbutton/Button";
import React, {useState} from "react";


type CounterPropsType = {
    count: number
    counter: () => void
    reset: () => void
    min: number
    max: number
    alertText: string
}

export const Counter = (props: CounterPropsType) => {

    return (
        props.alertText ?
        <div className={s.alertText}>
            {props.alertText}
        </div>

        :

        <div className={s.counterContainer}>

            <div className={s.numberContainer}>
                <div className={s.count + ` ${props.count === props.max ? s.red : ''}`}>
                    {props.count}
                </div>


            </div>

            <div className={s.btContainer}>
                <div>
                    <Button name={'+1'} func={props.counter} disabled={props.count === props.max}/>
                </div>
                <div>
                    <Button name={'reset'} func={props.reset} disabled={props.count === props.min}/>
                </div>
            </div>



            </div>
    );

}