import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>
        <Link href="/app">To app</Link>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
