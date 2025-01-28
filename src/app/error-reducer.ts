
export type ErrorsType = {
    maxValueError: string | null;
    startValueError: string | null;
}

const initialState: ErrorsType = {
    maxValueError: null,
    startValueError: null
}

//Types

export type setMaxValueErrorActionType = {
    type: 'SET-MAX-VALUE-ERROR',
    payload: {
        maxValueError: string | null
    }
}
export type setStartValueErrorActionType = {
    type: 'SET-START-VALUE-ERROR',
    payload: {
        startValueError: string | null
    }
}

export type ActionsType = setMaxValueErrorActionType | setStartValueErrorActionType

//Action Creators

export const setMaxValueErrorAC = (maxValueError: string | null) => {
    return {
        type: 'SET-MAX-VALUE-ERROR',
        payload: {
            maxValueError
        }
    } as const
}

export const setStartValueErrorAC = (startValueError: string | null) => {
    return {
        type: 'SET-START-VALUE-ERROR',
        payload: {
            startValueError
        }
    } as const
}


//Reducer

export const errorsReducer = (state = initialState, action: ActionsType): ErrorsType => {
    switch (action.type) {
        case 'SET-MAX-VALUE-ERROR': {
            return {...state, maxValueError: action.payload.maxValueError}
        }
        case 'SET-START-VALUE-ERROR': {
            return {...state, startValueError: action.payload.startValueError}
        }
        default:
            return state
    }
}