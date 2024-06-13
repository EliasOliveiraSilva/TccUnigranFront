import React, { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ScheduleForm({ handleSubmit, btnText, pacientData }) {

    const [schedule, setSchedule] = useState({})

    function submit(event) {
        event.preventDefault()
        pacientData.services.push(schedule)
        handleSubmit(pacientData)
        // 
    }

    function handleChange(event) {
        setSchedule({ ...schedule, [event.target.name]: event.target.value })
        // 
    }
    return (
        <form onSubmit={submit}>
            <Input type={'text'} text={'Título'} name={'name'} placholder={'Insira o título'} hadleOnChange={handleChange} />
            <Input type={'text'} text={'Descrição'} name={'description'} placholder={'Insira a descrição'} hadleOnChange={handleChange} />
            <Input type={'date'} text={'Data do agendamento'} name={'date'} placholder={'Insira a data do agendamento'} hadleOnChange={handleChange} />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ScheduleForm