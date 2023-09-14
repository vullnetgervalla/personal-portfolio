import BioCard from './AboutMe/AboutMeCard'
import ProjectsCard from './Projects/ProjectsCard'
import ContactMeCard from './ContactMe/ContactMeCard'

export default function Content(props) {

    return (
        <div>
            <BioCard darkMode={props.darkMode} />
            <ProjectsCard darkMode={props.darkMode} />
            <ContactMeCard darkMode={props.darkMode} />
        </div>
    )
}