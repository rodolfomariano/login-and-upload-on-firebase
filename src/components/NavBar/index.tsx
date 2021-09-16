import { useSession, signIn, signOut } from "next-auth/client"

import { useOpenNavBar } from '../../context/OpenNavBar'

import { useModalExit } from '../../context/OpenModalExit'

import { MdPowerSettingsNew } from "react-icons/md"

import styles from './styles.module.scss'
import { ModalExit } from "../ModalExit"

export function NavBar() {
  const { isOpenNavBar, setIsOpenNavBar } = useOpenNavBar()
  const { isModalOpen, setIsModalOpen } = useModalExit()

  console.log(isModalOpen)

  return (

    <>
      <div className={isOpenNavBar ? styles.container : `${styles.container} ${styles.navBarContainerHidden}`}>

        <div className={styles.menuContainer}>

        </div>

        <div className={styles.containerExit}>
          <button
            className={styles.exitButton}
            onClick={() => setIsModalOpen(true)}
          >
            <MdPowerSettingsNew size={20} />
            Sair
          </button>
        </div>
      </div >

      <ModalExit />
    </>
  )
}