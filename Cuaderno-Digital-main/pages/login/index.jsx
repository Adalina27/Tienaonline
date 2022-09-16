import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/login.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img className={styles.imgLogin} src="img/tienda.jpg" alt="login"/>
        <form className={styles.formContainer}>
            <h1 className={styles.formTittle}>Inicio de Sesión</h1>
            <div className={styles.loginInputs}>
                <div>
                    <input className={styles.input} type="text" placeholder="Usuario o Email"/>
                    <input className={styles.input} type="password" placeholder="Contraseña"/>
                </div>
                <div>
                    <label for="checkid" className={styles.checkLabel}>
                        <input type="checkbox" className={styles.check} id="checkid"/> Recuerdame
                    </label>
                    <a className={styles.olvidoContraseña} href="#" target="blank">¿Olvidaste tu contraseña?</a>
                </div>
                    <button className={styles.btn} type="submit">Ingresar</button>
                <div>
                    <span className={styles.noCuenta}>¿No tienes cuenta?</span>
                    <a href="#" className={styles.registrarse}>Registrarse</a>
                </div>
            </div>
        </form>
    </div>
  )
}