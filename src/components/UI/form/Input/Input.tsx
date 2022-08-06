import classes from './Input.module.scss'
import { ChangeEventHandler } from 'react'

interface IInput {
  type?: string
  value: string
  onChange: ChangeEventHandler
  label?: string
  placeholder: string
  required?: boolean
}

function Input({type = 'text', value, onChange, placeholder, label, required = false}: IInput) {
  return (
    <label className={classes.Input}>
      {label ? <span className={classes.Label}>{label}</span> : null}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </label>
  )
}

export default Input