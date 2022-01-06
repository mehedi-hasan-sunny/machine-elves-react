import '../assets/css/Mint.css';

function Mint(props) {
	return (
			<div id={"mint"} className={"mint text-center"}>
				<div className={"mint__container mb-5"}>
					<h1 className={"mint__title mb-4"}>Fair Distribution</h1>
					<p className={"mint__description mb-5"}>
						No bonding curves, all 5,555 Machine Elves cost <strong>0.08 ETH</strong>. Machine Elves will
						be revealed once 100% of minting is complete.
					</p>
					<p className={"mint__description"}>
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
						<a href="https://discord.gg/machineelves" className={"btn btn-outline"}>Join Discord</a>
					</p>
				</div>
			
			</div>
	);
}

export default Mint;