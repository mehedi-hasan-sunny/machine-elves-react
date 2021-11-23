import {useState, useEffect} from 'react';
import {debounce} from '../utilities/helpers';
import "../assets/css/Navbar.css"
import NavLinks from "./NavLinks";

const Navbar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visibility, setVisibility] = useState(true);
	const [isHiddenOnMobile, setIsHiddenOnMobile] = useState(false);
	const [slider, setSlider] = useState(false);
	
	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;
		
		setVisibility(
				(prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70)
				|| currentScrollPos < 10
		);
		
		setPrevScrollPos(currentScrollPos);
	}, 100);
	
	const windowClick = debounce((e) => {
		if (!e.target.matches('slider') && slider) {
			setSlider(false);
		}
	}, 100)
	
	const openSlider = (e = null) => {
		if (e) {
			e.preventDefault();
		}
		setSlider(true);
	}
	
	const windowSize = () => {
		setIsHiddenOnMobile(window.innerWidth < 768)
		if (window.innerWidth >= 768 && slider) {
			setSlider(false)
		}
	}
	useEffect(() => {
		window.addEventListener('resize', windowSize);
		
	}, []);
	
	useEffect(() => {
		
		if (window.innerWidth < 768) {
			setIsHiddenOnMobile(true)
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
		
	}, [prevScrollPos, visibility, handleScroll]);
	useEffect(() => {
		if (slider && isHiddenOnMobile) {
			let links = document.querySelectorAll(".navbar__link");
			links.forEach((link) => {
				link.addEventListener("click", () => {
					setSlider(false);
				});
			});
			window.addEventListener('click', windowClick);
		}
		
		return () => window.removeEventListener('click', windowClick);
	}, [slider, isHiddenOnMobile, windowClick]);
	
	
	const navbarStyles = {
		position: 'fixed',
		height: '60px',
		width: '100%',
		backgroundColor: '#18191a',
		textAlign: 'center',
		transition: 'top 0.6s',
		zIndex: 99
	}
	
	return (
			<>
				<nav className={"navbar"} style={{...navbarStyles, top: visibility ? '0' : '-60px'}}>
					<a href="/" className={"navbar__brand"}>
						MACHINE ELVES
					</a>
					
					{
						!isHiddenOnMobile ? (<NavLinks/>) : (
								<a href="#" onClick={(event) => openSlider(event)}>
									<i className={"navbar__menu"}/>
								</a>
						)
					}
				
				</nav>
				
				<aside id="sidebar" className={slider ? 'show' : null}>
					<NavLinks isMobile={isHiddenOnMobile && slider}/>
				</aside>
			
			</>
	
	);
};

export default Navbar;