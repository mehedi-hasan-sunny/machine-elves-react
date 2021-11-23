import '../assets/css/Team.css';

const TeamCard = ({imgSrc, name, designation, job, twitterHandle = null}) => {
	return (
			<div className={"team__card mb-3"}>
				<img src={imgSrc} alt="" className={"img-fluid team__card-img"} loading={"lazy"}/>
				<div className={"py-3"}>
					<h4 className={"team__card-title"}>{name} - {designation}</h4>
					<p className={"white m-0"}>
						{job}
					</p>
					{
						twitterHandle ? (
								<div className={"text-center mt-3"}>
									<a href={twitterHandle} target="_blank" rel="noreferrer" >
										<img src={"/Twitter_bird_logo.svg"} alt="twitter logo" width={"25px"}/>
									</a>
								</div>
						) : null
					}
				</div>
			</div>
	);
}

const Team = () => {
	
	const teamMembers = [
		{
			imgSrc: require("../assets/images/JUPS_PFP-1.png").default,
			name: "Jups",
			designation: "9th dimension Artist",
			job: "Illustrating what he dreams, Jups is an artistic marvel and we’re delighted he’s inducting us into untapped realms. Jups most recently served as a character design artist for Marvel’s new ‘HIT-MONKEY’ series on HULU."
		},
		{
			imgSrc: require("../assets/images/FREB.png").default,
			name: "Ferb",
			designation: "Cross dimensional Managing Director",
			job: "Co-Creator of Machine Elves. Creator & Founder of LeapN. Ferb lives everywhere at once, ensuring the multiverse’s survival so Machine Elves can thrive in a stable, everevolving safe haven.",
			twitterHandle: "https://twitter.com/ferb7nft"
		},
		{
			imgSrc: require("../assets/images/Adam_Cephalopod_Elf.png").default,
			name: "Wicked Dig",
			designation: "Cross dimensional Managing Director & Lore Writer",
			job: "Creator of Machine Elves. Co-Founder of LeapN. Wicked Dig works with the illustrator and team to flesh out the lore with the broad message that web3 and blockchain are at their best when decentralized.",
			twitterHandle: "https://twitter.com/WickedDig"
		},
		{
			imgSrc: require("../assets/images/UseThis4.png").default,
			name: "Duo",
			designation: "6th dimensional Marketing & Outreach",
			job: "Duo’s artistic essence, wisdom and longevity of the NFT space and cool, calm nature make him the most pleasant human people will tell you they’ve encountered. Is he secretly a machine elf? Probably…",
			twitterHandle: "https://twitter.com/ADuocrypto"
		},
		{
			imgSrc: require("../assets/images/UseThis5.png").default,
			name: "Friendly",
			designation: "7th dimensional Marketing & Outreach",
			job: "Friendly’s advisor level wisdom is invaluable. His energy is limitless. And he leaves everyone he talks to smiling. Friendly is an NFT COMMUNITY treasure.",
			twitterHandle: "https://twitter.com/FCJNFT"
		},
		{
			imgSrc: require("../assets/images/Cephalopod_1.png").default,
			name: "Nicky",
			designation: "8th dimensional Discord Community Builder & Promotions",
			job: "Nicky is absolutely other dimensional, within the highest of realms. He churns out excellent work, seemingly effortlessly.",
			twitterHandle: "https://twitter.com/NickyGee44"
		}
	]
	
	return (
			<div id={"team"} className={"team text-white"}>
				<div className={"container h-100"}>
					<h1 className={"team__title text-center py-5"}>The Team</h1>
					<div className={"row  justify-content-center"}>
						{
							teamMembers.map((teamMember, index) => {
								return (
										<div className={"col-sm-6 col-md-4"} key={index}>
											<div data-aos={"fade-down"} className={"h-100"} data-aos-delay={index * 50} data-aos-offset={-10}>
												<TeamCard {...teamMember}/>
											</div>
										</div>
								)
							})
						}
					</div>
				</div>
			</div>
	);
}

export default Team;