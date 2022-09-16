import styles from './navBar.module.css'

const NavBar = () => {
    return (
      <nav className={styles.navBar}>
        <h1 className={styles.navBarTittle}>
          <a href="/">Don Juancheeto</a>
        </h1>
        <ul className={styles.navBarList}>
          <li className={styles.navBarListItem}>
            <a href="/clientes">Clientes</a>
          </li>
          <li className={styles.navBarListItem}>
            <a href="/productos">Productos</a>
          </li>
          <li className={styles.navBarListItem}>
            <a href="/movimientos">Movimientos</a>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;