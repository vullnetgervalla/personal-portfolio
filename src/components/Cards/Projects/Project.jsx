import styles from './projects.module.css'
import outsideLinkIcon from '../../../assets/images/outsidelink.svg'

export default function Project(props) {
    const { title, description, link } = props

    return (
        <div className={`${styles.projectCard} ${props.darkMode ? styles.projectCardDarkMode : ''}`} id='projects'>
            <div className={styles.projectContent}>
                <div className={styles.projectTitle}>
                    {title}
                </div>
                <div className={styles.projectDescription}>
                    {description}
                </div>
            </div>
            <div className={styles.projectLink}>
                <a href={link} target="_blank" rel="noreferrer">
                    <img className={`${styles.linkIcon} ${props.darkMode ? styles.iconDarkMode : ''}`} src={outsideLinkIcon} alt="project-link" />
                </a>
            </div>
        </div>
    )
}