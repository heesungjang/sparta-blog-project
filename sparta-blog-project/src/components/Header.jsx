import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styles from '../styles/header.module.css';
import Logo from './Logo';

function Header() {
  return (
    <header className={styles.wrapper}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <DarkModeSwitch />
        </button>
      </div>
    </header>
  );
}

export default Header;
