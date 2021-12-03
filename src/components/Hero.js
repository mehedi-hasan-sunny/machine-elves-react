import '../assets/css/Hero.css';
import {useEffect} from "react";

const Hero = () => {
	
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'bundle.js';
		script.defer = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);
	return (
			<div className={"hero"}>
				{/*<picture>*/}
				{/*	<source media="(min-width:650px)" srcSet="../assets/images/Landingpage.png"/>*/}
				{/*	<source media="(min-width:465px)" srcSet="../assets/images/Landingpage.png"/>*/}
				{/*	<img className="hero-img" src={require("../assets/images/Landingpage.png").default} alt="Machine Elves hero image"/>*/}
				{/*</picture>*/}
				<div className="row mx-0">
					<div className="col-12 col-md-6 col-lg-7 order-2 order-md-1 position-relative">
						<img className="hero__img img-fluid"
						     src={require("../assets/images/Machine_Elves_NFT_For_Adam_3.png").default}
						     alt="Machine Elves hero 1" loading={"lazy"}/>
						<img className="hero__img img-fluid"
						     src={require("../assets/images/Machine_Elves_NFT_For_Adam_1.png").default}
						     alt="Machine Elves hero 2" loading={"lazy"}/>
						<img className="hero__img img-fluid"
						     src={require("../assets/images/Machine_Elves_NFT_For_Adam_2.png").default}
						     alt="Machine Elves hero 3" loading={"lazy"}/>
					</div>
					<div className="col-12 col-md-6 col-lg-5 order-1 order-md-2">
						<div className={"hero__container d-flex flex-column justify-content-center"}>
							<h2 className={"hero__title"} data-aos-delay="50" data-aos="zoom-in-down">
								What are the Machine Elves?
							</h2>
							<p className={"hero__description"} data-aos-delay="250" data-aos="zoom-in-down">
								Illustrated by <strong>Jups</strong> (Past clients: <strong>Marvel and Sony Animation</strong>)
							</p>
							<p className={"hero__description"} data-aos-delay="400" data-aos="zoom-in-down">
								<strong>Machine Elves</strong> are self-transforming <strong>cross-dimensional entities</strong> of the
								fourth dimension and on - these
								manically happy creatures communicate via visual sound waves that pour out of their mouths like shiny
								rainbow cartoon captions. People can't hear them with their ears - they see the waves with their as the
								elves unlock the human recipient’s JUNK DNA, which unlock <strong>metaversal</strong> insights that
								ascend all to web3 enlightenment.
							</p>
							<div data-aos-delay="500" data-aos="zoom-in-down">
								<div className="flex-container">
									<div style={{flex: 1}}>
										<div style={{flex: 1, padding: '10px 0'}}>
											<button className="btn btn-connect btn-enabled" disabled id='btnConnect'>Connect to Metamask
											</button>
										</div>
										
										<div style={{flex: 1, padding: '10px 0'}}>
											<span id="mintCounts"/>
											<span>
											<div className={"d-flex align-items-center"}>
												<input className="mint-input mint-input-disabled" disabled id='qty' type="number" min="1"
												       max="10" defaultValue="1"/>
												<button className="btn btn-mint btn-disabled" disabled id='btnMint'>Mint Now</button>
											</div>
											<div style={{paddingTop: '5px'}}>
												<span id="mintingStatus"/>
											</div>
											</span>
										</div>
										<div style={{flex: 1, padding: '10px'}}>
											<span id="contractLink"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</div>
	);
}

export default Hero;
