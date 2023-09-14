import styles from './navbar.module.css'

export default function ThemeSlider(props) {

    return (
        <div onClick={props.handleDarkMode} className={props.darkMode ? `${styles.themeSlider} ${styles.sliderDarkMode}` : `${styles.themeSlider}`}>
            <div className={props.darkMode ? `${styles.themeCircle} ${styles.circleDarkMode}` : `${styles.themeCircle}`}></div>
        </div>
    )
}