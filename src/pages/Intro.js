import teamwork from "../images/teamwork.png";
import { Button } from '@mantine/core'

import styles from "./Intro.module.css";

function IntroPage({ onEnroll }) {
  return (
    <>
      <header className={styles["intro-header"]}>
        <h2>Welcome!!</h2>
      </header>
      <main className={styles["intro-content"]}>
        <section>
          <img src={teamwork} alt="people" />
          Enter into Student Info System
        </section>
      </main>
      <footer className={styles["intro-actions"]}>
        <Button fullWidth size = 'xl' onClick={onEnroll} variant = "filled" color = "indigo">
          Enroll Now
        </Button>
        
      </footer>
    </>
  );
}

export default IntroPage;
