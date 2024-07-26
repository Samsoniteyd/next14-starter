import Image from "next/image";
import styles from './about.module.css'

export const metadata = {
  title: "about Page",
  description: "about description",
};

const Aboutpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
      <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae!
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem maxime minus?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default Aboutpage