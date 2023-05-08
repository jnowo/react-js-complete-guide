import classes from "../../Login/Login.module.css";
import React from "react";
import inputStyles from './Input.module.css'

export const Input = (props) => {
  return (
    <div
      className={`${inputStyles.control} ${props.isValid === false ? inputStyles.invalid : ''}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
}