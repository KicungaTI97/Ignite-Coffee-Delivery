import { ThemeProvider } from "styled-components"
import { Outlet } from "react-router-dom"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { CartContextProvider } from "./contexts/CartProvider"
import { Header } from "./components/Header"



function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

    <CartContextProvider>
        <Header />
        <Outlet />
    </CartContextProvider>
</ThemeProvider>
  )
}

export default App