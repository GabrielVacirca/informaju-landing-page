import Container from '../Container/Container.jsx';
import { problem } from '../../content/landingContent.js';
import styles from './Problem.module.css';

export default function Problem() {
  return (
    <section className={styles.section} aria-labelledby="problem-title">
      <Container className={styles.inner}>
        <h2 id="problem-title">{problem.title}</h2>
        {problem.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Container>
    </section>
  );
}
