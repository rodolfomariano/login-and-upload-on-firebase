import type { NextPage } from 'next'
import { useEffect } from 'react'

import { useSession, signIn, signOut } from "next-auth/client"
import { useRouter } from 'next/dist/client/router'

import styles from '../styles/Login.module.scss'

import { LoginSocialButton } from '../components/LoginSocialButton'

import { FaGithub, FaGoogle } from 'react-icons/fa'


const Login: NextPage = () => {
  const [session, loading] = useSession()

  const router = useRouter()

  useEffect(() => {
    session && router.push('/app/Home')
  }, [session, router])

  return (
    <div className={styles.container}>
      <div className={styles.containerDescription}>

      </div>

      <div className={styles.containerForm}>
        <div className={styles.loginContent}>
          <h1>Login</h1>

          <LoginSocialButton
            icon={<FaGithub size={20} />}
            title='Entrar com GitHub'
            onClick={() => signIn('github')}
          />

          <LoginSocialButton
            icon={<FaGoogle size={20} />}
            title='Entrar com Google'
            onClick={() => signIn('google')}
          />

        </div>
      </div>
    </div>
  )
}

export default Login
