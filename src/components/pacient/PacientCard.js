import React from 'react'
import styles from './PacientCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function PacientCard({ id, name, level, scheduling, drugs, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <div className={styles.pacient_card}>
            <h2>{name} <span>- Nível: {level === 'user' ? 'Usuário' : 'Administrador'} - Agendamentos: {scheduling} - medicamento: {drugs}</span></h2>
            <div className={styles.pacient_card_actions}>
                <Link to={`/pacient-scheduling/${id}`}><BsPencil />Cadastrar Agendamento</Link>
                <Link to={`/pacient-medicine/${id}`}><BsPencil />Cadastrar Medicamento</Link>
                <Link to={`/pacient-edit/${id}`}><BsPencil />Editar</Link>
                <button onClick={remove}><BsFillTrashFill />Remover</button>
            </div>
        </div>
    )
}

export default PacientCard