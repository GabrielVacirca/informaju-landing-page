import Container from '../Container/Container.jsx';
import { finalCta } from '../../content/landingContent.js';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="final-title">
      <Container className={styles.grid}>
        <h2 id="final-title">{finalCta.title}</h2>
        <div>
          <p>{finalCta.description}</p>
          <a href="#como-funciona">
            Ver como funciona <span aria-hidden="true">↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
