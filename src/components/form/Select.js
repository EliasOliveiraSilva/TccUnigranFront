import React from 'react'
import styles from './Select.module.css'

function Select({ id, text, placholderOption, name, options, value, disabled, hadleOnChange }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select key={id} disabled={disabled} name={name} id={name} onChange={hadleOnChange} value={value || ''}>
                <option>{placholderOption}</option>
                {options.map((option) => (
                    <option key={option._id} value={option._id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select