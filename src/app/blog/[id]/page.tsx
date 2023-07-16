import React from 'react';
import Image from 'next/image';
import styles from './BlogPost.module.scss';

const BlogPost = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          quisquam deleniti, distinctio harum quibusdam ut sequi. Ratione vitae
          excepturi fugit, veritatis eligendi iusto quo libero tempore
          reiciendis natus vero! Ex. Consectetur aperiam ea est deserunt nihil
          sit dicta! Sit eveniet quidem explicabo itaque voluptatem repudiandae
          sapiente similique ducimus sed pariatur, possimus repellat nostrum
          veniam sint rem praesentium. Sequi, esse animi!
        </p>
        <div className={styles.author}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Suri-alpaca.jpg"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>Vialy</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Suri-alpaca.jpg"
          alt=""
          fill
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        suscipit voluptatem porro praesentium modi velit, dignissimos quaerat,
        et voluptate quia, doloremque libero quis provident rem quisquam
        molestias quas cumque. Ab!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        suscipit voluptatem porro praesentium modi velit, dignissimos quaerat,
        et voluptate quia, doloremque libero quis provident rem quisquam
        molestias quas cumque. Ab!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        suscipit voluptatem porro praesentium modi velit, dignissimos quaerat,
        et voluptate quia, doloremque libero quis provident rem quisquam
        molestias quas cumque. Ab!
      </p>
    </div>
  </div>
);

export default BlogPost;
