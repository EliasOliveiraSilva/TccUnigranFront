import React from 'react'
import styles from './Input.module.css'

function Input({ type, text, name, placholder, value, hadleOnChange }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input id={name} type={type} name={name} placeholder={placholder} onChange={hadleOnChange} value={value}/>
        </div>
    )
}

export default Input