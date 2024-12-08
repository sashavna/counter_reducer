import React, { ChangeEvent } from 'react'
import s from './Input.module.css'

type InputType = {
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    title: string
    value: number
    error: null | string
}

export const Input = ({type, onChange, title, value, error}: InputType) => {
  return (
    <label className={s.label}>
        {title}
        <input
        type={type}
        onChange={onChange}
        value={value}
        className={error ? s.inputError : s.input}
        />
    </label>

  )
}


