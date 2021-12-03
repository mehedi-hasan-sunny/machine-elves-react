import '../assets/css/Hero.css';
import React, {useEffect, useState} from "react";
import { ethers } from 'ethers';

// apis
import ContractApi from '../assets/contract/contract.api';
import AuthApi from '../assets/contract/auth.api';

const Hero = () => {
  const [provider, setProvider] = useState(null);
	const [allowConnect, setAllowConnect] = useState(true);
	const [connectedAddress, setConnectedAddress] = useState("");
	const [onWhitelist, setOnWhitelist] = useState(false);

	useEffect(() => {
		// const script = document.createElement('script');
		// script.src = 'bundle.js';
		// // script.defer = true;
		// document.body.appendChild(script);
		// return () => {
		// 	document.body.removeChild(script);
		// };
		if(!provider && window.ethereum){
			setProvider(new ethers.providers.Web3Provider(window.ethereum));
		}
	}, []);

	const connectMetamask = async () => {
		if(!allowConnect) return;
		console.log('check provider',provider);
		if (!provider) {
			throw new Error('Please install metamask to use this app.');
		}
		setAllowConnect(false);
		try {
			console.log('getting accounts');
			const accounts = await provider.listAccounts();
			console.log('accounts',accounts);
			const selectedAccount = accounts[0];

			// const address = await provider.getSigner().getAddress();
			await handleConnect(selectedAccount);
		}
		catch (e) {
				setAllowConnect(true);
				console.error(e);
		}
	}

	const handleConnect = async (address) => {
		if(address){
			await changeAddress(address);
			setAllowConnect(false);
			setConnectedAddress(address);
		}else{
			setAllowConnect(true);
		}
		await updateMintingStateAndAvailability();
	}

	const changeAddress = async (address) => {
		// session.address = address;
		setConnectedAddress(address);

    if (address) {
        const { isPresale } = await ContractApi.getContractState();

        if (isPresale) {
            // session.isOnWhitelist = await AuthApi.whitelisted(address);
						setOnWhitelist(await AuthApi.whitelisted(address));
        }
    }
	}

	const updateMintingStateAndAvailability = async () => {
		const { isPresale, isSale, isClaim, totalSold } = await ContractApi.getContractState();

    const mintingActive = isPresale || isSale || isClaim;
    const soldOut = totalSold === session.maxSupply;

    let presaleQuantity = 0;
    let claimableQty = +0;

    if (isPresale && session.address) {
        session.isOnWhitelist = await AuthApi.whitelisted(session.address);

        if (session.isOnWhitelist) {
            presaleQuantity = await ContractApi.getMintedAmount(session.address);
        }
    }

    if (isClaim && session.address) {
        claimableQty = await ContractApi.getCanClaim(session.address) ? 1 : 0;
    }

    const presaleSoldOut = +presaleQuantity >= session.maxAlphaClaimQty;

    if (!mintingActive || soldOut || presaleSoldOut || !session.address || (isPresale && !session.isOnWhitelist) || (isClaim && +claimableQty == 0)) {
        disableMint(mintingActive, presaleSoldOut, false);
    }
    else {
        if (!session.mintingInProgress) {
            enableMint(isPresale, isSale, claimableQty);
        }
    }

    updateMintQtyMax(isPresale, claimableQty);
    
    updateMintStatus(isPresale, isClaim, 1, isPresale && session.isOnWhitelist ? presaleQuantity : (isClaim ? 1-claimableQty : totalSold));
    updateDescription();

    return { isPresale, isSale, isClaim };
	}

	return (
			<div className={"hero"}>
				{/*<picture>*/}
				{/*	<source media="(min-width:650px)" srcSet="../assets/images/Landingpage.png"/>*/}
				{/*	<source media="(min-width:465px)" srcSet="../assets/images/Landingpage.png"/>*/}
				{/*	<img className="hero-img" src={require("../assets/images/Landingpage.png").default} alt="Machine Elves hero image"/>*/}
				{/*</picture>*/}
				<div className="row mx-0">
					<div className="col-12 col-md-6 col-lg-7 order-2 order-md-1 position-relative">
						<img className="hero__img img-fluid"
						     src={require("../assets/images/Machine_Elves_NFT_For_Adam_3.png").default}
						     alt="Machine Elves hero 1" loading={"lazy"}/>
						<img className="hero__img img-fluid"
						     src={require("../assets/images/Machine_Elves_NFT_For_Adam_1.png").default}
						     alt="Machine Elves hero 2" loading={"lazy"}/>
						<img className="hero__img img-fluid"
						     src={require("../assets/images/Machine_Elves_NFT_For_Adam_2.png").default}
						     alt="Machine Elves hero 3" loading={"lazy"}/>
					</div>
					<div className="col-12 col-md-6 col-lg-5 order-1 order-md-2">
						<div className={"hero__container d-flex flex-column justify-content-center"}>
							<h2 className={"hero__title"} data-aos-delay="50" data-aos="zoom-in-down">
								What are the Machine Elves?
							</h2>
							<p className={"hero__description"} data-aos-delay="250" data-aos="zoom-in-down">
								Illustrated by <strong>Jups</strong> (Past clients: <strong>Marvel and Sony Animation</strong>)
							</p>
							<p className={"hero__description"} data-aos-delay="400" data-aos="zoom-in-down">
								<strong>Machine Elves</strong> are self-transforming <strong>cross-dimensional entities</strong> of the
								fourth dimension and on - these
								manically happy creatures communicate via visual sound waves that pour out of their mouths like shiny
								rainbow cartoon captions. People can't hear them with their ears - they see the waves with their as the
								elves unlock the human recipient’s JUNK DNA, which unlock <strong>metaversal</strong> insights that
								ascend all to web3 enlightenment.
							</p>
							<div data-aos-delay="500" data-aos="zoom-in-down">
								<div className="flex-container">
									<div style={{flex: 1}}>
										<div style={{flex: 1, padding: '10px 0'}}>
											<button className="btn btn-connect btn-enabled" id='btnConnect' onClick={connectMetamask}>Connect to Metamask
											</button>
										</div>
										
										<div style={{flex: 1, padding: '10px 0'}}>
											<span id="mintCounts"/>
											<span>
											<div className={"d-flex align-items-center"}>
												<input className="mint-input" id='qty' type="number" min="1"
												       max="10" defaultValue="1"/>
												<button className="btn btn-mint btn-disabled" disabled id='btnMint'>Mint Now</button>
											</div>
											<div style={{paddingTop: '5px'}}>
												<span id="mintingStatus"/>
											</div>
											</span>
										</div>
										<div style={{flex: 1, padding: '10px'}}>
											<span id="contractLink"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</div>
	);
}

export default Hero;
