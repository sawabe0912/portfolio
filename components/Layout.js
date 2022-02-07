import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
Router.onRouteChangeStart = (url) => {
	console.log(url);
	NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title }) => (
	<div className="root">
		<Head>
			<link rel="shortcut icon" type="image/png" href="/static/rion.png" />
			<title>Rion Sawabe</title>
		</Head>
		<header>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/sideprojects">
				<a>Projects</a>
			</Link>
			<Link href="/contactme">
				<a>Contact Me</a>
			</Link>
		</header>

		<h1>{title}</h1>
		{children}

		<footer>&copy; {new Date().getFullYear()} Rion Sawabe</footer>
		<style jsx>{`
			.root {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
			}
			header {
				width: 100%;
				display: flex;
				justify-content: space-around;
				padding: 1em;
				font-size: 1.2rem;
				background: Lavender;
				padding: 8px;
			}
			header a {
				color: Crimson;
				text-decoration: none;
			}
			header a:hover {
				font-weight: bold;
				color: #ff4500;
			}
			footer {
				padding: 10em;
			}
		`}</style>
		<style global jsx>{`
			body {
				margin: 0;
				font-size: 110%;
				background: #f0f0f0;
				font-family: "Roboto", sans-serif;
			}
			p {
				margin: 10px;
				font-size: 14px;
			}
			footer {
				font-size: 6px;
			}
			.buttons {
				display: flex;
				margin-top: 10px;
			}
			button {
				margin-left: 2px;
				background: Lavender;
			}
			a {
				text-decoration: none;
			}
			a:hover {
				font-weight: bold;
				color: Orange;
			}
			button {
				border: none;
			}
			ul {
				list-style-type: none;
			}
			li {
				background: Azure;
				padding: 10px 40px;
				margin-bottom: 10px;
			}
		`}</style>
	</div>
);
