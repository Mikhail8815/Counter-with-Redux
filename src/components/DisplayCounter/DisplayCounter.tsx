import React from 'react';
import s from './DisplayCounter.module.css'
//clsx
type DisplayCounterProps = {
    count: number
    maxValue: number
}

export const DisplayCounter = ({count, maxValue}: DisplayCounterProps) => {
    const countStyle = `${s.counterValue} ${count === maxValue ? s.counterMaxValue : ''}`

    return (
        <div className={'componentsWrapper'}>
            <p className={countStyle}>{count}</p>
        </div>

    );
};