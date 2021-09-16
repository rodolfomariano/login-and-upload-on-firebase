import { useRouter } from "next/dist/client/router"
import { signOut } from "next-auth/client"

import { MdClose } from "react-icons/md"

import { useModalExit } from '../../context/OpenModalExit'

import styles from './styles.module.scss'

export function ModalExit() {
  const { isModalOpen, setIsModalOpen } = useModalExit()

  const router = useRouter()

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  async function handleExit() {
    await signOut()
    router.push('/')
  }

  return (
    <div className={isModalOpen ? styles.container : `${styles.container} ${styles.hidden}`}>
      <div className={styles.content}>
        <header>
          Sair da aplicação
          <button onClick={handleCloseModal}>
            <MdClose size={20} />
          </button>
        </header>

        <main>
          <span>
            Tem certeza que quer sair da aplicação?
          </span>
        </main>

        <footer>
          <button className={styles.cancelButton} onClick={handleCloseModal}>
            Cancelar
          </button>
          <button className={styles.exitButton} onClick={handleExit}>
            Sim
          </button>
        </footer>
      </div>
      <div className={styles.background} onClick={handleCloseModal} />
    </div>
  )
}