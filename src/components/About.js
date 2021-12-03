import '../assets/css/About.css';
import {useEffect} from "react";

const About = () => {
	useEffect(() => {
		window.addEventListener('scroll', function () {
			let main = document.documentElement.scrollTop;
			let heroHeight = document.querySelector(".hero").clientHeight;
			let opacity = 0;
			if (main > heroHeight) {
				opacity = (main / heroHeight) - 1.205;
				if (opacity > 1) {
					opacity = 1
				} else if (opacity < 0) {
					opacity = 0
				}
			}
			document.querySelector('.about__container-bg').style.opacity = opacity;
			
		});
	}, [])
	return (
			<div className={"about"}>
				<div id={"about"} className={"about__container text-white"}>
					<div className={"about__container-bg"}/>
					<div
							className={"about__wrapper d-flex flex-column justify-content-center align-items-start align-items-sm-center py-5"}>
						<h1 className={"about__title mb-4"}>ENTER MACHINE ELVES</h1>
						<p className={"about__description"}>
							<strong>History’s astrophysicist</strong> greats, Carl Sagan & Neil DeGrasse Tyson have given
							synonymous takes on
							higher dimensional objects and how they work. If a <strong>fourth dimensional</strong> object were to
							descend into the
							third dimension, a human sees only a sliver of the object. Just the ‘tip’ of the larger iceberg so to
							speak. <strong>Enter ‘interpretation.’</strong> One human may inherently perceive this 'sliver' as a
							non-happening and repress the sight of the object appearing and vanishing instantly from memory. Whilst a
							separate person may perceive the moment for what it could be with no need of ‘proof.’ ‘Astrophysical
							principle’ minded pioneers (ETH maxies & Machine Elf hodlers) ascend above narrow minded people
							(Cardano-curious crypto skeptics; usually sweaty and smelly) who plead the ‘scientific method’ at every
							turn til’ their respective government or employer permits them to believe new possibilities.
						
						</p>
						<p className={"about__description"}>
							<strong>Machine Elves</strong> are here to balloon holders up to <strong>higher dimensions</strong> to see
							all. A glance behind the Wizard’s
							curtain. For once the veil is lifted – the illusionist smirks uncomfortably. Shuffles back into the
							shadows to pause and plot in a fury.
						</p>
						<p className={"about__description"}>
							The Machine Elves show how to abandon centralized systems in favor of equal footing. As these green
							pastures are <strong>advantageous</strong> to all; not only the select few.
						</p>
					</div>
				</div>
			</div>
	);
}

export default About;