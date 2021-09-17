import { useState } from "react"
import { useRouter } from "next/dist/client/router"
import { signOut } from "next-auth/client"

import { MdClose } from "react-icons/md"

import { useModalExit } from '../../context/OpenModalExit'

import styles from './styles.module.scss'

export function ModalExit() {
  const { isModalOpen, setIsModalOpen } = useModalExit()
  const [useAnimation, setUseAnimation] = useState(`${styles.hidden}`)

  const router = useRouter()

  function handleCloseModal() {
    setIsModalOpen(false)

    if (isModalOpen === true) {
      setTimeout(() => {
        setUseAnimation(`${styles.hidden}`)
      }, 700)
      setUseAnimation(`${styles.container} ${styles.hiddenZoomOut}`)
    }

  }

  async function handleExit() {
    await signOut()
    router.push('/')
  }

  return (
    <div className={isModalOpen === true ? styles.container : `${useAnimation}`}>
      <div className={isModalOpen === true ? styles.content : `${styles.content} ${styles.hiddenZoomOut}`} >
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