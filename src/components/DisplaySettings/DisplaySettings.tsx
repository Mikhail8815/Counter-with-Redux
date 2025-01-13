import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './DisplaySattings.module.css'
import {useAppDispatch} from "../../app/hooks";
import {setMaxValueAC, setStartValueAC} from "../../app/value-reducer";

type DisplaySettingsProps = {
    maxValue: number
    startValue: number
    maxValueError: string | null
    startValueError: string | null
    setStartValueError: (val: string | null) => void
    setMaxValueError: (val: string | null) => void
}

export const DisplaySettings = ({setStartValueError, setMaxValueError, maxValue, startValue, maxValueError, startValueError}: DisplaySettingsProps) => {

    const dispatch = useAppDispatch();

    const checkErrorMaxValue = (value: number) => {
        if (value <= 0 || value <= startValue) {
            setMaxValueError('Error')
        } else if (value > startValue && startValue >= 0) {
            setMaxValueError(null)
            setStartValueError(null)
        }
    }

    const checkErrorStartValue = (value: number) => {
        if (value < 0) {
            setStartValueError('Error')
        } else if (value >= maxValue) {
            setStartValueError('Error')
        } else {
            setMaxValueError(null)
            setStartValueError(null)
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