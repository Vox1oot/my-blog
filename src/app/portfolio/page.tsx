import React from 'react';
import Link from 'next/link';
import styles from './Portfolio.module.scss';

const Potfolio = () => (
  <div className={styles.container}>
    <h1 className={styles.selectTitle}>Chose a gallery</h1>
    <div className={styles.items}>
      <Link href="/portfolio/illustrations" className={styles.item}>
        <span className={styles.title}>Illustrations</span>
      </Link>
      <Link href="/portfolio/websites" className={styles.item}>
        <span className={styles.title}>Websites</span>
      </Link>
      <Link href="/portfolio/applications" className={styles.item}>
        <span className={styles.title}>Applications</span>
      </Link>
    </div>
  </div>
);

export default Potfolio;
