import styles from './aboutme.module.css'
import Background from '../../../assets/images/BioBackground.png'
import BioIcon from '../../../assets/images/BioIcon.png'
import data from '../../../assets/data'

export default function BioCard(props) {
    return (
        <div className={styles.card} id='aboutme'>
            {props.darkMode && <img src={Background} alt="bio" />}
            <div className={`${styles.bioCardContent}${props.darkMode ? ' ' + styles.bioDarkMode : ''}`}>
                <img className={styles.bioIcon} src={BioIcon} alt='bio-icon' />
                <div className={styles.aboutMe}>
                    <h1>About Me</h1>
                    <div className={styles.aboutMeContent}>
                        {data.aboutMe}
                    </div>
                </div>
            </div>
        </div>
    )
}