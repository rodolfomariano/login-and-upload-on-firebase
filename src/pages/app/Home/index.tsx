import { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/client"
import { useRouter } from 'next/dist/client/router'

import { TopBar } from '../../../components/TopBar'
import { NavBar } from '../../../components/NavBar'

import styles from './styles.module.scss'

export default function Home() {
  const [session, loading] = useSession()

  const router = useRouter()

  useEffect(() => {
    !session && router.push('/')
  })

  return (
    <div className={styles.container}>
      <TopBar />

      <div className={styles.contentContainer}>
        <NavBar />
        <div className={styles.content}>
          <h1 className={styles.title}>Home</h1>
        </div>

      </div>


    </div>
  )
}