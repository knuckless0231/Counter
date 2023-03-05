import React, {useEffect} from 'react'
import s from './Containeer.module.css'
import {Setting} from "../Settings/Settings";
import {Counter} from "./Counter/Counter";
import {getCounterValueTC, getMaxCountValueTC, getStartCountValueTC} from "../redux/Counter-Reducer";
import {useTypedDispatch} from "../redux/store";


export const Containeer = () => {
    const dispatch = useTypedDispatch()

    useEffect(() => {
         dispatch(getStartCountValueTC())
    }, [dispatch])

    useEffect(() => {
       dispatch(getMaxCountValueTC())
    }, [dispatch])


    useEffect(() => {
        dispatch(getCounterValueTC())
    }, [dispatch])

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