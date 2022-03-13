import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

export default () => (
	<Layout title="Projects">
		<p>I created some web applications.</p>
		<p>Frontend: JavaScript, React.js, Next.js & full-stack: MERN stack</p>

		<ul>
			<li>
				<h4>YelpCamp</h4>

				<p>✅Developed frontend using EJS and bootstrap</p>
				<p>✅Used REST API using Express.js, Node.js, Mongoose, and MongoDB</p>
				<p>✅Deployed Mapbox to show the location of campsite</p>
				<p>✅Deployed Cloudinary to store the pictures of campsite</p>

				<button>
					<FontAwesomeIcon icon={faCat}></FontAwesomeIcon>
					<a href="https://github.com/sawabe0912/YelpCamp-project">Github</a>
				</button>
				<button>
					<FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
					<a href="https://damp-refuge-35102.herokuapp.com/">Demo</a>
				</button>
			</li>

			<li>
				<h4>Hiking SNS</h4>

				<p>✅Developed frontend using ReactJS</p>
				<p>✅Used REST API using Express.js, Node.js, Mongoose, and MongoDB</p>
				<p>✅Deployed this app using Heroku</p>

				<button>
					<FontAwesomeIcon icon={faCat}></FontAwesomeIcon>
					<a href="https://github.com/sawabe0912/HikingSNS">Github</a>
				</button>
				<button>
					<FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
					<a href="https://sleepy-island-93887.herokuapp.com/">Demo</a>
				</button>
			</li>

			<li>
				<h4>T-shirt Shop</h4>

				<p>✅Developed using React</p>
				<p>✅Used ContextAPI and Redux to store shopping details globally</p>
				<p>✅Used map to show all the t-shirts as a list</p>

				<button>
					<FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
					<a href="https://iin4y.csb.app/">Demo</a>
				</button>
			</li>
		</ul>
	</Layout>
);
