import React from 'react'
import s from './Button.module.css'

type ButtonType = {
    title: string
    onClick:() => void
    disabled: boolean
}

export const Button = ({title, onClick, disabled}: ButtonType) => {
  return (
    <button onClick={onClick} disabled={disabled} className={s.button}>{title}</button>
  )
}

