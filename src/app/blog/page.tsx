import React from 'react';
import Link from 'next/link';
import styles from './Blog.module.scss';
import Post from '@/components/Post';

const Blog = () => (
  <div className={styles.container}>
    <Link href="/blog/1">
      <Post
        title="My first post"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad veniam quaerat soluta, unde cupiditate minus! Cum excepturi vel natus delectus praesentium sapiente voluptate, incidunt tempore at, repellat eligendi est."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/1200px-Alpaca_%2831562329701%29.jpg"
        isButton={false}
        className={styles.blogPost}
      />
    </Link>
  </div>
);

export default Blog;
