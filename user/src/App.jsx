import { Outlet } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

const App = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop
        smooth
        top={500}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          right: '30px',
          bottom: '30px'
        }}
      />
    </>
  )
}

export default App
