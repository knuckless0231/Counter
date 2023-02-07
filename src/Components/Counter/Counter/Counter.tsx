import s from "./counter.module.css";
import {Button} from "../../Universalbutton/Button";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from "../../redux/store";
import {setCountAC} from "../../redux/Counter-Reducer";

export const Counter = () => {

    const count = useSelector<ReducersType,number>(state => state.count)
    const alertText = useSelector<ReducersType,string>(state => state.alertText)
    const min = useSelector<ReducersType,number>(state => state.min)
    const max = useSelector<ReducersType,number>(state => state.max)

    const dispatch = useDispatch()

    const resetFunc = () => {
        dispatch(setCountAC(min))
    }

    const counterFunc = () => {
        dispatch(setCountAC(count + 1))
    }

    return (
        alertText ?
        <div className={s.alertText}>
            {alertText}
        </div>
        :
        <div className={s.counterContainer}>
            <div className={s.numberContainer}>
                <div className={s.count + ` ${count === max ? s.red : ''}`}>
                    {count}
                </div>
            </div>

            <div className={s.btContainer}>
                <div>
                    <Button name={'+1'} func={counterFunc} disabled={count === max}/>
                </div>
                <div>
                    <Button name={'reset'} func={resetFunc} disabled={count === min}/>
                </div>
            </div>



            </div>
    );

}