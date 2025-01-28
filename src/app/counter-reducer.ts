
const initialState: number = 0

//Types

export type incrementCounterActionType = {
    type: 'INCREMENT-COUNTER'
}
export type resetCounterActionType = {
    type: 'RESET-COUNTER',
    payload: {
        resetValue: number
    }
}
export type setStartValueActionType = {
    type: 'SET-START-VALUE-COUNTER',
    payload: {
        startValue: number
    }
}

export type ActionsType = incrementCounterActionType | resetCounterActionType | setStartValueActionType

//Action Creators

export const incrementCounterAC = () => {
    return {
        type: 'INCREMENT-COUNTER',
    } as const
}
export const resetCounterAC = (resetValue: number) => {
    return {
        type: 'RESET-COUNTER',
        payload: {
            resetValue
        }
    } as const
}
export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE-COUNTER',
        payload: {
            startValue
        }
    } as const
}

//Reducer

export const counterReducer = (state = initialState, action: ActionsType): number => {
    switch (action.type) {
        case 'INCREMENT-COUNTER': {
            return state = state + 1
        }
        case 'RESET-COUNTER': {
            return state = action.payload.resetValue
        }
        case 'SET-START-VALUE-COUNTER': {
            return state = action.payload.startValue
        }
        default:
            return state
    }
}