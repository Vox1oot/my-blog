import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './Post.module.scss';
import Button from '@/components/Button';

interface IPost {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const Post = ({ title, description, image, className }: IPost) => (
  <div className={clsx(styles.item, className)}>
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Button url="#">See More</Button>
    </div>
    <div className={styles.imgContainer}>
      <Image className={styles.img} fill src={image} alt="image" />
    </div>
  </div>
);

export default Post;
