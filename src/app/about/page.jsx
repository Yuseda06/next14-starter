import Image from "next/image";
import styles from "./about.module.css";

function About() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image fill src="/about.png" alt="Picture of the author" />
      </div>
    </div>
  );
}

export default About;
