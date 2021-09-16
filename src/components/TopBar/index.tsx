import { useSession } from "next-auth/client"

import { useOpenNavBar } from '../../context/OpenNavBar'

import styles from './styles.module.scss'

import { MdMenu } from "react-icons/md"


export function TopBar() {
  const [session] = useSession()

  const { isOpenNavBar, setIsOpenNavBar } = useOpenNavBar()


  return (
    <div className={styles.container}>
      <button
        className={styles.menu}
        onClick={() => setIsOpenNavBar(!isOpenNavBar)}
      >
        <MdMenu size={32} />
      </button>

      <div className={styles.userDetails}>
        <span className={styles.userName}>{session?.user?.name}</span>
        <img src={`${session && session.user?.image}`} alt='Imagem do usuario' />

      </div>
    </div>
  )
}