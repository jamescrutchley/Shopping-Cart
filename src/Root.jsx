import Header from "./components/Header"
import Nav from "./components/Nav"
import { Outlet } from "react-router-dom";


function Root() {

  return (
    <>
    <Header />
    <Nav />
    <Outlet />
    </>

  )
      
}

export default Root
