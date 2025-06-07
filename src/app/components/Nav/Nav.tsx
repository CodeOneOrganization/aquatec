import styles from './Nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <img src="/logo.png" alt="logo" />

            <button className={styles.menuButton}>
                menu
                <div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </button>
        </nav>
    )
}