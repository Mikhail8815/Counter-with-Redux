
export type ValuesType = {
   maxValue: number;
   startValue: number;
}

const initialState: ValuesType = {
    maxValue: 1,
    startValue: 0
}

//Types

export type setMaxValueActionType = {
    type: 'SET-MAX-VALUE',
    payload: {
        maxValue: number
    }
}
export type setStartValueActionType = {
    type: 'SET-START-VALUE',
    payload: {
        startValue: number
    }
}

export type ActionsType = setMaxValueActionType | setStartValueActionType

//Action Creators

export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {
            maxValue
        }
    } as const
}

export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: {
            startValue
        }
    } as const
}


//Reducer

export const valuesReducer = (state: ValuesType = initialState, action: ActionsType): ValuesType => {
    switch (action.type) {
        case 'SET-MAX-VALUE': {
            return {...state, maxValue: action.payload.maxValue}
        }
        case 'SET-START-VALUE': {
            return {...state, startValue: action.payload.startValue}
        }
        default:
            return state
    }
}