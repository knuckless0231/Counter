import React from 'react'
import s from './Button.module.css'


export type BtPropsType = {
    name: string
    func: () => void
    disabled?: boolean
}

export const Button = (props: BtPropsType) => {
    return (
        <div>
            <button className={s.bt}
                    disabled={props.disabled}
                    onClick={props.func}>
                {props.name}</button>
        </div>
    );

}
