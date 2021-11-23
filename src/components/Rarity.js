import '../assets/css/Rarity.css';

function Rarity(props) {
	return (
			<div id={"rarity"} className={"rarity"}>
				<div className={"rarity--container"}>
					<h1 className={"rarity--title mb-4"}>Rarity</h1>
					<p className={"rarity--description"}>
						Machine Elves are computer generated from 200+ hand drawn traits, each Machine Elf consists of between 4-7
						combined traits, of various rarities.
						<br/>
						<br/>
						The possibilities are endless, just like yours once you ascend up and away from this noisy third dimension.
					</p>
					<h3 className="mb-2">BEING</h3>
					<p className={"rarity--description"}>
						4th-6th dimension:
						<br/>
						2D avatar: <strong>0.08 eth</strong>
					</p>
					<h3 className="mb-2">GUIDE</h3>
					<p className={"rarity--description"}>
						5th-7th dimension:
						<br/>
						2D avatar + 3D avatar: <strong>0.16 eth</strong>
					</p>
					<h3 className="mb-2">ARBITER</h3>
					<p className={"rarity--description"}>
						6th-8th dimension:
						<br/>
						2D avatar + 3D avatar + AR/Facial mapping : <strong>0.21 eth</strong>
						
						<div className="row mt-4">
							<div className="col-4">
								<div className={"d-flex align-items-center justify-space-between w-100"}>
									<strong>4th dimension</strong> <i className="gg-chevron-right ms-3 ms-md-auto me-0 me-md-3"/>
								</div>
								<br/>
								Common
							</div>
							<div className="col-4">
								<div className={"d-flex align-items-center justify-space-between w-100"}>
									<strong>7th dimension</strong> <i className="gg-chevron-right ms-3 ms-md-auto me-0 me-md-3"/>
								</div>
								<br/>
								Rare
							</div>
							<div className="col-4">
								<strong>8th dimension</strong>
								<br/>
								<br/>
								Legendary
							</div>
						</div>
					</p>
				</div>
			</div>
	);
}

export default Rarity;