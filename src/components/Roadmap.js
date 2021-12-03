import '../assets/css/Roadmap.css';

function Roadmap(props) {
	return (
			<div id={"roadmap"} className={"roadmap"}>
				<div className={"roadmap__container mb-5"}>
					<h1 className={"roadmap__title mb-4"}>The Roadmap</h1>
					<p className={"roadmap__description mb-5"}>
						The first introductory lesson you must know about the fourth dimension is the mystery behind what the 4th
						dimension actually IS. In short easy to understand words – the fourth dimension is SPACE-TIME. But this
						doesn’t mean what you might think. You see, instead of an emphasis on space and time … the reality of this
						dimension is quite the opposite. A complete paradox. ‘Time’ blends into a fluid soup of past, present, and
						future – mended into one. And ‘space’ is no different – Want to walk from your living room to the kitchen?
						Screw the hallway –just walk through the wall! In the land of Machine Elves – Roadmaps are no exception. The
						spacetime is fluid and you’ve already received all these perks listed below upon minting your elf – you just
						can’t see it yet because you’re still a dumbed down D3 (Elves’ term for a ‘third-dimensioner’).
					</p>
					
					<h2 className={"mb-4"}>Let’s get started: The Roadmap</h2>
					<p className={"roadmap__description"}>
						Once the collection sells out and as the Leapn platform facilitates each hodler’s ascension as each lesson
						is learned and neophytes are tested and earn ascension, they will receive the following in an unrevealed
						order at the time each perk is earned -
					</p>
					<ul>
						<li className={"mb-2"}>
							<strong>FIRST ACCESS TO DEFI</strong> related protocols integrated throughout the <strong>LEAPNVERSE</strong>.
						</li>
						<li className={"mb-2"}>
							<strong>WHITELIST PRIVILEDGE</strong> for LeapN's upcoming <strong>$LeapN</strong> token launch (2022. Title of coin TBD. Max Quantity of whitelist purchase TBD).
						</li>
						<li className={"mb-2"}>
							<strong>ETERNAL COLORED AVATAR GLOW THROUGHOUT THE LEAPNVERSE</strong>
						</li>
						<li className={"mb-2"}>
							<strong>D4 NEO BADGE ON YOUR LEAPN PROFILE</strong> - Your metaverse friends will be able to view this
							badge when they access your profile within LeapN. It lights up and glows. People will want to buy a
							secondary market machine elf in order to also be eternally recognized as an enlightened badass.
						</li>
						<li className={"mb-2"}>
							<strong>A special edition ‘$ELF’ NFT hodlers will be able to burn for $LEAPN tokens</strong> This $ELF
							token will appear in our dimension as a coin shaped art construct within the LeapN platform. Hodlers will
							be able to BURN this token for a select amount of $LeapN tokens once those are launched. Machine Elf
							holders who contribute the most in both the LeapN Discord, the private Machine Elves channel, and the
							LeapN Multiverse are subject to receive more $LeapN tokens than Machine Elf holders who do not make
							noticeable contributions that benefit the greater good of the Machine Elves community and the LeapN
							community.
						</li>
						<li className={"mb-2"}>
							<strong>ELIGIBILITY FOR $PORTAL TOKEN AFTER SIX MONTHS FOR MINTERS WHO HODL AND DON’T
								SELL.</strong> Secondary Market holders not eligible So once you mint your sacred Machine Elf NFT, leave
							it unlisted or list it for 1 billion ETH. But you better hope a whale doesn’t gobble it up and out of your
							hands
						</li>
					</ul>
				</div>
				
				<div className={"timeline"}>
					<div className={"timeline__left"}>
						<div className={"timeline__left-container"}>
							<div className={"timeline__left-wrapper"}>
								<strong>December 2, 2021</strong>
								<br/>
								<br/>
								<br/>
								<strong>Whitelist</strong>
							</div>
						</div>
					</div>
					<div className={"timeline__right"}>
						<div className="timeline__right-container">
							<div className={"timeline__right-wrapper"}>
								<img src={require("../assets/images/UseThis2.png").default} alt="" className="img-fluid"
								     loading={"lazy"}/>
								<div className={"mb-3"}>
									<strong>December 2</strong>
									<ul className={"ps-3"}>
										<li>LEAPN Founders Deed Holders Mint (Free + Gas)</li>
										<li>Stealth Public Launch</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
			;
}

export default Roadmap;