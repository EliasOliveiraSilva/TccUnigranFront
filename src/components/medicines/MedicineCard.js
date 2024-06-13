import React from 'react'
import styles from './MedicineCard.module.css'
import { BsFillTrashFill, BsPencil } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function MedicineCard({ id, name, qtd, generic_name, handleRemove }) {

    const remove = (event) => {
        event.preventDefault()
        handleRemove(id)
    }
    return (
        <div className={styles.medicines_card}>
            <h2><span>Nome: </span>{name} <span>Quantidade: </span>{qtd}</h2>
            <p>Nome genérico: <span>{generic_name}</span></p>
            <div className={styles.medicines_card_actions}>
                <Link to={`/medicine-edit/${id}`}><BsPencil />Editar</Link>
                <button onClick={remove} ><BsFillTrashFill />Remover</button>
            </div>
        </div>
    )
}

export default MedicineCard