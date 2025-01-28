import React, {useState} from 'react';
import {DisplayCounter} from '../DisplayCounter/DisplayCounter';
import {DisplaySettings} from '../DisplaySettings/DisplaySettings';
import {ButtonsCounter} from '../ButtonsCounter/ButtonsCounter';
import {ButtonsSettings} from '../ButtonsSattings/ButtonsSattings';
import s from './Counter.module.css'
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {errors, selectCount, selectValues} from "../../app/selectors";
import {setStartValueAC} from "../../app/counter-reducer";

export type VisibleComponentType = 'settings' | 'counter'


export const Counter = () => {

    const [visibleComponent, setVisibleComponent] = useState<VisibleComponentType>('settings')

    const maxValue = useAppSelector(selectValues).maxValue
    const startValue = useAppSelector(selectValues).startValue
    const startValueError = useAppSelector(errors).startValueError;
    const maxValueError = useAppSelector(errors).maxValueError;
    const count = useAppSelector(selectCount);

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
                {visibleComponent === 'counter' &&  <DisplayCounter maxValue={maxValue}/>}
                {visibleComponent === 'settings' && <DisplaySettings
                                                      maxValue={maxValue}
                                                      startValue={startValue}
                                                      />}
    
            </div>   
            <div>
                {visibleComponent === 'counter' &&  <ButtonsCounter 
                                                    changeVisibleComponent={changeVisibleComponent}
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
