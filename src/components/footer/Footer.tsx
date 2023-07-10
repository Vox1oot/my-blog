import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.container}>
    <div>©2023 Morrza. Vitaliy Morzhov.</div>
    <div className={styles.social}>
      <Image src="/assets/images/1.png" height={15} width={15} className={styles.icon} alt="facebook" />
      <Image src="/assets/images/2.png" height={15} width={15} className={styles.icon} alt="instagram" />
      <Image src="/assets/images/3.png" height={15} width={15} className={styles.icon} alt="twitter" />
      <Image src="/assets/images/4.png" height={15} width={15} className={styles.icon} alt="youtube" />
    </div>
  </div>
);

export default Footer;
