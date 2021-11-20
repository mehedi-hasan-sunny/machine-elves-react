import '../assets/css/Roadmap.css';

function Roadmap(props) {
	return (
			<div id={"roadmap"} className={"roadmap"}>
				<div className={"roadmap--container mb-5"}>
					<h1 className={"roadmap--title mb-4"}>The Roadmap</h1>
					<p className={"roadmap--description mb-5"}>
						Each Machine Elf comes with the privilege of first access to <strong>DEFI</strong> related protocols
						integrated throughout
						the <strong>LEAPNVERSE</strong>. This includes gamified staking and pooling and play to earn mechanics.
					</p>
				</div>
				<div className={"timeline"}>
					<div className={"timeline--left"}>
						<div className={"timeline--left-container"}>
							<div className={"timeline--left-wrapper"}>
								<strong>November 22, 2021</strong>
								<br/>
								<br/>
								<br/>
								<strong>Mint Pass Quest</strong>
								<br/>
								<br/>
								(In Discord. 100 Mint Passes available)
							</div>
						</div>
					</div>
					<div className={"timeline--right"}>
						<div className="timeline--right-container">
							<div className={"timeline--right-wrapper"}>
								<img src={require("../assets/images/UseThis2.png").default} alt="" className="img-fluid"/>
								<div className={"mb-3"}>
									<strong>November 22 begin, finish November 25 at 9pm:</strong>
									<ul className={"ps-3"}>
										<li>Mint Pass Quest begins</li>
										<li>100 Mint Pass Quest winners Mint</li>
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
								<strong>November 26, 2021</strong>
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
								<img src={require("../assets/images/UseThis4.png").default} alt="" className="img-fluid"/>
								<div className={"mb-3"}>
									<strong>November 26</strong>
									<ul className={"ps-3"}>
										<li>LEAPN Founders Deed Holders Mint (Free + gas) November 27</li>
									</ul>
								</div>
								<div className={"mb-3"}>
									<strong>November 27</strong>
									<ul className={"ps-3"}>
										<li>Ape Gang, Aurralia, MetaTravelers & StonedApez Whitelist Mint</li>
									</ul>
								</div>
								<div className={"mb-3"}>
									<strong>November 28</strong>
									<ul className={"ps-3"}>
										<li>LeapN Next Gen PLOT Whitelist Mint</li>
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
								<strong>November 30, 2021
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
									<strong>November 30, 2021 @ noon PST: </strong>
									<ul className={"ps-3"}>
										<li>Public Sale Mint</li>
									</ul>
								</div>
								<p className={"font-weight-bold"}>
									* 25 randomly generated Machine Elves are being
									reserved for marketing efforts and the team.
								</p>
								<img src={require("../assets/images/Landingpage.png").default} alt="" className="img-fluid"/>
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
								<img src={require("../assets/images/UseThis.png").default} alt="" className="img-fluid"/>
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