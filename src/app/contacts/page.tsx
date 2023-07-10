import React from 'react';
import Image from 'next/image';
import styles from './Contacts.module.scss';
import Button from '@/components/Button';

const Contacts = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
          src="/assets/images/contact.png"
          alt="contacts"
          fill
          className={styles.img}
        />
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="Name" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <textarea className={styles.textArea} cols={30} rows={10} />
        <Button url="#">Send</Button>
      </form>
    </div>
  </div>
);

export default Contacts;
