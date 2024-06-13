import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Message from '../layout/Message'
import styles from './Pacient.module.css'
import LinkButton from '../layout/LinkButton'
import Container from '../layout/Container'
import MedicineCard from '../medicines/MedicineCard'
import Loading from '../layout/Loading'

function Medicines() {

    const [medicines, setMedicines] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [medicineMessage, setMedicineMessage] = useState('')

    useEffect(() => {
        fetch('http://localhost:3002/medicine', {
            method: 'get',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setMedicines(data)
                setRemoveLoading(true)
            })
            .catch((error) => console.log(error))
    }, [])

    function removeMedicine(id) {
        fetch(`http://localhost:3002/medicine/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
            .then((response) => response.json())
            .then(() => {
                setMedicines(medicines.filter((medicine) => medicine.id !== id))
                setMedicineMessage('Medicamento removido com sucesso!')
            })
            .catch((error) => console.log(error))

    }

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }
    return (
        <div className={styles.pacient_container}>
            <div className={styles.title_container}>
                <h2>Medicamentos</h2>
                <LinkButton to={'/new-medicines'} text={'Cadastrar Medicamento'} />
            </div>
            {message && <Message msg={message} type={'success'} />}
            {medicineMessage && <Message msg={medicineMessage} type={'success'} />}
            <Container customClass='column'>
                {medicines.length > 0 && medicines.map((medicine) => (
                    <MedicineCard id={medicine._id} key={medicine._id} name={medicine.commercial_name} generic_name={medicine.generic_name} qtd={medicine.amount} handleRemove={removeMedicine} />
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && medicines.length === 0 && (
                    <p className={styles.alertMessage}>Não há medicamentos cadastrados</p>
                )}
            </Container>
        </div>
    )
}

export default Medicines