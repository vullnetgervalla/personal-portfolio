import styles from './projects.module.css'
import github from '../../../assets/images/github.svg'
import data from '../../../assets/data'
import Project from './Project'

export default function ProjectsCard(props) {

    const projects = data.projectsCard.projects.map(project => (
        <Project title={project.title} description={project.description} link={project.link} darkMode={props.darkMode} />
    ))

    return (
        <div className={`${styles.card} ${props.darkMode ? styles.cardDarkMode : ''}`}>
            <div className={styles.sideContainer}>
                <div></div>
                <div>
                    <h1>Projects</h1>
                    <div className={styles.description}>
                        {data.projectsCard.description}
                    </div>
                </div>
                <a className={styles.githubLink} href={data.projectsCard.githubLink} target="_blank" rel="noreferrer">
                    <img src={github} alt="github" className={`${styles.githubIcon} ${props.darkMode ? styles.iconDarkMode : ''}`} />
                    <span>My Github</span>
                </a>
            </div>
            <div className={`${styles.projects} ${props.darkMode ? styles.projectsDarkMode : ''}`}>
                {projects}
            </div>
        </div>
    )
}