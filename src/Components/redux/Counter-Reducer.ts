import {Dispatch} from "redux";

const initState:InitStateType = {
    count: 0,
    alertText: '',
    min: 0,
    max: 5,
}

export const counterReducer = (state:InitStateType = initState,action:CombinerTypesForCounterReducer) => {
    switch (action.type){

        case "SET-COUNT":{
            return {...state,count:action.count}
        }
        case "ALERT-TEXT":{
            return {...state,alertText:action.alertText}
        }
        case "SET-MIN":{
            return {...state,min:action.min}
        }
        case "SET-MAX":{
            return {...state,max:action.max}
        }
        default: return state
    }
}


export type CombinerTypesForCounterReducer = SetCountType | AlertTextType | SetMinType | SetMaxType

type SetCountType = ReturnType<typeof setCountAC>
export const setCountAC = (count:number) => {
    return {
        type:'SET-COUNT',count
    }as const
}

type AlertTextType = ReturnType<typeof alertTextAC>
export const alertTextAC = (alertText:string) => {
    return {
        type:'ALERT-TEXT',alertText
    }as const
}

type SetMinType = ReturnType<typeof setMinAC>
export const setMinAC = (min:number) => {
    return {
        type:'SET-MIN',min
    }as const
}

type SetMaxType = ReturnType<typeof setMaxAC>
export const setMaxAC = (max:number) => {
    return {
        type:'SET-MAX',max
    }as const
}



export const getStartCountValueTC = () => (dispatch:Dispatch) => {

    let temporary = localStorage.getItem('min')
    if (temporary) {
        let temporaryNum = JSON.parse(temporary)
        dispatch(setMinAC(temporaryNum))
    }
    return temporary
}

export const getMaxCountValueTC = () => (dispatch:Dispatch) => {
    let temporary = localStorage.getItem('max')
    if (temporary) {
        let temporaryNum = JSON.parse(temporary)
        dispatch(setMaxAC(temporaryNum))
    }
}

export const getCounterValueTC = () => (dispatch:Dispatch) => {
    let temporary = localStorage.getItem('count')
    if (temporary) {
        let temporaryNum = JSON.parse(temporary)
        dispatch(setCountAC(temporaryNum))
    }
}

export const setCountValueTC = (value:number) => (dispatch:Dispatch) => {
    dispatch(setCountAC(value))
}

export const setCountToLocalStorageTC = (value:number) => () => {
    localStorage.setItem("count", JSON.stringify(value))
}

export const setMinValueToLocalStorageTC = (minValue:number) => (dispatch:Dispatch) => {
    localStorage.setItem("min", JSON.stringify(minValue))
    dispatch(setMinAC(minValue))
    dispatch(setCountAC(minValue))
}

export const setMaxValueToLocalStorageTC = (maxValue:number) => (dispatch:Dispatch) => {
    localStorage.setItem("max", JSON.stringify(maxValue))
    dispatch(setMaxAC(maxValue))
}

export type InitStateType = {
    count: number
    alertText: string
    min: number
    max: number
}