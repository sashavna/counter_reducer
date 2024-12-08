import { counterReducer, setMaxStartValueAC, setMaxtErrorValueAC, setMessageValueAC, setStartErrorValueAC, StateType } from "./counter-reducers"


let startState: StateType
beforeEach(() => {
    startState = {
        maxValue: 5,
        startValue: 0,
        startError: null,
        maxError: null,
        message: ''
    }
})

test('SET_VALUES', ()=>{

    const endState=counterReducer(startState, setMaxStartValueAC(6,1))
    expect(endState.maxValue).toBe(6)
    expect(endState.startValue).toBe(1)
})

test('SET_START_ERROR', ()=>{

    const endState=counterReducer(startState, setStartErrorValueAC('Error'))
    expect(endState.startError).toBe('Error')
})

test('SET_MAX_ERROR', ()=>{

    const endState=counterReducer(startState, setMaxtErrorValueAC('Error!!!!'))
    expect(endState.maxError).toBe('Error!!!!')
})

test('SET_MESSAGE', ()=>{

    const endState=counterReducer(startState, setMessageValueAC('Some info'))
    expect(endState.message).toBe('Some info')
})