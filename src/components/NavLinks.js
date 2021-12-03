import React from 'react';
import PropTypes from 'prop-types';


const NavLinks = ({isMobile}) => {
	return (
			<div className={`navbar__links`} data-aos={isMobile ? "slide-left" : ''}>
				<a href="#about" className={"navbar__link"}>About</a>
				<a href="#trait" className={"navbar__link"}>Trait</a>
				<a href="#roadmap" className={"navbar__link"}>Roadmap</a>
				<a href="#mint" className={"navbar__link"}>Mint</a>
				<a href="#team" className={"navbar__link"}>Team</a>
			</div>
	);
}
NavLinks.propTypes = {
	isMobile: PropTypes.bool
};

export default NavLinks;