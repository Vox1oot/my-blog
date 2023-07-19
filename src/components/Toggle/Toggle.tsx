/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import clsx from 'clsx';
import styles from './Toggle.module.scss';
import ThemeContext from '@/context/ThemeContext';

const Toggle = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div
      tabIndex={0}
      className={styles.container}
      onClick={toggle}
      onKeyDown={toggle}
    >
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={clsx(styles.ball, {
          [styles.dark]: mode === 'dark',
          [styles.light]: mode === 'light',
        })}
      />
    </div>
  );
};

export default Toggle;
