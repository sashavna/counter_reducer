

export type StateType = {
    maxValue: number
    startValue: number
    startError: null | string
    maxError: null | string
    message: string
}

export const initialState:StateType = {
    maxValue: 5,
    startValue: 0,
    startError: null,
    maxError: null,
    message: ''
}

type setMaxStartValueACType = ReturnType<typeof setMaxStartValueAC>
type setStartErrorValueACType = ReturnType<typeof setStartErrorValueAC>
type setMaxtErrorValueACType = ReturnType<typeof setMaxtErrorValueAC>
type setMessageValueACType = ReturnType<typeof setMessageValueAC>

type CounterreducerActionType = setMaxStartValueACType | setStartErrorValueACType | setMaxtErrorValueACType | setMessageValueACType

export const counterReducer = (state: StateType, action: CounterreducerActionType): StateType => {
    switch(action.type){
        case 'SET_VALUES':{
            return {
                ...state,
                maxValue: action.payload.maxValue,
                startValue: action.payload.startValue,
                startError: null,
                maxError: null
            }
        }
        case 'SET_START_ERROR':{
            return {
                ...state,
                startError: action.payload.startError
            }
        }
        case 'SET_MAX_ERROR':{
            return {
                ...state,
                maxError: action.payload.maxError
            }
        }
        case 'SET_MESSAGE':{
            return {
                ...state,
                message: action.payload.message
            }
        }

        default: return state
    }
}

export const setMaxStartValueAC = (maxValue: number, startValue: number) => {
    return {
        type: 'SET_VALUES',
        payload: {
            maxValue: maxValue,
            startValue: startValue
        }
    }as const
}

export const setStartErrorValueAC = (startError: null | string) => {
    return {
        type: 'SET_START_ERROR',
        payload: {
            startError: startError,
        }
    }as const
}

export const setMaxtErrorValueAC = (maxError: null | string) => {
    return {
        type: 'SET_MAX_ERROR',
        payload: {
            maxError: maxError,
        }
    }as const
}

export const setMessageValueAC = (message: string) => {
    return {
        type: 'SET_MESSAGE',
        payload: {
            message: message,
        }
    }as const
}