import '../assets/css/Roadmap.css';

function Roadmap(props) {
	return (
			<div id={"roadmap"} className={"roadmap"}>
				<div className={"roadmap--container mb-5"}>
					<h1 className={"roadmap--title mb-4"}>The Roadmap</h1>
					<p className={"roadmap--description mb-5"}>
						Each Machine Elf comes with the privilege of first access to <strong>DEFI</strong> related protocols
						integrated throughout
						the <strong>LEAPNVERSE</strong>. Machine Elf holders will be whitelisted for LeapN's upcoming Next Gen Plots
						Collection.
						Each holder receives an <strong>ASCENDED BADGE</strong> in LeapN, which lights up the player's avatar
						username during
						gameplay. Machine Elf holders will be eternally recognized when they enter a world due to having a username
						that glows.
						Each holder will receive a 3D asset token that reads $ELF. So long as they hold their Machine ELf NFT, this
						$ELF token enables each holder to receive more $PORTAL upon playing and participating in the LeapN
						multiverse. $PORTAL is LeapN's native currency
					</p>
				</div>
				<div className={"timeline"}>
					<div className={"timeline--left"}>
						<div className={"timeline--left-container"}>
							<div className={"timeline--left-wrapper"}>
								<strong>November 29, 2021</strong>
								<br/>
								<br/>
								<br/>
								<strong>Mint Pass Quest</strong>
							</div>
						</div>
					</div>
					<div className={"timeline--right"}>
						<div className="timeline--right-container">
							<div className={"timeline--right-wrapper"}>
								<img src={require("../assets/images/UseThis2.png").default} alt="" className="img-fluid"
								     loading={"lazy"}/>
								<div className={"mb-3"}>
									<strong>November 29 - Mint pass quest begins</strong>
									<br/>
									<br/>
									<strong>December 1 @ 5pm pst - Mint pass quest ends </strong>
									<br/>
									<br/>
									<strong>December 2 @ 10am pst - Mint Pass Quest winners start minting</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={"timeline"}>
					<div className={"timeline--left"}>
						<div className={"timeline--left-container"}>
							<div className={"timeline--left-wrapper"}>
								<strong>December 2, 2021</strong>
								<br/>
								<br/>
								<br/>
								<strong>Whitelist</strong>
							</div>
						</div>
					</div>
					<div className={"timeline--right"}>
						<div className="timeline--right-container">
							<div className={"timeline--right-wrapper"}>
								<img src={require("../assets/images/UseThis4.png").default} alt="" className="img-fluid"
								     loading={"lazy"}/>
								<div className={"mb-3"}>
									<strong>December 2</strong>
									<ul className={"ps-3"}>
										<li>LEAPN Founders Deed Holders Mint (Free + gas)</li>
									</ul>
								</div>
								<div className={"mb-3"}>
									<strong>December 3</strong>
									<ul className={"ps-3"}>
										<li>Ape Gang, Aurallia, MetaTravelers & StonedApez Whitelist Mint</li>
									</ul>
								</div>
								<div className={"mb-3"}>
									<strong>December 4</strong>
									<ul className={"ps-3"}>
										<li>Next Gen PLOT should say 'LeapN Next Gen Plot: Alpha Mint Pass' holders start minting</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={"timeline"}>
					<div className={"timeline--left"}>
						<div className={"timeline--left-container"}>
							<div className={"timeline--left-wrapper"}>
								<strong>December 6th, 2021
								</strong>
								<br/>
								<br/>
								<br/>
								<strong> Public Launch</strong>
							</div>
						</div>
					</div>
					<div className={"timeline--right"}>
						<div className="timeline--right-container">
							<div className={"timeline--right-wrapper"}>
								<div className={"mb-3"}>
									<strong>December 6th, 2021 @ noon PST: </strong>
									<ul className={"ps-3"}>
										<li>Public Sale Mint</li>
									</ul>
								</div>
								<p className={"font-weight-bold"}>
									* 25 randomly generated Machine Elves are being
									reserved for marketing efforts and the team.
								</p>
								<img src={require("../assets/images/Landingpage.png").default} alt="" className="img-fluid"
								     loading={"lazy"}/>
								<p>
									After all 5,555 Machine Elves have been minted,
									one will be randomly selected as winner of a
									giveaway. Just submit your application in discord
									before December 05 at noon PST. Wallet snapshot
									taken at noon PST on December 05.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={"timeline"}>
					<div className={"timeline--left"}>
						<div className={"timeline--left-container"}>
							<div className={"timeline--left-wrapper"}>
								<strong>Ongoing</strong>
							</div>
						</div>
					</div>
					<div className={"timeline--right"}>
						<div className="timeline--right-container">
							<div className={"timeline--right-wrapper"}>
								<img src={require("../assets/images/UseThis.png").default} alt="" className="img-fluid"
								     loading={"lazy"}/>
								<p>
									We will release POOL PORTALS for holders. Each
									POOL PORTAL causes end users to leap into a
									MACHINE ELVES themed world w/ visual defi play
									to earn mechanics. Anyone can visit. Only Machine
									Elf holders and POOL PORTAL holders will benefit.
									Founders Deed World creators and plot owners can
									receive a HIGHER API if they create a POOL out of
									their native token + the Machine Elves upcoming
									token: $MACHINE (in development).
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
}

export default Roadmap;