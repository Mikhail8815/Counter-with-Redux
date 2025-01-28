import React from 'react';
import {Button} from '../Button/Button';
import s from './ButtonsCounter.module.css'
import {VisibleComponentType} from '../Counter/Counter';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {incrementCounterAC, resetCounterAC} from "../../app/counter-reducer";
import {selectValues} from "../../app/selectors";

type ButtonsCounterProps = {
    disabledButtonInc: boolean
    disabledButtonReset: boolean
    changeVisibleComponent: (visComp: VisibleComponentType) => void
}

export const ButtonsCounter = ({
                                   changeVisibleComponent,
                                   disabledButtonInc,
                                   disabledButtonReset
                               }: ButtonsCounterProps) => {

    const dispatch = useAppDispatch();
    const startValue = useAppSelector(selectValues).startValue

    const resetCounter = () => {
        dispatch(resetCounterAC(startValue))
    }
    const countIncrement = () => {
        dispatch(incrementCounterAC())
    }

    return (
        <div className={`componentsWrapper ${s.buttonsCounter}`}>
            <Button title='INC' onClick={countIncrement} disabled={disabledButtonInc}/>
            <Button title='RESET' onClick={resetCounter} disabled={disabledButtonReset}/>
            <Button title='SET' onClick={() => changeVisibleComponent('settings')}/>
        </div>
    );
};