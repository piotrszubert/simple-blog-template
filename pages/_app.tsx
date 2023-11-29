// import '@/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/components/themeProvider'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
