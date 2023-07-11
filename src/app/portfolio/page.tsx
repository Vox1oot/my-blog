import React from 'react';
import Link from 'next/link';
import styles from './Portfolio.module.scss';

const Potfolio = () => (
  <div className={styles.container}>
    <h1 className={styles.selectItem}>Chose a gallery</h1>
    <div className={styles.item}>
      <Link href="/portfolio/illustrations">
        <span>Illustrations</span>
      </Link>
    </div>
  </div>
);

export default Potfolio;
