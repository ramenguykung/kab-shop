import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function login() {
	return(
		<div className={styles.div}>
			<p>This is login page.</p>
			<Link href='/login'>Click this to Homepage</Link>
		</div>
	);
}