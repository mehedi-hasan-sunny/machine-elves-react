import '../assets/css/Mint.css';

function Mint(props) {
	return (
			<div id={"mint"} className={"mint text-center"}>
				<div className={"mint__container mb-5"}>
					<h1 className={"mint__title mb-4"}>Fair Distribution</h1>
					<p className={"mint__description mb-5"}>
						No bonding curves, all 5,555 Machine Elves cost either 0.08 ETH, 0.16 ETH, or 0.21 ETH. Machine Elves will
						be revealed once 100% of minting is complete.
					</p>
				</div>
				<div className={"mint__container mb-5"}>
					<h1 className={"mint__title mb-4"}>Efficient Minting</h1>
					<p className={"mint__description"}>
						Our smart contract is optimized to reduce transaction failure and save in gas fees.
						<br/>
						<br/>
						Machine Elves is committed to our community and on-going expansion of the Machine Elves world within LeapN
						to educate society on the advantages of participating in decentralized web3 protocols.
					</p>
				</div>
				<img src="/discord-icon.svg" alt="discord icon" className={"mint__discord-icon"} data-aos="zoom-in-down"
				     data-aos-offset="50" loading={"lazy"}/>
				<div className={"mint__container mb-5"} data-aos="zoom-in-down" data-aos-offset="-10">
					<h1 className={"mb-4"}>
						Join our Discord for giveaways, updates, and to join the Machine Elves community.
					</h1>
					<p className={"mint__description mb-5"}>
						<a href="#" className={"btn btn-outline"}>Coming Soon</a>
					</p>
				</div>
				<div className={"mint__container"} data-aos="zoom-in-down" data-aos-offset="-10">
					<h2 className={"mb-4"}>Public Sale Begins December 6th at noon PST</h2>
					<p className={"mint__description"}>
						<a href="#" className={"btn btn-outline"}>Coming Soon</a>
					</p>
				</div>
			
			
			</div>
	);
}

export default Mint;