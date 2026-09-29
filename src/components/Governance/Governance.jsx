import Container from '../Container/Container.jsx';
import { governance } from '../../content/landingContent.js';
import styles from './Governance.module.css';

export default function Governance() {
  return (
    <section className={styles.section} id="projeto" aria-labelledby="governance-title">
      <Container className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>Projeto e governança</p>
          <h2 id="governance-title">{governance.title}</h2>
          <div className={styles.description}>
            {governance.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className={styles.cards}>
          <article>
            <h3>Equipe do projeto</h3>
            <ul className={styles.teamList}>
              {governance.team.map((member) => (
                <li key={member.name}>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h3>{governance.policyTitle}</h3>
            <p>{governance.policy}</p>
            <a
              className={styles.policyLink}
              href={governance.policyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar Política de Governança (abre em nova aba)"
            >
              Consultar Política de Governança <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </Container>
    </section>
  );
}
