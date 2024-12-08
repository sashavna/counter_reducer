import React, { useEffect, useReducer, useState } from 'react';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';
import s from './App.module.css'
import { counterReducer, initialState, setMaxStartValueAC, setMaxtErrorValueAC, setMessageValueAC, setStartErrorValueAC } from './reducers/counter-reducers';

function App() {
    const [value, dispatchValue] = useReducer(counterReducer, initialState)

    // const [error, setError] = useState<null | string>(null)

    // const [error, setError] = useState<null | string>({
    //     currentCounter: 0,
    //     minValue: 0,
    //     maxValue: 10,
    //     error: '',
    //     displayText: '',
    // })
    // setError((prev)=> {...prev, currentCounter: prev.currentCounter + 1})

    const settingsSet = (currentMaxValue: number, currentStartValue: number) => {
        dispatchValue(setMaxStartValueAC(currentMaxValue,currentStartValue))
        localStorage.setItem('maxValue', JSON.stringify(currentMaxValue))
        localStorage.setItem('startValue', JSON.stringify(currentStartValue))
    }

    useEffect(() => {
        let maxAsStr = localStorage.getItem('maxValue')
        // if(maxAsStr){
        //     let newMax = JSON.parse(maxAsStr)
        //     dispatchValue(setMaxStartValueAC(newMax, value.startValue))
        // }

        let startAsStr = localStorage.getItem('startValue')
        // if(startAsStr){
        //     let newStart = JSON.parse(startAsStr)
        //     dispatchValue(setMaxStartValueAC(value.startValue, newStart))
        // }

        if(maxAsStr && startAsStr){
            let newMax = JSON.parse(maxAsStr)
            let newStart = JSON.parse(startAsStr)
            dispatchValue(setMaxStartValueAC(newMax, newStart))
        }
    },[])

  return (
    <div className={`${s.backgrond} ${s.container}`}>
        <Settings
        maxValue={value.maxValue}
        startValue={value.startValue}
        settingsSet={settingsSet}
        startError={value.startError}
        maxError={value.maxError}
        setStartError={(error)=>dispatchValue(setStartErrorValueAC(error))}
        setMaxtError={(maxError)=>dispatchValue(setMaxtErrorValueAC(maxError))}
        setMessage={(message)=>dispatchValue(setMessageValueAC(message))}/>
        <Counter
        maxValue={value.maxValue}
        startValue={value.startValue}
        startError={value.startError}
        maxError={value.maxError}
        message={value.message}/>
    </div>
  );
}

export default App;
