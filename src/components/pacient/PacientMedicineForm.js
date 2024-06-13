import React, { useEffect, useState } from 'react'
import SelectMedicine from '../form/SelectMedicine'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function PacientMedicineForm({ handleSubmit, btnText, placholderOption, patientData }) {
    const [medicinesName, setMedicinesName] = useState([])
    const [medicines, setMedicines] = useState(patientData || {})
    console.log(medicines)

    useEffect(() => {
        fetch('http://localhost:3002/medicines', {
            method: 'get',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setMedicinesName(data)
            })
            .catch((error) => console.log(error))
    }, [])

    function submit(event) {
        event.preventDefault()
        patientData.medicines.push()
        
        // handleSubmit(patientData)
     }

    function handleChange(event) {
        setMedicines({...medicines, [event.target.name] : event.target.value})
    }

    function handleMedicine(event) {
        setMedicines({ ...medicines, commercial_name: { id: event.target.value, name: event.target.options[event.target.selectedIndex].text } })
    }

    return (
        <form onSubmit={submit}>
            <SelectMedicine name={'commercial_name'} text={'Nome do medicamento:'}
                options={medicinesName} placholderOption={placholderOption} hadleOnChange={handleMedicine} value={medicinesName.commercial_name} />
            <Input type={'number'} name={'amount'} text={'Quantidade'} placholder={'Insira a quantidade do medicamento'} hadleOnChange={handleChange} value={medicinesName.amount} />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default PacientMedicineForm