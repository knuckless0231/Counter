import React, {ChangeEvent} from 'react'
import {Button} from "../Universalbutton/Button";
import s from './settings.module.css'
import {
    alertTextAC,
    setCountToLocalStorageTC,
    setMaxAC, setMaxValueToLocalStorageTC,
    setMinAC, setMinValueToLocalStorageTC
} from "../redux/Counter-Reducer";
import {useAppSelector, useTypedDispatch} from "../redux/store";


export const Setting = () => {

    const min = useAppSelector<number>(state => state.counter.min)
    const max = useAppSelector<number>(state => state.counter.max)

    const dispatch = useTypedDispatch()

    //тут состояние устанавливается

    let setCountToLocal = () => {
        dispatch(setCountToLocalStorageTC(min))
    }

    let setMinValue = () => {
        dispatch(setMinValueToLocalStorageTC(min))
    }
    let setMaxValue = () => {
        dispatch(setMaxValueToLocalStorageTC(max))
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