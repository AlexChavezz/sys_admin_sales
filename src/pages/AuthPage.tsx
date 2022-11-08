import styles from '../styles/AuthPage.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthMode } from '../context/AuthMode';


export const AuthPage = () => {
    const { authMode } = useContext(AuthMode);
    return (
        <section
            className={styles.authPageConatiner}
        >
            <article className={styles.authPageHeader}>
                <h1 className={styles.authPageHeaderTitle}>BIENVENIDO</h1>
                <span className={styles.authPageHeaderMode}>{authMode}</span>
            </article>
            <article className={styles.authPageFormContainer}>
                <form
                    className={styles.authPageForm}
                >
                    <label
                        htmlFor="text"
                        className={styles.authPageFormLabel}
                    >USUARIO</label>
                    <input
                        type="text"
                        name="text"
                        className={styles.authPageFormInput}
                    />
                    <label
                        htmlFor="password"
                        className={styles.authPageFormLabel}
                    >CONTRASEÑA</label>
                    <input
                        type="password"
                        name="password"
                        className={styles.authPageFormInput}
                    />
                    <input
                        type="submit"
                        className={styles.authPageFormSubmit}
                        value="ENVIAR"
                    />
                </form>
            </article>
            <Link
                className={styles.arrowContainer}
                to="/"
            >
                <img
                    src="/backArrow.svg"
                    alt="arrow"
                />
            </Link>
        </section>
    );
}