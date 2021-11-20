import '../assets/css/Team.css';

const TeamCard = ({imgSrc, name, designation, job}) => {
	return (
			<div className={"team--card mb-3"}>
				<img src={imgSrc} alt="" className={"img-fluid team--card-img"}/>
				<div className={"py-3"}>
					<h4>{name} - {designation}</h4>
					<p className={"white m-0"}>
						{job}
					</p>
				</div>
			</div>
	);
}

const Team = () => {
	
	const teamMembers = [
		{
			imgSrc: require("../assets/images/UseThis2.png").default,
			name: "Joshua Upshaw",
			designation: "9th dimension Artist",
			job: "Illustrating what he dreams, Joshua is an artistic marvel and we’re delighted he’s inducting us into untapped realms. Joshua most recently illustrated HULU’s upcoming MARVEL series ‘Hit Monkey.’"
		},
		{
			imgSrc: require("../assets/images/UseThis3.png").default,
			name: "Ferb",
			designation: "Cross dimensional Managing Director",
			job: "Creator of Machine Elves. Co-Creator & Co-Founder of LeapN. Ferb lives everywhere at once, ensuring the multiverse’s survival so Machine Elves can thrive in a stable, everevolving safe haven."
		},
		{
			imgSrc: require("../assets/images/UseThis.png").default,
			name: "Wicked Dig",
			designation: "Cross dimensional Managing Director & Lore Writer",
			job: "Co-Creator of Machine Elves. Co-Founder of LeapN. Wicked’s 12-month stint of exploring the implications a web3/blockchain/decentralized existence could garner on society – best case scenario – with defi gems in within the alt-coin, defi and NFT community will yield stunning renderings through visual teachings of these Machine Elves collectibles. Machine elves teach that the third dimension lower realms are centralized big tech data collection / ‘people are the product.’ – whereas the higher realms of the third dimension and beyond invite a new way to exist at a greater level of harmony and equal opportunity. "
		},
		{
			imgSrc: require("../assets/images/UseThis4.png").default,
			name: "Pico",
			designation: "5th dimensional Blockchain Lead Engineer",
			job: "Blockchain, Smart Contracts & Solidity. In this dimension and beyond!\n"
		},
		{
			imgSrc: require("../assets/images/Last1.png").default,
			name: "Duo",
			designation: "6th dimensional Marketing & Outreach",
			job: "Duo’s artistic essence, wisdom and longevity of the NFT space and cool, calm nature make him the most pleasant human people will tell you they’ve encountered. Is he secretly a machine elf? Probably…"
		},
		{
			imgSrc: require("../assets/images/Last2.png").default,
			name: "Friendly",
			designation: "7th dimensional Marketing & Outreach",
			job: "Friendly’s advisor level wisdom is invaluable. His energy is limitless. And he leaves everyone he talks to smiling. Friendly is an NFT COMMUNITY treasure. "
		},
		{
			imgSrc: require("../assets/images/Cephalopod_1.png").default,
			name: "Nicky",
			designation: "8th dimensional Discord Community Builder & Promotions",
			job: "Nicky is absolutely other dimensional, within the highest of realms. He churns out excellent work, seemingly effortlessly."
		}
	]
	
	return (
			<div id={"team"} className={"team text-white"}>
				<div className={"container h-100"}>
					<h1 className={"team--title text-center py-5"}>The Team</h1>
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