import React, { ChangeEvent, useEffect, useState } from 'react'
import { Input } from '../input/Input'
import { Button } from '../button/Button'
import s from './Settings.module.css'


type SettingsType = {
    maxValue: number
    startValue: number
    settingsSet: (currentMaxValue: number, currentStartValue: number) => void
    setMessage: (message: string) => void
    startError: null | string
    maxError: null | string
    setMaxtError: (maxError: null | string) => void
    setStartError: (error: null | string) => void
}

const isErrorSetting = (startValue: number, maxValue: number) => {
    return  startValue < 0 || maxValue < 0 || startValue >= maxValue || maxValue <= startValue
}



export const Settings = ({maxValue, startValue, settingsSet, startError, setMessage, maxError, setMaxtError, setStartError}: SettingsType) => {
    const [currentMaxValue, setCurrentMaxValue]=useState(maxValue)
    const [currentStartValue, setCurrentStartValue]=useState(startValue)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>)=>{
        const newMaxValue = +event.currentTarget.value
        setCurrentMaxValue(newMaxValue)
        setIsButtonDisabled(false)
        if(isErrorSetting(currentStartValue, newMaxValue)) {
            setMaxtError('Incorrect value!')
            setMessage('')
            setIsButtonDisabled(true)
        }else if(maxError){
            setMessage("Enter values and press 'set'")
            setMaxtError(null)
            setIsButtonDisabled(false)
        }
    }

    const onStartValueHandler = (event: ChangeEvent<HTMLInputElement>)=>{
        const newStartValue = +event.currentTarget.value
        setCurrentStartValue(newStartValue)
        setIsButtonDisabled(false)
        if(isErrorSetting(newStartValue, currentMaxValue)) {
            setStartError('Incorrect value!')
            setMessage('')
            setIsButtonDisabled(true)
        }else if(startError){
            setStartError(null)
            setMessage("Enter values and press 'set'")
            setIsButtonDisabled(false)
        }
    }
    
    const settingsSetHandler = () => {
        settingsSet(currentMaxValue, currentStartValue)
        setIsButtonDisabled(true)
        setMessage('')
    }

    useEffect(() => {
        setCurrentMaxValue(maxValue)
        setCurrentStartValue(startValue)
    }, [maxValue, startValue])

    // const isSetBtnDisabled = isErrorSetting(currentStartValue, currentMaxValue)

  return (
    <div className={`${s.container} ${s.rectangle}`}>
        <div className={s.rectangleInnerInput}>
            <Input
            value={currentMaxValue}
            type='number'
            onChange={onChangeMaxValueHandler}
            title='max value'
            error={maxError}/>
            <Input
            value={currentStartValue}
            type='number'
            onChange={onStartValueHandler}
            title='start value'
            error={startError}/>
        </div>
        <div className={s.rectangleInnerButton}>
            <Button title='set' onClick={settingsSetHandler} disabled={isButtonDisabled} />
        </div>
    </div>
  )
}

