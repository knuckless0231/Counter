
export type InitStateType = {
    count: number
    alertText: string
    min: number
    max: number
}

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
