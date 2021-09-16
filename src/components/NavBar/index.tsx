import { useSession, signIn, signOut } from "next-auth/client"

import { useOpenNavBar } from '../../context/OpenNavBar'

import { MdPowerSettingsNew } from "react-icons/md"

import styles from './styles.module.scss'

export function NavBar() {
  const { isOpenNavBar, setIsOpenNavBar } = useOpenNavBar()

  return (

    <div className={isOpenNavBar ? styles.container : styles.navBarContainerHidden}>

      <div className={styles.menuContainer}>

      </div>

      <div className={styles.containerExit}>
        <button
          className={styles.exitButton}
          onClick={() => signOut()}
        >
          <MdPowerSettingsNew size={20} />
          Sair
        </button>
      </div>
    </div>
  )
}