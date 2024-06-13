import React from 'react'
import styles from './Select.module.css'

function SelectMedicine({ id, text, placholderOption, name, options, value, disabled, hadleOnChange }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select key={id} disabled={disabled} name={name} id={id} onChange={hadleOnChange} value={value || ''}>
                <option>{placholderOption}</option>
                {options.map((option) => (
                    <option id={option._id} key={option._id} value={option._id}>{option.id}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectMedicine