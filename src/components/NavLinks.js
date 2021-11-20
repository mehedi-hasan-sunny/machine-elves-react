import React from 'react';
import PropTypes from 'prop-types';


const NavLinks = ({isMobile}) => {
	return (
			<div className={`navbar--links`} data-aos={isMobile ? "slide-left" : ''}>
				<a href="#about" className={"navbar--link"}>About</a>
				<a href="#rarity" className={"navbar--link"}>Rarity</a>
				<a href="#roadmap" className={"navbar--link"}>Roadmap</a>
				<a href="#mint" className={"navbar--link"}>Mint</a>
				<a href="#team" className={"navbar--link"}>Team</a>
			</div>
	);
}
NavLinks.propTypes = {
	isMobile: PropTypes.bool
};

export default NavLinks;