import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider as NextAuthProvider } from 'next-auth/client'
import { OpenNavBarProvider } from '../context/OpenNavBar'
import { OpenModalExitProvider } from '../context/OpenModalExit'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <OpenNavBarProvider>
        <OpenModalExitProvider>
          <Component {...pageProps} />
        </OpenModalExitProvider>
      </OpenNavBarProvider>
    </NextAuthProvider>
  )
}
export default MyApp
