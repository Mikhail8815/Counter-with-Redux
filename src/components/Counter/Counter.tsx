import React, {useState} from 'react';
import { DisplayCounter } from '../DisplayCounter/DisplayCounter';
import { DisplaySettings } from '../DisplaySettings/DisplaySettings';
import { ButtonsCounter } from '../ButtonsCounter/ButtonsCounter';
import { ButtonsSettings } from '../ButtonsSattings/ButtonsSattings';
import s from './Counter.module.css'
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectCount} from "../../app/selectors";
import {setStartValueAC} from "../../app/counter-reducer";

export type VisibleComponentType = 'settings' | 'counter'

type CounterPropsType = {
    count: number,
    maxValue: number
    startValue: number
    countIncrement: ()=>void
}

export const Counter = ({count, maxValue, startValue, countIncrement}: CounterPropsType) => {

    const [visibleComponent, setVisibleComponent] = useState<VisibleComponentType>('settings')

    const [maxValueError, setMaxValueError] = useState<string | null>(null) 
    const [startValueError, setStartValueError] = useState<string | null>(null)

    const dispatch = useAppDispatch();
 
    const changeVisibleComponent = (visComp: VisibleComponentType) => {
        setVisibleComponent(visComp)
        dispatch(setStartValueAC(startValue))
    }

    const isButtonSettingsDisabled = !!(startValueError || maxValueError)
    const isButtonIncrementDisabled = maxValue===count
    const isButtonResetDisabled = startValue===count


    return (
        <div className={s.counter}> 
            <div>
                {visibleComponent === 'counter' &&  <DisplayCounter count={count} maxValue={maxValue}/>}
                {visibleComponent === 'settings' && <DisplaySettings
                                                      maxValue={maxValue}
                                                      startValue={startValue}
                                                      maxValueError={maxValueError}
                                                      startValueError={startValueError}
                                                      setMaxValueError={setMaxValueError}
                                                      setStartValueError={setStartValueError}
                                                      />}
    
            </div>   
            <div>
                {visibleComponent === 'counter' &&  <ButtonsCounter 
                                                    changeVisibleComponent={changeVisibleComponent}
                                                    countIncrement={countIncrement}
                                                    disabledButtonInc={isButtonIncrementDisabled}
                                                    disabledButtonReset={isButtonResetDisabled}
                                                    />}
                {visibleComponent === 'settings' && <ButtonsSettings 
                                                     changeVisibleComponent={changeVisibleComponent} 
                                                     disabledButtonSet={isButtonSettingsDisabled}/>}
            </div>
        </div>
    );
};
