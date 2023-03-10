import '@/styles/globals.css'
import { NextUIProvider, createTheme } from '@nextui-org/react'

// const theme = createTheme({
//   type: "light",
//   theme: {
//     colors: {
//       lightred: '#FCC5D8',
//       mediumred: '#F31260',
//       darkred: '#4E041E'
//     }
//   }
// })

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider >
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
