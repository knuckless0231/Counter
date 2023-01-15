import React, {useEffect, useState} from 'react'
import s from './Containeer.module.css'
import {Setting} from "../Settings/Settings";
import {Counter} from "./Counter/Counter";


export const Containeer = (props: any) => {

    const [count, setCount] = useState<number>(0)

    const [alertText, setAlertText] = useState<string>('')

    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)

    const counterFunc = () => {
        setCount(count + 1)
    }


    const resetFunc = () => {
        setCount(min)
    }


    //тут состояние устанавливается

    let setCountToLocal = () => {
        localStorage.setItem("count", JSON.stringify(min))
    }


    let setMinValue = () => {
        localStorage.setItem("min", JSON.stringify(min))
        setCount(min)
    }
    let setMaxValue = () => {
        localStorage.setItem("max", JSON.stringify(max))
    }


    let setAllValuesFunc = () => {

        if (min === max) {
            setAlertText("value's should be not equal")
        } else if (min > max) {
            setAlertText("max value should be bigger then min")
        } else if (min < 0) {
            setAlertText("incorrect value")
        } else {
            setMinValue()
            setMaxValue()
            setCountToLocal()
            setAlertText('')
        }


    }

    useEffect(() => {
        let temp = localStorage.getItem('min')
        if (temp) {
            let tempNum = JSON.parse(temp)
            setMin(tempNum)
        }

    }, [])

    useEffect(() => {
        let temporary = localStorage.getItem('max')
        if (temporary) {
            let temporaryNum = JSON.parse(temporary)
            setMax(temporaryNum)
        }
    }, [])


    useEffect(() => {
        let temp = localStorage.getItem('count')
        if (temp) {
            let temporary = JSON.parse(temp)
            setCount(temporary)
        }
    }, [])

    return (
        <div className={s.container}>

                  <span className={s.spanBlock}>
                 <Counter count={count} counter={counterFunc} reset={resetFunc}
                          max={max} min={min} alertText={alertText}/>
            </span>

            <span className={s.spanBlock}>
                <Setting setCountToLocal={setAllValuesFunc} setCount={setCount}
                         max={max} min={min} setMin={setMin} setMax={setMax}/>
            </span>

        </div>
    );

}