import React from 'react';
import styles from './Category.module.scss';
import Post from '@/components/Post';

type ICategory = {
  params: { category: string };
};

const Category = ({ params }: ICategory) => {
  const { category } = params;

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{category}</h1>
      <Post
        title="Test"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            aut nihil voluptate ex. Corrupti, vero cupiditate deserunt aut, at
            officia sed hic ipsum accusantium repudiandae, atque est adipisci
            nobis dolores."
        image="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className={styles.reverse}
        isButton
      />
      <Post
        title="Test"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            aut nihil voluptate ex. Corrupti, vero cupiditate deserunt aut, at
            officia sed hic ipsum accusantium repudiandae, atque est adipisci
            nobis dolores."
        image="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className={styles.reverse}
        isButton
      />
    </div>
  );
};

export default Category;
