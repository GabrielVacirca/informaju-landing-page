import Container from '../Container/Container.jsx';
import { hero } from '../../content/landingContent.js';
import heroJourney from '../../assets/decorative/percurso-hero.svg';
import styles from './Hero.module.css';

function HeroIllustration() {
  return (
    <div className={styles.art} aria-hidden="true">
      <div className={styles.browser}>
        <div className={styles.browserTop}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.browserBody}>
          <div className={styles.search}>
            <span className={styles.magnifier} />
            <span className={styles.searchLine} />
            <span className={styles.searchButton} />
          </div>
          {[0, 1, 2].map((item) => (
            <div className={styles.result} key={item}>
              <span className={styles.resultDot} />
              <span className={styles.resultLines}>
                <i />
                <i />
              </span>
            </div>
          ))}
        </div>
      </div>
      <img className={styles.journey} src={heroJourney} alt="" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.section} aria-labelledby="hero-title">
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <h1 id="hero-title">{hero.title}</h1>
          <p>{hero.description}</p>
          <a className={styles.cta} href="#como-funciona">
            Ver como funciona <span aria-hidden="true">↓</span>
          </a>
        </div>
        <HeroIllustration />
      </Container>
    </section>
  );
}
