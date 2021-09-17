import { useRouter } from "next/dist/client/router"
import { signOut } from "next-auth/client"

import { MdClose } from "react-icons/md"

import { useModalExit } from '../../context/OpenModalExit'

import styles from './styles.module.scss'
import { useEffect, useState } from "react"

export function ModalExit() {
  const { isModalOpen, setIsModalOpen } = useModalExit()
  const [useAnimation, setUseAnimation] = useState(``)

  const router = useRouter()

  function handleCloseModal() {
    setIsModalOpen(false)

    setTimeout(() => {
      setUseAnimation(`${styles.hidden}`)
    }, 700)
    setUseAnimation(`${styles.hiddenZoomOut}`)

  }

  async function handleExit() {
    await signOut()
    router.push('/')
  }

  return (
    <div className={isModalOpen ? styles.container : `${styles.container} ${useAnimation}`}>
      <div className={isModalOpen ? styles.content : `${styles.content} ${styles.hiddenZoomOut}`} >
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