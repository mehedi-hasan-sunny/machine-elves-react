import Hero from "./Hero";
import About from "./About";
import Team from "./Team";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useEffect} from "react";
import Rarity from "./Rarity";
import Roadmap from "./Roadmap";
import Mint from "./Mint";

const App = () => {
	
	useEffect(() => {
		window.addEventListener('load', AOS.refresh);
		AOS.init({
			startEvent: 'load',
		});
	});
	return (
			<main>
				<Hero/>
				<About/>
				<Rarity/>
				<Roadmap/>
				<Mint/>
				<Team/>
			</main>
	);
}

export default App;