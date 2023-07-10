import Image from 'next/image';
import Hero from 'public/assets/images/hero.png';
import styles from './page.module.scss';
import Button from '@/components/Button';

const Home = () => (
  <div className={styles.container}>
    <div className={styles.text}>
      <h1 className={styles.title}>Better design for your digital products</h1>
      <p className={styles.description}>
        Turing your Idea inro Reality. We bring together the teams from the
        global tech industry.
      </p>
      <Button url="/portfolio">See my works</Button>
    </div>
    <div className={styles.hero}>
      <Image src={Hero} alt="Hero" className={styles.img} />
    </div>
  </div>
);

export default Home;
