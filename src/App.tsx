import React from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';
import {incrementCounterAC} from "./app/counter-reducer";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {selectCount, selectValues} from "./app/selectors";

function App() {

    const dispatch = useAppDispatch();

    const count = useAppSelector(selectCount);
    const maxValue = useAppSelector(selectValues).maxValue
    const startValue = useAppSelector(selectValues).startValue

    const countIncrement = () => {
            dispatch(incrementCounterAC())
    }

    return (
        <div className="App">
            <Counter 
                count={count} 
                countIncrement={countIncrement}
                maxValue={maxValue}
                startValue={startValue}
            />
        </div>
    );
}

export default App;

