import React from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

type Props = {
  url: string;
  children: React.ReactNode;
};

const Button = ({ url, children }: Props) => (
  <Link href={url}>
    <button type="button" className={styles.button}>
      {children}
    </button>
  </Link>
);

export default Button;
