import React, {useEffect} from 'react'
import s from './Containeer.module.css'
import {Setting} from "../Settings/Settings";
import {Counter} from "./Counter/Counter";
import {useDispatch} from "react-redux";
import {setCountAC, setMaxAC, setMinAC} from "../redux/Counter-Reducer";


export const Containeer = (props: any) => {

    const dispatch = useDispatch()


    useEffect(() => {
        let temporary = localStorage.getItem('min')
        if (temporary) {
            let temporaryNum = JSON.parse(temporary)
            dispatch(setMinAC(temporaryNum))
        }

    }, [])

    useEffect(() => {
        let temporary = localStorage.getItem('max')
        if (temporary) {
            let temporaryNum = JSON.parse(temporary)
            dispatch(setMaxAC(temporaryNum))
        }
    }, [])


    useEffect(() => {
        let temporary = localStorage.getItem('count')
        if (temporary) {
            let temporaryNum = JSON.parse(temporary)
            dispatch(setCountAC(temporaryNum))
        }
    }, [])

    return (
        <div className={s.container}>
            <span className={s.spanBlock}>
                 <Counter/>
            </span>
            <span className={s.spanBlock}>
                <Setting/>
            </span>
        </div>
    );

}