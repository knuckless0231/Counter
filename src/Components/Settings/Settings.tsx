import React, {ChangeEvent} from 'react'
import {Button} from "../Universalbutton/Button";
import s from './settings.module.css'
import {alertTextAC, setCountAC, setMaxAC, setMinAC} from "../redux/Counter-Reducer";
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from "../redux/store";



export const Setting = () => {

    const min = useSelector<ReducersType,number>(state => state.min)
    const max = useSelector<ReducersType,number>(state => state.max)

    const dispatch = useDispatch()

    //тут состояние устанавливается

    let setCountToLocal = () => {
        localStorage.setItem("count", JSON.stringify(min))
    }

    let setMinValue = () => {
        localStorage.setItem("min", JSON.stringify(min))
        dispatch(setMinAC(min))
        dispatch(setCountAC(min))
    }
    let setMaxValue = () => {
        localStorage.setItem("max", JSON.stringify(max))
        dispatch(setMaxAC(max))
    }

    let setAllValuesFunc = () => {

        if (min === max) {
            dispatch(alertTextAC("value's should be not equal"))
        } else if (min > max) {
            dispatch(alertTextAC("max value should be bigger then min"))
        } else if (min < 0) {
            dispatch(alertTextAC("incorrect value"))
        } else {
            setMinValue()
            setMaxValue()
            setCountToLocal()
            dispatch(alertTextAC(''))
        }
    }

    const setStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinAC(parseInt(e.currentTarget.value)))
    }

    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxAC(parseInt(e.currentTarget.value)))
    }


    return (
        <div className={s.settings}>

            <div className={s.valuesContainer}>
                <div className={s.divValueInput}>
                    <span className={s.spanValue}>start value:</span>
                    <span>
                         <input className={s.input} type={'number'} placeholder={'Set start Value'}
                                value={min} onChange={setStart}/>
                    </span>
                </div>

                <div className={s.divValueInput}>
                    <span className={s.spanValue}>end value:</span>
                    <span>
                         <input className={s.input} type={'number'} placeholder={'Set max Value'}
                                value={max} onChange={setMax}/>
                    </span>
                </div>

            </div>
            <div className={s.btContainer}>
                <Button name={'Set'} func={setAllValuesFunc}/>
            </div>
        </div>
    )
}