import type { NextPage } from 'next'

import { useSession, signIn, signOut } from "next-auth/client"

import styles from '../styles/Login.module.scss'
import { LoginSocialButton } from './components/LoginSocialButton'

import { FaGithub, FaApple, FaGoogle } from 'react-icons/fa'


const Login: NextPage = () => {

  async function handlerLoginWithGoogle() {

  }

  const [session, loading] = useSession()

  console.log(session)

  return (
    <div className={styles.container}>
      <div className={styles.containerDescription}>

      </div>

      <div className={styles.containerForm}>
        <div className={styles.loginContent}>
          <h1>Login</h1>

          {
            session && (
              <>
                <h6>{session.user?.name}</h6>
                <button onClick={() => signOut()}>Sair</button>
              </>
            )
          }

          <LoginSocialButton
            icon={<FaGithub size={20} />}
            title='Entrar com GitHub'
            onClick={() => signIn('github')}
          />

          <LoginSocialButton
            icon={<FaApple size={20} />}
            title='Entrar com Apple'
            onClick={() => signIn('discord')}
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
