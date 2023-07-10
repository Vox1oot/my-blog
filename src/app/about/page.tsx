import React from 'react';
import Image from 'next/image';
import styles from './About.module.scss';
import Button from '@/components/Button';

const About = () => (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill
        alt="work"
        className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDescription}>
          Handcrafting award winnig digital experience
        </h2>
      </div>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h2 className={styles.title}>Who are We ?</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id,
          quos alias delectus eos odio corporis amet aliquam nemo ratione
          aspernatur magni repellendus laudantium reiciendis, corrupti possimus
          consequatur molestias fugiat.
        </p>
      </div>
      <div className={styles.item}>
        <h2 className={styles.title}>What we Do ?</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          exercitationem cumque porro tempora natus nihil doloribus quod. Enim
          unde provident iste autem quibusdam molestiae explicabo, asperiores
          doloremque vitae. Neque, quo.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          sint nihil necessitatibus deserunt corporis provident asperiores
          facere, inventore commodi, non perferendis? Quaerat asperiores, dicta
          aut nobis consequuntur veritatis excepturi in.
        </p>
        <Button url="/contacts">Contacts</Button>
      </div>
    </div>
  </div>
);

export default About;
