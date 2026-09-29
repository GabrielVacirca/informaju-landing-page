import Container from '../Container/Container.jsx';
import { about } from '../../content/landingContent.js';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="sobre" aria-labelledby="about-title">
      <Container className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>Sobre o InformAju</p>
          <h2 id="about-title">{about.title}</h2>
          <p>{about.description}</p>
        </div>
        <div className={styles.highlights}>
          {about.highlights.map((item, index) => (
            <article key={item.title} className={styles.highlight}>
              <span className={styles.icon} aria-hidden="true">
                {index === 0 ? '✧' : '◎'}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
