import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";
import Topbar from "../components/Topbar";

export default function login() {
	return (
		<div className={styles.div}>
			<p>This is login page.</p>
			<form>
				<label htmlFor="username">Username:</label>
				<input type="text" id="username" name="username"/>

				<label htmlFor="password">Password:</label>
				<input type="password" id="password" name="password"/>

				<button type="submit">Login</button>
			</form>
			<p>Are you an Admin?
			<Link href="/admin">Click Here</Link>
			</p>
			<Link href="/">Click here to go to the Homepage</Link>
		</div>
	);
}