import Container from '../Container/Container.jsx';
import { sources } from '../../content/landingContent.js';
import styles from './Sources.module.css';

export default function Sources() {
  return (
    <section className={styles.section} aria-labelledby="sources-title">
      <Container className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>Confiança e fontes</p>
          <h2 id="sources-title">{sources.title}</h2>
          <p>{sources.description}</p>
        </div>
        <ul className={styles.list}>
          {sources.categories.map((category, index) => (
            <li key={category}>
              <span aria-hidden="true">{['▣', '▤', '▧', '♧'][index]}</span>
              {category}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
