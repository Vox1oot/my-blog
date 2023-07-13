import React from 'react';
import styles from './Portfolio.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <h1 className={styles.mainTitle}>Out Works</h1>
    {children}
  </div>
);

export default Layout;
