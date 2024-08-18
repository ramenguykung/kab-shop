import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.div}>
        <p>Hello!</p>
        <Link href="/login">Click this to login</Link>
      </div>
  );
}
