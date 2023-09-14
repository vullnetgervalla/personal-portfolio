import styles from './contactme.module.css';
import { useForm, ValidationError } from '@formspree/react';
import data from '../../../assets/data';

export default function ContactMeCard(props) {
    const [state, handleSubmit] = useForm(data.formspree);

    return (
        <div className={`${styles.card} ${props.darkMode ? styles.cardDarkMode : ''}`} id='contactme'>
            <div className={`${styles.form} ${props.darkMode ? styles.formDarkMode : ''}`}>
                <h2 className={styles.title}>Contact Me</h2>
                <form onSubmit={handleSubmit} className={`${styles.formContainer} ${props.darkMode ? styles.formContainerDarkMode : ''}`}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Full Name" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Message" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <button type="submit" disabled={state.submitting}>Send</button>
                    {state.succeeded && <p>Email has been sent.</p>}
                </form>
            </div>
        </div>
    );
}
