import Container from '../Container/Container.jsx';
import { howItWorks } from '../../content/landingContent.js';
import styles from './HowItWorks.module.css';

function StepIcon({ type }) {
  if (type === 'search')
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="13" cy="13" r="7" />
        <path d="m18 18 8 8" />
      </svg>
    );
  if (type === 'document')
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M8 4h12l4 4v20H8zM20 4v5h4M12 15h8M12 20h8" />
      </svg>
    );
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="m14 12 4-4a6 6 0 0 1 8 8l-5 5a6 6 0 0 1-8 0M18 20l-4 4a6 6 0 0 1-8-8l5-5a6 6 0 0 1 8 0" />
    </svg>
  );
}

function StepsIllustration() {
  return (
    <div className={styles.art} aria-hidden="true">
      <div className={styles.mockBack}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.mockFront}>
        <div className={styles.mockTop}>
          <i />
          <i />
          <i />
        </div>
        <div className={styles.mockRows}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className={styles.section} id="como-funciona" aria-labelledby="how-title">
      <Container>
        <div className={styles.introGrid}>
          <div>
            <p className={styles.eyebrow}>Como funciona</p>
            <h2 id="how-title">{howItWorks.title}</h2>
            <p className={styles.description}>{howItWorks.description}</p>
          </div>
          <StepsIllustration />
        </div>
        <ol className={styles.steps}>
          {howItWorks.steps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.icon}>
                <StepIcon type={step.icon} />
              </span>
              <h3>
                {index + 1}. {step.title}
              </h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
