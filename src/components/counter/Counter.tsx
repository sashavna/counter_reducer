import React, { useEffect, useState } from 'react'
import { Button } from '../button/Button'
import s from './Counter.module.css'

type CounterType = {
    maxValue: number
    startValue: number
    startError: null | string
    maxError: null | string
    message: string
}

export const Counter = ({maxValue, startValue, maxError, message, startError}: CounterType) => {
    const[number, setNumber] = useState(startValue)

    const incHandler = () => {
        if(number < maxValue){
            setNumber(number + 1)
        }
    }

    const resetHandler = () => {
        setNumber(startValue)
    }

    useEffect(() => {
        setNumber(startValue);
    }, [startValue]);

    

  return (
    <div className={`${s.container} ${s.rectangle}`}>
        {(maxError || startError) && <div className={`${s.errorMessage} ${s.rectangleInnerInput}`}>{maxError || startError}</div>}
        {!(maxError || startError) && message && <div className={`${s.message} ${s.rectangleInnerInput}`}>{message}</div>}
        {!(maxError || startError || message) && <span className={`${s.rectangleInnerInput}  ${s.number} ${number === maxValue ? s.numbertMax : s.number}` }>{number}</span>}
        <div className={s.rectangleInnerButton}>
            <Button title='inc' onClick={incHandler} disabled={number === maxValue}/>
            <Button title='reset' onClick={resetHandler} disabled={false}/>
        </div>
    </div>
  )
}

