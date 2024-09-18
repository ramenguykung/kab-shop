import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";

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
			<p>Are you an Admin?</p>
			<Link href="/admin">Click Here</Link>
			<Link href="/">Click here to go to the Homepage</Link>
		</div>
	);
}