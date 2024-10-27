import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Topbar from "../components/Topbar";

export default function admin() {
	return (
			<div className={styles.div}>
				<Topbar/>
				<p>This is admin page</p> 
				<Link href="/login">Click this to login</Link>
			</div>
	);
}
