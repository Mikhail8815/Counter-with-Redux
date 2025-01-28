import React, {ChangeEvent} from 'react';
import s from './DisplaySattings.module.css'
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setMaxValueAC, setStartValueAC} from "../../app/value-reducer";
import {errors} from "../../app/selectors";
import {setMaxValueErrorAC, setStartValueErrorAC} from "../../app/error-reducer";

type DisplaySettingsProps = {
    maxValue: number
    startValue: number
}

export const DisplaySettings = ({maxValue, startValue}: DisplaySettingsProps) => {

    const dispatch = useAppDispatch();

    const startValueError = useAppSelector(errors).startValueError
    const maxValueError = useAppSelector(errors).maxValueError

    const checkErrorMaxValue = (value: number) => {
        if (value <= 0 || value <= startValue) {
            dispatch(setMaxValueErrorAC('Error'))
        } else if (value > startValue && startValue >= 0) {
            dispatch(setMaxValueErrorAC(null))
            dispatch(setStartValueErrorAC(null))
        }
    }

    const checkErrorStartValue = (value: number) => {
        if (value < 0) {
            dispatch(setStartValueErrorAC('Error'))
        } else if (value >= maxValue) {
            dispatch(setStartValueErrorAC('Error'))
        } else {
            dispatch(setMaxValueErrorAC(null))
            dispatch(setStartValueErrorAC(null))
        }
    }

    const onchangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.currentTarget.value)
        checkErrorMaxValue(value)
        dispatch(setMaxValueAC(value))
    }

    const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.currentTarget.value)
        checkErrorStartValue(value)
        dispatch(setStartValueAC(value))
        }

    const inputMaxValueStyle = `${maxValueError !== null ? 'error' : ''} ${s.inputDisplay}`
    const inputStartValueStyle = `${startValueError !== null ? 'error' : ''} ${s.inputDisplay}`

    return (
        <div className={'componentsWrapper'}>
            <label className={s.labelDisplay}>Max-value 
                <input className={inputMaxValueStyle}
                value={maxValue} 
                type="number" 
                onChange={onchangeMaxValueHandler}/>
            </label>
            <label  className={s.labelDisplay}>Start-value 
                <input className={inputStartValueStyle}
                value={startValue} 
                type="number" 
                onChange={onChangeStartValueHandler}/>
            </label>
        </div>     
    );
};