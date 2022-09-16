import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../componentes/navBar/navBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cuaderno Digital</title>
      </Head>

      <NavBar />

      <div className={styles.bodyHome}>
      <section>
          <div className={styles.promoRect}>
            <span className={styles.promoPhrase1}>EL REBAJÓN DE PRECIOS</span>
            <span className={styles.promoPhrase2}>DEL 01 AL 30 DE SEPTIEMBRE</span>
          </div>
        </section>

        <section className={styles.promoSection}>
          <img className={styles.promoImg} src="img/promocion_1.PNG" alt="Promocion 1"/>
          <img className={styles.promoImg} src="img/promocion_2.jpg" alt='Promocion 2'/>
          <img className={styles.promoImg} src="img/promocion_3.PNG" alt='Promocion 3'/>
          <img className={styles.promoImg} src="img/promocion_4.jpg" alt='Promocion 4'/>
        </section>
      
        <section className={styles.politSection}>
          <div className={styles.politSectionDiv}>
            <h2 className={styles.politSectionTittle}>Misión</h2>
            <p className={styles.politSectionParraf}>Comercializar productos de primera necesidad a todas las familias de la zona, a precios favorables que garanticen el ahorro de nuestros clientes, generando una experiencia memorable y diferenciadora en un ambiente incluyente.</p>
          </div>
          <div className={styles.politSectionDiv}>
            <h2 className={styles.politSectionTittle}>Visión</h2>
            <p className={styles.politSectionParraf}>Ser la cadena de tienda independiente mas importante de Barranquilla para el año 2024, logrando la distinción de clientes y proveedores, excediendo constantemente sus expectativas apoyados en la calidad y servicio. Llegar a ser una organización reconocida a nivel empresarial para ganar una mayor recordación de marca basados en el mejoramiento continuo y el desarrollo social sostenible.</p>
          </div>
        </section>
      </div>
    </div>
  )
}