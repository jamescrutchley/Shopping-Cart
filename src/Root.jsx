import Footer from "./components/Footer";
import Header from "./components/Header"
import Nav from "./components/Nav"
import { Outlet } from "react-router-dom";
import useLocalStorage from 'use-local-storage'

// import styles from './styles/Root.module.css'
// import './styles/globalStyles.css';


import { useState } from "react";

function Root() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const toggleTheme = () => {
        console.log('toggle')
        const newTheme = (theme === 'dark') ? 'light' : 'dark';
        setTheme(newTheme);
    }

  return (
    <div data-theme={theme}>
    <Header />
    <Nav toggleTheme={toggleTheme}/>
    <Outlet />
    <Footer />
    </div>
  )
      
}

export default Root
