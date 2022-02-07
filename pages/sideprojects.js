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
				<h4>T-shirt review site</h4>

				<p>
					✅Designed, developed and deployed a review website using the MERN
					stack
				</p>
				<p> ✅Added animation using Framer motion</p>
				<p>✅Used REST API using Express.js, Node.js, Mongoose, and MongoDB</p>
				<p>✅Maneged application state using ContextAPI</p>
				<p>
					✅Deployed Frontend to Netlify, and deployed Backend to heroku.
					Finally, Combined them
				</p>

				<button>
					<FontAwesomeIcon icon={faCat}></FontAwesomeIcon>
					<a href="https://github.com/sawabe0912/MERN-CPSC2600Final">Github</a>
				</button>
				<button>
					<FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
					<a href="https://goofy-tesla-b83d43.netlify.app/"> Demo</a>
				</button>
			</li>

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

			<li>
				<h4>Find Friends from Github</h4>

				<p>✅Developed UI using Tailwind</p>
				<p>✅Used fetch to retrieve data from Github</p>
				<p>✅Showed the friend's information as one card</p>

				<button>
					<FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
					<a href="https://codepen.io/Rion01/live/GRWyBjr">Demo</a>
				</button>
			</li>
		</ul>
	</Layout>
);