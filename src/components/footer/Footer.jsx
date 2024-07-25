import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Dayo</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </div>
    </div>
  );
};

export default Footer;
