import React from 'react';
import s from './Button.module.css'

type ButtonProps = {
    title: string;
    onClick: () => void;
    disabled?: boolean;
}
export const Button = ({title, onClick, disabled}: ButtonProps) => {
    return (
        <button className={`${s.button}`}
                disabled={disabled}
                onClick={onClick}
        >{title}</button>
    );
};
