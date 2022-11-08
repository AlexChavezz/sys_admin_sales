import { useContext } from 'react';
import { Target } from '../components/Target';
import { AuthMode } from '../context/AuthMode';
import styles from '../styles/HomePage.module.css';

export const HomePage = () => {

    const { setAuthMode } = useContext(AuthMode);
    const setMode = (mode: "ADMINISTRACION" | "VENTAS" | null) => {
        setAuthMode(mode);
    }
    return (
        <section
            className={styles.homePageContainer}
        >
            <Target
                title='ADMINISTRACION'
                altImage='image-security'
                imgStyles={styles.homePageTargetImage}
                srcImage='./undraw_security_on_re_e491.svg'
                targetStyles={styles.homePageTarget}
                titleStyles={styles.homePageTargetTitle}
                onClick={setMode}
            />
            <Target
                title='VENTAS'
                altImage='image-sales'
                imgStyles={styles.homePageTargetImage}
                srcImage='./undraw_business_deal_re_up4u.svg'
                targetStyles={styles.homePageTarget}
                titleStyles={styles.homePageTargetTitle}
                onClick={setMode}
            />
        </section>
    );
}
