// import React from 'react'
import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={'/pacient'}>Usuários</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={'/medicines'}>Medicamentos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={'/new-pacient'}>Cadastrar Paciente</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={'/new-medicines'}>Cadastrar Medicamentos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={'/contact'}>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar