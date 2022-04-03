import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class About extends Component {
	static async getInitialProps() {
		const res = await fetch("https://api.github.com/users/sawabe0912");
		const statusCode = res.status > 200 ? res.status : false;
		const data = await res.json();

		return { user: data, statusCode };
	}

	render() {
		const { user, statusCode } = this.props;

		if (statusCode) {
			return <Error statusCode={statusCode} />;
		}

		return (
			<Layout title="Rion Sawabe">
				<img src={user.avatar_url} alt="Reed" height="200px" />
				<div className="buttons">
					<button>
						<FontAwesomeIcon icon={faCat}></FontAwesomeIcon>
						<a href="https://github.com/sawabe0912/">Github</a>
					</button>
					<button>
						<FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>
						<a href="https://www.linkedin.com/in/rionsawabe/">
							Linkedin
						</a>
					</button>
					<button>
						<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
						<a href="mailto:rionintech@gmail.com"> Email</a>
					</button>
				</div>
				<h3>Technical Experience🧑🏼‍💻 </h3>
				<p>I study Computer Studies at Langara College💻</p>
				<p>I pursue frontend web development🦾</p>
				<h3>Volunteer Activity🫂 </h3>
				<p>Assisstant Teacher taught Japanese to beginners at University of Hawaii Manoa🇯🇵🤙</p>
			</Layout>
		);
	}
}
