import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

function Home() {

return (
    <>
      <section className={styles.home_container}>
        <h1>Bem Vindo ao Sistema UBS Virtual</h1>
        <p>Gerencie suas rotas e pacientes</p>
        <LinkButton to={'/new-pacient'} text={'Cadastrar Paciente'} />
      </section>
      <div className={styles.home_details_container}>
        <p>Você tem <span>{'5'}</span> agendamentos em aberto no sistema</p>
      </div>
    </>
  )
}

export default Home