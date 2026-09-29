import principal from '../../assets/brand/informaju-horizontal-principal.svg';
import branca from '../../assets/brand/informaju-horizontal-branca.svg';
import styles from './Logo.module.css';

export default function Logo({ inverse = false }) {
  return (
    <a className={styles.link} href="#inicio" aria-label="InformAju — início">
      <img src={inverse ? branca : principal} alt="" width="166" height="50" />
    </a>
  );
}
