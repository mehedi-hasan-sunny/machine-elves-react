import '../assets/css/Footer.css';

const Footer = () => {
	
	return (
			<div className={"footer text-center py-5"}>
				<a target="_blank" data-aid="SOCIAL_TWITTER_LINK"
				   rel="noreferrer"
				   aria-label="Twitter Social Link" href="https://www.twitter.com/MachineElvesNFT" data-typography="LinkAlpha"
				   className="mb-3 d-inline-block text-white"
				   data-tccl="ux2.SOCIAL.social1.Section.Default.Link.Default.60839.click,click">
					<img src="/Twitter_bird_logo.svg" alt="Twitter logo" width={"50px"}/>
				</a>
				<h4 className={"mb-0 text-white"}>
					Copyright © 2021 Machine Elves NFTs - All Rights Reserved.
				</h4>
			</div>
	);
}

export default Footer;