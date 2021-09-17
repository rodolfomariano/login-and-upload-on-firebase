import { useSession } from "next-auth/client"

import { useOpenNavBar } from '../../context/OpenNavBar'

import styles from './styles.module.scss'

import { MdMenu } from "react-icons/md"
import { useState } from "react"


export function TopBar() {
  const [session] = useSession()
  const [openUserDetails, setOpenUserDetails] = useState(false)

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
        {/* <span className={styles.userName}>{session?.user?.name}</span> */}
        <img src={`${session && session.user?.image}`} alt='Imagem do usuario'
          onClick={() => setOpenUserDetails(!openUserDetails)}
        />

      </div>

      {
        openUserDetails && (

          <div className={styles.userData}>
            <h3>{session?.user?.name}</h3>
            <span>{session?.user?.email}</span>

          </div>
        )
      }
      <div
        className={openUserDetails === true ? styles.backgroundUserData : `${styles.backgroundUserData} ${styles.hidden}`}
        onClick={() => setOpenUserDetails(!openUserDetails)}
      />


    </div>
  )
}