import Container from '../Container/Container.jsx';
import { guide } from '../../content/landingContent.js';
import styles from './TrustedGuide.module.css';

export default function TrustedGuide() {
  return (
    <section className={styles.section} aria-labelledby="guide-title">
      <Container className={styles.content}>
        <p className={styles.eyebrow}>O guia confiável</p>
        <h2 id="guide-title">{guide.title}</h2>
        <p className={styles.intro}>{guide.intro}</p>
        <ol className={styles.pillars}>
          {guide.pillars.map((pillar) => (
            <li key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </li>
          ))}
        </ol>
        <div className={styles.result}>
          <p className={styles.eyebrow}>O resultado que buscamos:</p>
          <p>{guide.result}</p>
        </div>
      </Container>
    </section>
  );
}
