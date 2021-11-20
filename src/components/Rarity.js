import '../assets/css/Rarity.css';

function Rarity(props) {
	return (
			<div id={"rarity"} className={"rarity"}>
				<div className={"rarity--container"}>
					<h1 className={"rarity--title mb-4"}>Rarity</h1>
					<p className={"rarity--description"}>
						Machine Elves are computer generated from 200+ hand drawn traits, each Machine Elf consists of between 4-7 combined traits, of various rarities.
						<br/>
						<br/>
						The possibilities are endless, just like yours once you ascend up and away from this noisy third dimension.
					</p>
					<h3 className="mb-2">HIGH DIMENSION</h3>
					<p className={"rarity--description"}>
						4th-6th dimension: .1
						<br/>
						2D avatar. To ‘Journey up’ at a later time for a 3D LeapN version will cost .12 ETH (3d avatar only) and .18 (3D avatar + AR w/ face mapping)
					</p>
					<h3 className="mb-2">WOW DIMENSION</h3>
					<p className={"rarity--description"}>
						5th-7th dimension: .2
						<br/>
						2D avatar + 3D avatar
					</p>
					<h3 className="mb-2">HOLY DIMENSION</h3>
					<p className={"rarity--description"}>
						6th-8th dimension: .25
						<br/>
						2D avatar + 3D avatar + AR w/ face mapping
					</p>
					<p className={"rarity--description"}>
						4th dimension–> 7th dimension  ->  8th dimension
						<br/>
						Common   ->          rare           ->      legendary
					</p>
				</div>
			</div>
	);
}

export default Rarity;