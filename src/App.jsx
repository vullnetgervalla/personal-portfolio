import { useState, useEffect } from 'react';
import NavBar from './components/Navbar/Navbar';
import Content from './components/Cards/Content';
import './styles/App.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode")
        }
        else {
            document.body.classList.remove("dark-mode")
        }
    }, [isDarkMode])

    return (
        <div className={isDarkMode ? "App dark-mode" : "App"}>
            <NavBar handleDarkMode={toggleDarkMode} darkMode={isDarkMode} />
            <Content darkMode={isDarkMode} />

        </div>
    );
}

export default App;
