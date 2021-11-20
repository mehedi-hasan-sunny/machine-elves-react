import '../assets/css/Hero.css';

const Hero = () => {
	return (
			<div className={"hero"}>
				{/*<picture>*/}
				{/*	<source media="(min-width:650px)" srcSet="../assets/images/Landingpage.png"/>*/}
				{/*	<source media="(min-width:465px)" srcSet="../assets/images/Landingpage.png"/>*/}
				{/*	<img className="hero-img" src={require("../assets/images/Landingpage.png").default} alt="Machine Elves hero image"/>*/}
				{/*</picture>*/}
				<div className="row mx-0">
					<div className="col-12 col-md-6 col-lg-7 order-2 order-md-1 position-relative">
						<img className="hero--img img-fluid" src={require("../assets/images/Machine_Elves_NFT_For_Adam_3.png").default}
						     alt="Machine Elves hero 1"/>
						<img className="hero--img img-fluid" src={require("../assets/images/Machine_Elves_NFT_For_Adam_1.png").default}
						     alt="Machine Elves hero 2"/>
						<img className="hero--img img-fluid" src={require("../assets/images/Machine_Elves_NFT_For_Adam_2.png").default}
						     alt="Machine Elves hero 3"/>
					</div>
					<div className="col-12 col-md-6 col-lg-5 order-1 order-md-2">
						<div className={"hero--container d-flex flex-column justify-content-center"}>
							<h2 className={"hero--title"} data-aos-delay="50" data-aos="zoom-in-down">
								What are Machine Elves?
							</h2>
							<p className={"hero--description"} data-aos-delay="250" data-aos="zoom-in-down">
								Illustrated by renowned artist <strong>Jozshua Upshaw
								<br/>
								(MARVEL’s & HULU’S ‘Hit-Monkey’)</strong>,
							</p>
							<p className={"hero--description"} data-aos-delay="400" data-aos="zoom-in-down">
								<strong>Machine Elves</strong> are representative of fluidly shape-shifting entities of manic happiness
								who live in a <strong> higher dimension</strong>.
							</p>
							<p className={"hero--description"} data-aos-delay="500" data-aos="zoom-in-down">
								5,555 will mint on Ethereum blockchain – to induct the collective into the web3 way of life. A
								decentralized paradise free of centralized shackles.
							</p>
						</div>
					</div>
				</div>
			
			</div>
	);
}

export default Hero;
