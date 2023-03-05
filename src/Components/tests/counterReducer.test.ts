import {alertTextAC, counterReducer, InitStateType, setCountAC, setMaxAC, setMinAC} from "../redux/Counter-Reducer";

let initState:InitStateType = {
    count: 0,
    alertText: '',
    min: 0,
    max: 0
}

beforeEach(()=>{
    initState = {
        count: 5,
        alertText: '',
        min: 5,
        max: 10
    }
})

test('correct count value should be set',()=>{
    const finalState = counterReducer(initState,setCountAC(6))
    expect(finalState.count).toBe(6)
})
test('correct text value should be set',()=>{
    const finalState = counterReducer(initState,alertTextAC("value's should be not equal"))
    expect(finalState.alertText).toBe("value's should be not equal")
})
test('correct min value should be set',()=>{
    const finalState = counterReducer(initState,setMinAC(5))
    expect(finalState.min).toBe(5)
})
test('correct max value should be set',()=>{
    const finalState = counterReducer(initState,setMaxAC(11))
    expect(finalState.max).toBe(11)
})