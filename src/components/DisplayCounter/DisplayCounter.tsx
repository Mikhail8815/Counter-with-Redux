import React from 'react';
import s from './DisplayCounter.module.css'
import {useAppSelector} from "../../app/hooks";
import {selectCount} from "../../app/selectors";
//clsx
type DisplayCounterProps = {
    maxValue: number
}

export const DisplayCounter = ({maxValue}: DisplayCounterProps) => {
    const count = useAppSelector(selectCount)
    const countStyle = `${s.counterValue} ${count === maxValue ? s.counterMaxValue : ''}`
    return (
        <div className={'componentsWrapper'}>
            <p className={countStyle}>{count}</p>
        </div>

    );
};