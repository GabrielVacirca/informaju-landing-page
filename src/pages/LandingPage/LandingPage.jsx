import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Container from '../../components/Container/Container.jsx';
import symbol from '../../assets/brand/informaju-simbolo-principal.svg';
import {
  hero,
  problem,
  guide,
  howItWorks,
  sources,
  audience,
  about,
  governance,
  finalCta,
} from '../../content/landingContent.js';
import styles from './LandingPage.module.css';

function SectionHeading({ label, title, id, children }) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{label}</p>
      <h2 id={id}>{title}</h2>
      {children && <div className={styles.lead}>{children}</div>}
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <div className={styles.heroCopy}>
          <p className={styles.status}>
            <span aria-hidden="true" /> Projeto em desenvolvimento
          </p>
          <h1 id="hero-title">{hero.title}</h1>
          <p>{hero.description}</p>
          <a className={styles.primaryButton} href="#como-funciona">
            Ver como funciona <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className={styles.heroArt} aria-hidden="true">
          <div className={styles.orbit} />
          <div className={styles.orbitTwo} />
          <img src={symbol} alt="" />
          <div className={`${styles.artLabel} ${styles.artLabelOne}`}>Encontrar</div>
          <div className={`${styles.artLabel} ${styles.artLabelTwo}`}>Compreender</div>
          <div className={`${styles.artLabel} ${styles.artLabelThree}`}>Confiar</div>
          <span className={styles.artSpark} />
        </div>
      </Container>
    </section>
  );
}

function Problem() {
  return (
    <section className={styles.problem} aria-labelledby="problem-title">
      <Container className={styles.editorialGrid}>
        <SectionHeading label="O desafio" title={problem.title} id="problem-title" />
        <div className={styles.problemCopy}>
          {problem.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className={styles.problemLine} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Guide() {
  return (
    <section className={styles.guide} aria-labelledby="guide-title">
      <Container>
        <SectionHeading label="O Guia Confiável" title={guide.title} id="guide-title">
          <p>{guide.intro}</p>
        </SectionHeading>
        <ol className={styles.pillarGrid}>
          {guide.pillars.map((pillar, index) => (
            <li key={pillar.title}>
              <span className={styles.cardNumber}>0{index + 1} / 03</span>
              <span className={styles.cardMark} aria-hidden="true">
                {['⌕', '≋', '◎'][index]}
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </li>
          ))}
        </ol>
        <div className={styles.result}>
          <span>O resultado que buscamos</span>
          <p>{guide.result}</p>
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className={styles.how} id="como-funciona" aria-labelledby="how-title">
      <Container>
        <SectionHeading
          label="Como funciona · visão planejada"
          title={howItWorks.title}
          id="how-title"
        >
          <p>{howItWorks.description}</p>
        </SectionHeading>
        <ol className={styles.steps}>
          {howItWorks.steps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepNumber}>0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <span className={styles.stepArrow} aria-hidden="true">
                ↗
              </span>
            </li>
          ))}
        </ol>
        <p className={styles.howNote}>{howItWorks.note}</p>
      </Container>
    </section>
  );
}

function Sources() {
  return (
    <section className={styles.sources} aria-labelledby="sources-title">
      <Container>
        <SectionHeading label="Confiança e fontes" title={sources.title} id="sources-title">
          <p>{sources.description}</p>
        </SectionHeading>
        <ul className={styles.sourceGrid}>
          {sources.categories.map((category, index) => (
            <li key={category}>
              <span>0{index + 1}</span>
              {category}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const principles = [
  { title: 'Clareza', text: 'Orientações apresentadas de forma direta e compreensível.' },
  { title: 'Legibilidade', text: 'Leitura confortável em diferentes tamanhos de tela.' },
  { title: 'Autonomia', text: 'Informações para apoiar a escolha do próximo passo.' },
  { title: 'Transparência', text: 'Origem da informação visível para consulta e conferência.' },
];

function Audience() {
  return (
    <section className={styles.audience} id="para-quem" aria-labelledby="audience-title">
      <Container>
        <SectionHeading label="Para quem é" title={audience.title} id="audience-title">
          <p>{audience.description}</p>
        </SectionHeading>
        <div className={styles.principleGrid}>
          {principles.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section className={styles.about} id="sobre" aria-labelledby="about-title">
      <Container className={styles.editorialGrid}>
        <SectionHeading label="Sobre o InformAju" title={about.title} id="about-title">
          <p>{about.description}</p>
        </SectionHeading>
        <div className={styles.aboutCards}>
          {about.highlights.map((item) => (
            <article key={item.title}>
              <span aria-hidden="true">✳</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Governance() {
  return (
    <section className={styles.governance} id="projeto" aria-labelledby="governance-title">
      <Container>
        <SectionHeading label="Projeto e equipe" title={governance.title} id="governance-title">
          {governance.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </SectionHeading>
        <div className={styles.governanceGrid}>
          <article>
            <h3>Equipe do projeto</h3>
            <ul>
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
              className={styles.textLink}
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

function FinalCTA() {
  return (
    <section className={styles.finalSection} aria-labelledby="final-title">
      <Container className={styles.finalPanel}>
        <div>
          <p className={styles.eyebrow}>InformAju · em desenvolvimento</p>
          <h2 id="final-title">{finalCta.title}</h2>
          <p>{finalCta.description}</p>
          <a className={styles.primaryButton} href="#como-funciona">
            Ver como funciona <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className={styles.finalArt} aria-hidden="true">
          <img src={symbol} alt="" />
          <span />
          <span />
        </div>
      </Container>
    </section>
  );
}

export default function LandingPage() {
  const [theme, setTheme] = useState(() =>
    window.localStorage.getItem('informaju-theme') === 'dark' ? 'dark' : 'light',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('informaju-theme', theme);
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
      />
      <main id="conteudo">
        <Hero />
        <Problem />
        <Guide />
        <HowItWorks />
        <Sources />
        <Audience />
        <About />
        <Governance />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
