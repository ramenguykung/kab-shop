import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function admin() {
  return (
      <div className={styles.div}>
        <p>This is admin page</p>
        <Link href="/login">Click this to login</Link>
      </div>
  );
}
