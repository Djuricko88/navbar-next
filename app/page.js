import Navbar from "./navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1 className={styles["main-center"]}>Welcome dear customer!</h1>
    </main>
  );
}
