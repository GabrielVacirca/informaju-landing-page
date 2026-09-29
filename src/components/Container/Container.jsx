import styles from './Container.module.css';

export default function Container({ as: Element = 'div', className = '', children }) {
  return <Element className={`${styles.container} ${className}`.trim()}>{children}</Element>;
}
