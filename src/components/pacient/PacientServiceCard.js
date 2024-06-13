import React from 'react'
import styles from './PacientServiceCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function PacientServiceCard({ id, name, description, date, status, handleRemove }) {

    const remove = (event) => {
        event.preventDefault()
        handleRemove(id)
        // 
    }

    return (
        <div className={styles.pacient_service_card}>
            <p>Data: <span>{date}</span> - Status: <span>{status}</span></p>
            <p>Título: <span>{name}</span></p>
            <p>Descrição: <span>{description}</span></p>
            <div className={styles.pacient_service_card_actions}>
                <Link to={`/pacient-edit/${id}`}><BsPencil />Editar</Link>
                <button onClick={remove} ><BsFillTrashFill />Remover</button>
            </div>
        </div>
    )
}

export default PacientServiceCard