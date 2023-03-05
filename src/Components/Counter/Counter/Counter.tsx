import s from "./counter.module.css";
import {Button} from "../../Universalbutton/Button";
import React from "react";
import {useAppSelector, useTypedDispatch} from "../../redux/store";
import {setCountValueTC} from "../../redux/Counter-Reducer";

export const Counter = () => {

    const count = useAppSelector<number>(state => state.counter.count)
    const alertText = useAppSelector<string>(state => state.counter.alertText)
    const min = useAppSelector<number>(state => state.counter.min)
    const max = useAppSelector<number>(state => state.counter.max)

    console.log(count)
    console.log(max)

    const dispatch = useTypedDispatch()

    const resetFunc = () => {
        dispatch(setCountValueTC(min))
    }

    const counterFunc = () => {
        dispatch(setCountValueTC(count + 1))
    }
    console.log('set', count, max)
    const styledCountValue = `${s.count} ${count === max ? s.red : ''}`
    return (
        alertText ?
        <div className={s.alertText}>
            {alertText}
        </div>
        :
        <div className={s.counterContainer}>
            <div className={s.numberContainer}>
                <div className={styledCountValue}>
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