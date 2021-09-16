import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider as NextAuthProvider } from 'next-auth/client'
import { OpenNavBarProvider } from '../context/OpenNavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <OpenNavBarProvider>
        <Component {...pageProps} />
      </OpenNavBarProvider>
    </NextAuthProvider>
  )
}
export default MyApp
