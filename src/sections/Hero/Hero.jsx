import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/DevanshGulati_Resume.pdf';
import { useTheme } from '../../common/themeContext.jsx';

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section className={styles.container} id="hero">
            <div className={styles.colorModeContainer}>
                <img className={styles.Hero} src={heroImg} alt="My Profile Picture" />
                <img 
                    className={styles.colorModeIcon} 
                    src={themeIcon} 
                    alt="Color Mode Icon" 
                    onClick={toggleTheme} 
                />
            </div>
            <div className={styles.info}>
                <h1>Devansh<br /> Gulati <br /></h1>
                <h2>Front End Developer</h2>
                <span>
                    <a href="https://twitter.com/DevanshGulati4" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/devansh-gulati-a9b456213/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn Icon" />
                    </a>
                    <a href="https://github.com/devanshg18" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub Icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    Developing new and innovative projects in Cloud and Web Development.
                </p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;