import Footer from "./components/Footer";
import Header from "./components/Header"
import Nav from "./components/Nav"
import { Outlet } from "react-router-dom";
import useLocalStorage from 'use-local-storage'

import styles from './styles/App.module.css'


function App() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const toggleTheme = () => {
        const newTheme = (theme === 'dark') ? 'light' : 'dark';
        setTheme(newTheme);
    }

  return (
    <div className={styles.app} data-theme={theme}>
    <Header />
    <Nav toggleTheme={toggleTheme}/>
    <Outlet />
    <Footer />
    </div>
  )
      
}

export default App
