import '../assets/css/Mint.css';

function Mint(props) {
	return (
			<div id={"mint"} className={"mint text-center"}>
				<div className={"mint--container mb-5"}>
					<h1 className={"mint--title mb-4"}>Fair Distribution</h1>
					<p className={"mint--description mb-5"}>
						No bonding curves, all 5,555 Machine Elves cost either .1 ETH, .2 ETH, .25 ETH, or – for each LEAPN Founders
						Deed holder, one free elf total plus the cost of gas. Machine Elves will be revealed once 100% of minting is
						complete.
					</p>
				</div>
				<div className={"mint--container mb-5"}>
					<h1 className={"mint--title mb-4"}>Efficient Minting</h1>
					<p className={"mint--description"}>
						Our smart contract is optimized to reduce transaction failure and save in gas fees.
						<br/>
						<br/>
						Machine Elves is committed to our community and on-going expansion of the Machine Elves world within LeapN
						to educate society on the advantages of participating in decentralized defi protocols.
					</p>
				</div>
				<img src="/discord-icon.svg" alt="discord icon" className={"mint--discord-icon"} data-aos="zoom-in-down" data-aos-offset="50"/>
				<div className={"mint--container mb-5"} data-aos="zoom-in-down" data-aos-offset="-10">
					<h1 className={"mb-4"} >
						Join our Discord for giveaways, updates, and to join the Machine Elves community.
					</h1>
					<p className={"mint--description mb-5"}>
						<a href="#" className={"btn btn-outline"}>Discord</a>
					</p>
				</div>
				<div className={"mint--container"} data-aos="zoom-in-down" data-aos-offset="-10">
					<h2 className={"mb-4"}>Public Sale Begins November 30th at noon PST</h2>
					<p className={"mint--description"}>
						<a href="#" className={"btn btn-outline"}>Start Minting</a>
					</p>
				</div>
			
			
			</div>
	);
}

export default Mint;