import image from 'next/image';
import Link from 'next/link';
import style from './page.module.css';

import { SpeedInsights } from "@vercel/speed-insights/next";

export default function login() {
	return (
    
    <SpeedInsights/>
	);
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
		event.preventDefault(); // ป้องกันการส่งฟอร์มแบบเดิม

		// ดึงค่าจากฟอร์ม
		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;

		// ตรวจสอบข้อมูลล็อกอิน (ตัวอย่างง่ายๆ)
		if (username === 'user' && password === 'password') {
				document.getElementById('message').textContent = 'Login successful!';
				document.getElementById('message').style.color = 'green';
				// ที่นี่คุณสามารถนำทางไปยังหน้าอื่นหรือเก็บสถานะการล็อกอิน
		} else {
				document.getElementById('message').textContent = 'Invalid username or password.';
				document.getElementById('message').style.color = 'red';
		}
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
		event.preventDefault(); // ป้องกันการส่งฟอร์มแบบเดิม

		// ดึงค่าจากฟอร์ม
		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;

		// ตรวจสอบข้อมูลล็อกอิน (ตัวอย่างง่ายๆ)
		if (username === 'user' && password === 'password') {
				document.getElementById('message').textContent = 'Login successful!';
				document.getElementById('message').style.color = 'green';
				// ที่นี่คุณสามารถนำทางไปยังหน้าอื่นหรือเก็บสถานะการล็อกอิน
		} else {
				document.getElementById('message').textContent = 'Invalid username or password.';
				document.getElementById('message').style.color = 'red';
		}
});
