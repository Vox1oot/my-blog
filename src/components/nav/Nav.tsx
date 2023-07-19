'use client';

import Link from 'next/link';
import React from 'react';
import styles from './Nav.module.scss';
import Toggle from '../Toggle';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contacts',
    url: '/contacts',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Nav = () => (
  <div className={styles.container}>
    <Link href="/" className={styles.logo}>
      Morrza
    </Link>
    <div className={styles.links}>
      <Toggle />
      {links.map((link) => (
        <Link key={link.id} href={link.url} className={styles.link}>
          {link.title}
        </Link>
      ))}
      <button
        type="button"
        onClick={() => console.log('log out')}
        className={styles.logout}
      >
        Log Out
      </button>
    </div>
  </div>
);

export default Nav;
