import '../assets/css/Rarity.css';

function Rarity(props) {
	return (
			<div id={"trait"} className={"rarity"}>
				<div className={"rarity__container"}>
					<h1 className={"rarity__title mb-4"}>Traits & Price Point</h1>
					<p className={"rarity__description"}>
						Machine Elves are computer generated from 200+ hand drawn traits, each Machine Elf consists of between 4-7
						combined traits, of various rarities.
						
						<br/>
						<br/>
						Each Machine Elf is 0.08 per mint. There is no bond curve.
					</p>
				</div>
			</div>
	);
}

export default Rarity;