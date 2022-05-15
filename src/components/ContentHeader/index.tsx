import styles from './styles.module.scss'

export function ContentHeader() {
  return (
      <>
        <header className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <h1>Cadastro de clientes</h1>
              <nav>
                <a className={styles.active}>Home</a>
                <a href="">Novo Cliente</a>
              </nav>
              <h4 className={styles.customerCount}>Clientes ativos: 35 clientes</h4>
            </div>
          </header>
      </>
  )
}