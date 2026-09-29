import Container from '../Container/Container.jsx';
import Logo from '../Logo/Logo.jsx';
import { governance, navigation } from '../../content/landingContent.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.brand}>
          <Logo inverse />
          <p>InformAju — O Guia Confiável</p>
        </div>
        <nav className={styles.links} aria-label="Navegação do rodapé">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a
            href={governance.policyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Política de Governança (abre em nova aba)"
          >
            Política de Governança <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <p className={styles.closing}>
          Projeto acadêmico — Análise e Desenvolvimento de Sistemas
          <br />
          UNINASSAU Aracaju
        </p>
      </Container>
    </footer>
  );
}
