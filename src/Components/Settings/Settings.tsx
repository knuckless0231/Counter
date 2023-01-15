import React, {ChangeEvent} from 'react'
import {Button} from "../Universalbutton/Button";
import s from './settings.module.css'

type SettingsPropsType = {
    setCountToLocal: () => void
    setCount: (value: number) => void
    min: number
    max: number
    setMin: (value: number) => void
    setMax: (value: number) => void
}

export const Setting = (props: SettingsPropsType) => {

    const setStart = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMin(Number(e.currentTarget.value))
    }

    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMax(Number(e.currentTarget.value))
    }


    return (
        <div className={s.settings}>
            <div className={s.valuesContainer}>
                <div className={s.divValueInput}>
                    <span className={s.spanValue}>start value:</span>
                    <span>
                         <input className={s.input} type={'number'} placeholder={'Set start Value'}
                                value={props.min} onChange={setStart}/>
                    </span>
                </div>

                 <div className={s.divValueInput}>
                     <span className={s.spanValue}>end value:</span>
                     <span>
                         <input className={s.input} type={'number'} placeholder={'Set max Value'}
                                value={props.max} onChange={setMax}/>
                    </span>
                 </div>

                {/*</div>*/}
            </div>
            <div className={s.btContainer}>
                <Button name={'Set'} func={props.setCountToLocal}/>
            </div>
        </div>
    )
}