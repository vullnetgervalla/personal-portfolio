import { useEffect, useState } from 'react'
import ThemeSlider from './ThemeSlider'
import styles from './navbar.module.css'

export default function NavBar(props) {
    const [prevScrollPos, setPrevScrollPos] = useState(0)

    const updateCurrentScroll = () => {
        const currentScrollPos = window.scrollY;
        if (prevScrollPos < currentScrollPos) {
            document.querySelector(`.${styles.navbar}`).classList.add(styles['offScreen']);
        } else {
            document.querySelector(`.${styles.navbar}`).classList.remove(styles['offScreen']);
        }
        setPrevScrollPos(window.scrollY)
    }


    useEffect(() => {
        window.addEventListener("scroll", updateCurrentScroll)

        return () => {
            window.removeEventListener("scroll", updateCurrentScroll)
        }
    })

    return (
        <nav className={`${styles.navbar}${props.darkMode ? ' ' + styles.darkMode : ""}`}>
            <div className={styles.leftSpace}>
                <ThemeSlider handleDarkMode={props.handleDarkMode} darkMode={props.darkMode} />
            </div>
            <h2>My Portfolio</h2>
            <div className={styles.menu}>
                <div><a className={styles.link} href='#'>About Me</a></div>
                <div><a className={styles.link} href='#projects'>Projects</a></div>
                <div><a className={styles.link} href='#contactme'>Contact Me</a></div>
            </div>
        </nav>
    )
}