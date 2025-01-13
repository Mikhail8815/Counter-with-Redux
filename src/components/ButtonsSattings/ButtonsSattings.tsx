import React from 'react';
import { Button } from '../Button/Button';
import s from './ButtonsSattings.module.css'
import { VisibleComponentType } from '../Counter/Counter';

type ButtonsSettingsProps= {
    disabledButtonSet: boolean
    changeVisibleComponent: (visComp: VisibleComponentType) => void
}

export const ButtonsSettings = ({changeVisibleComponent, disabledButtonSet}: ButtonsSettingsProps) => {
    return (
        <div className={'componentsWrapper'}>
           <Button title='SET' onClick={()=>changeVisibleComponent('counter')} disabled={disabledButtonSet}/>
        </div> 
    );
};