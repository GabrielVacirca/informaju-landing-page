import { useRef, useState } from 'react';
import Container from '../Container/Container.jsx';
import Logo from '../Logo/Logo.jsx';
import { navigation } from '../../content/landingContent.js';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef(null);

  function closeMenu() {
    setIsOpen(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape' && isOpen) {
      closeMenu();
      menuButton.current?.focus();
    }
  }

  return (
    <header className={styles.header} id="inicio" onKeyDown={handleKeyDown}>
      <Container className={styles.inner}>
        <Logo />
        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className={styles.desktopCta} href="#como-funciona">
          Ver como funciona
        </a>
        <button
          ref={menuButton}
          className={styles.menuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? 'Fechar' : 'Menu'} <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
        </button>
      </Container>
      <nav
        className={styles.mobileNav}
        id="menu-mobile"
        aria-label="Navegação móvel"
        hidden={!isOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href="#como-funciona" onClick={closeMenu}>
          Ver como funciona
        </a>
      </nav>
    </header>
  );
}
