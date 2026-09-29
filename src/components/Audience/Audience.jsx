import Container from '../Container/Container.jsx';
import { audience } from '../../content/landingContent.js';
import styles from './Audience.module.css';

function PeopleIllustration() {
  return (
    <div className={styles.people} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default function Audience() {
  return (
    <section className={styles.section} id="para-quem" aria-labelledby="audience-title">
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Para quem é</p>
          <h2 id="audience-title">{audience.title}</h2>
          <p>{audience.description}</p>
        </div>
        <div className={styles.artAndText}>
          <PeopleIllustration />
        </div>
      </Container>
    </section>
  );
}
