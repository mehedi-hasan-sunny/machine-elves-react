import '../assets/css/Hero.css';
import React, {useEffect, useState} from "react";
import { ethers } from 'ethers';

import contractAbi from '../assets/contract/abi.json';

// apis
import ContractApi, { ConnectionType } from '../assets/contract/contract.api';
import { signer } from '../assets/contract/instances/ethers';
import AuthApi from '../assets/contract/auth.api';

async function contractErrorParser(transactionCall) {
  try {
    return await transactionCall();
  } catch (e) {

    console.log(e);

    let msg = '';
    if (e.data && e.data.message) {
      if(e.data.code && +e.data.code === -32000){
        msg = 'Insufficient funds for mint price + gas';
      }
      else{
        msg = e.data.message;
      }
    }
    else {
      if(e.code){
        if(+e.code === 4001){
          msg = 'Transaction cancelled';
        }
        else if(+e.error.code === -32000){
          msg = 'Insufficient funds for mint price + gas';
        }
      }
      else if(e.error != null && e.error.data != null && e.error.data.originalError != null){
        msg = e.error != null && e.error.data != null && e.error.data.originalError != null ? e.error.data.originalError.message : e.reason;
      }
      else if(e.error.message){
        msg = e.error.message;
      }
    }

    if (msg) {
      throw new Error(msg);
    } else {
      throw e;
    }
  }
}


const Hero = () => {
  const [provider, setProvider] = useState(null);
	const [connectedAddress, setConnectedAddress] = useState(null);
	const [onWhitelist, setOnWhitelist] = useState(false);
	const [allowMint, setAllowMint] = useState(false);
	const [ContractInstance, setContractInstance] = useState();
	const [ContractValues, setContractValues] = useState();
	const [contractApi, setContractApi] = useState();
	const [authApi, setAuthApi] = useState();
	const [signer, setSigner] = useState();
	const [mintingInProgress, setMintingInProgress] = useState();
	const [mintText, setMintText] = useState("Mint Now");
	const [mintStatusText, setMintStatusText] = useState();

	useEffect(() => {
		if(!provider && window.ethereum){
			setProvider(new ethers.providers.Web3Provider(window.ethereum));
		}
	}, []);

	useEffect(() => {
		if(provider){
			const connectButton = document.getElementById('btnConnect');
			connectButton.disabled = false;
			connectButton.textContent = 'Connect to Metamask';
			connectButton.classList = 'btn btn-connect btn-enabled';

			// also prep the contract
			if(!ContractInstance){
				setContractInstance(new ethers.Contract("0x240Ba10E17E3631109ed86432BF51DDc803cFB00", contractAbi, provider));
			}
		}else{
			// update UI would be nice
			setContractInstance(null);
		}
	}, [provider]);

	useEffect(() => {
		if(connectedAddress && ContractInstance){
			setContractApi(ContractApi(ContractInstance, connectedAddress));
		}else{
			setContractApi(null);
		}
	}, [connectedAddress, ContractInstance]);

	useEffect(() => {
		if(ContractInstance){
			setAuthApi(AuthApi(ContractInstance));
		}else{
			setAuthApi(null);
		}
	}, [ContractInstance]);

	useEffect(() => {
		if(contractApi){
			loadContractValues();
		}
	}, [contractApi]);

	useEffect(() => {
		if(ContractValues){

			updateMintingStateAndAvailability();
		}
	}, [ContractValues]);

	const connectMetamask = async () => {
		const metaSigner = await provider.getSigner();
		const address = await metaSigner.getAddress();
		setConnectedAddress(address);
		setSigner(metaSigner);
		setAllowMint(true);
	}

	const handleMint = async () => {
		if(!connectedAddress) return;

		const network = await provider.getNetwork();
		const chainId = parseInt(network.chainId, 16);
    const error = sessionCheck(chainId===1, connectedAddress, ConnectionType.Metamask);

    if (error) {
			alert(error);
			throw new Error(error);
    }

		const { isPresale, isSale, isClaim } = await updateMintingStateAndAvailability();
		setMintingInProgress(true);
		try{
			const txHash = await mint(isPresale,isSale,isClaim);
			setMintStatusText(`Transaction complete.  View it on&nbsp<a class=\"link-tx\" target=\"_blank\" onclick="window.open(this.href,'_blank');return false;" href=\"https://${process.env.ETHERSCAN_DOMAIN}.io/tx/${txHash}\">etherscan.io</a>`);
		}catch(e){
			updateMintStatus(e);
			throw e;
		}finally{
			setMintingInProgress(false);
			await updateMintingStateAndAvailability();
		}


	}

	const mint = async (isPresale, isSale, isClaim) => {
    if(!connectedAddress) return;

		const network = await provider.getNetwork();
		const chainId = parseInt(network.chainId, 16);
    const error = sessionCheck(chainId===1, connectedAddress, ConnectionType.Metamask);

    if (error) {
        alert(error);
        throw new Error(error);
    }

    const mintQuantity = +document.getElementById('qty').value;

    if(isClaim){
        return await contractErrorParser(async () => {
            return await contractApi.claimMint(
                ConnectionType.Metamask,
                connectedAddress
            );
        });
    }
    else if (isPresale && !isSale) {
			return await presaleMint(mintQuantity);
    } else if (isSale) {
			return await contractErrorParser(async () => {
				return await contractApi.publicMint(
					ConnectionType.Metamask,
					connectedAddress,
					mintQuantity,
					ContractValues.salePrice * mintQuantity,
				);
			});
    } else {
			throw new Error('Sale is not live');
    }
	}

	const sessionCheck = (isMainNet, address, provider) => {
		if (!provider) {
			return 'Please install metamask to use this app.';
		}

		if (!isMainNet) {
			return (
				`You are using the wrong network, please switch to ${process.env.NETWORK_NAME} and reload the page.`
			);
		}

		if (!address) {
			return 'Please connect your wallet to use this app.';
		}

		return null;
	}

	const presaleMint = async (mintCount) => {
		const mintedBefore = await contractApi.getMintedAmount(connectedAddress);
		const maxAmount = ContractValues.maxPresaleQty;
		const leftToMint = maxAmount - mintedBefore;

		if ((mintedBefore + mintCount) > maxAmount) {
			const changeCounterText = `Please change the quantity to ${leftToMint}${leftToMint > 1 ? ' or less' : ''} and try again.`;
			throw new Error(
					// eslint-disable-next-line max-len
					`Max per-wallet presale tokens is ${maxAmount}. You have already purchased ${mintedBefore}. ${leftToMint > 0 ? changeCounterText : ''
					}`,
			);
		}

		const { token, nonce } = await authWithToken(ConnectionType.Metamask, connectedAddress);

		if (token) {
			console.log('got token',token);
			const { hash, signature } = await authApi.getTransactionHash(token);

			return contractErrorParser(async () => {
				return await contractApi.presaleMint(
					ConnectionType.Metamask,
					connectedAddress,
					hash,
					signature,
					mintCount,
					nonce,
					ContractValues.salePrice * mintCount
				);
			});
		}
	}

	async function authWithToken(type, address) {
    let signature = null, nonce = null;
    try {
			console.log('get nonce for address',address);
			nonce = await authApi.getNonce(address);
			console.log('nonce',nonce);
    } catch (e) {
        throw new Error('You are not listed for presale');
    }

    try {
        const message = `I am signing my one-time nonce to prove that I am the owner of this address, required for presale minting: ${nonce}`;

        if (type === ConnectionType.Metamask) {
            signature = await signer.signMessage(message);
        } else {
            throw new Error('Not supported');
        }
    } catch (e) {
        throw new Error('User declined signature');
    }

    try {
        const { token } = await AuthApi.authUser(address, signature);
        return { token, nonce };
    } catch (e) {
        throw new Error('We couldn\'t validate your signature. For the optimal user experience, we suggest using a desktop or laptop with Google Chrome and a Metamask wallet.');
    }
	}

	async function loadContractValues() {
    const { maxSupply, salePrice, maxPublicSaleMintQty, maxPresaleQty } = await contractApi.getContractDefaults();

		setContractValues({
			maxSupply,
			maxPresaleQty,
			salePrice,
			maxPublicSaleMintQty
		});
	}

	const updateMintQtyMax = (isPresale, claimableQty) => {
    if (+claimableQty > 0) {
        document.getElementById('qty').max = claimableQty;
    }
    else {
        document.getElementById('qty').max = isPresale ? ContractValues.maxAlphaClaimQty : ContractValues.perMintQty;
    }
	}

	const updateMintingStateAndAvailability = async () => {
    const { isPresale, isSale, isClaim, totalSold } = await contractApi.getContractState();

    const mintingActive = isPresale || isSale || isClaim;
    const soldOut = totalSold === ContractValues.maxSupply;

    let presaleQuantity = 0;
    let claimableQty = +0;

    if (isPresale && connectedAddress) {
        const isOnWhitelist = await authApi.whitelisted(connectedAddress);
				setOnWhitelist(isOnWhitelist);

        if (isOnWhitelist) {
            presaleQuantity = await contractApi.getMintedAmount(connectedAddress);
        }
    }

    if (isClaim && connectedAddress) {
        claimableQty = await contractApi.getCanClaim(connectedAddress) ? 1 : 0;
    }

    const presaleSoldOut = +presaleQuantity >= ContractValues.maxAlphaClaimQty;

    if (!mintingActive || soldOut || presaleSoldOut || !connectedAddress || (isPresale && !onWhitelist) || (isClaim && +claimableQty === 0)) {
        disableMint(mintingActive, presaleSoldOut, false);
    }
    else {
        if (!mintingInProgress) {
            enableMint(isPresale, isSale, claimableQty);
        }
    }

    updateMintQtyMax(isPresale, claimableQty);
    
    updateMintStatus(isPresale, isClaim, 1, isPresale && onWhitelist ? presaleQuantity : (isClaim ? 1-claimableQty : totalSold));
		// empty (comments) method in source
    // updateDescription();

    return { isPresale, isSale, isClaim };
	}

	const updateMintStatus = (isPresale, isClaim, claimableQty, totalSold) => {
		let statusText = ''; 
    if(isClaim){
        statusText = `${totalSold} / ${claimableQty} eligible tokens claimed`;
    }
    else if (isPresale && onWhitelist) {
        statusText = `${totalSold} / ${ContractValues.maxAlphaClaimQty} eligible presale tokens minted`;
    }
    else {
        statusText = `${totalSold} / ${ContractValues.maxSupply} minted`;
    }
		setMintStatusText(statusText);
	}

	const disableMint = (mintingActive, presaleSoldOut, mintingInProgress) => {
    let reason = '';

    if (mintingInProgress) {
        reason = 'Minting';
    }
    else if (!connectedAddress) {
        reason = "Not Connected";
    }
    else if (!mintingActive || !onWhitelist) {
        reason = 'Minting is not Active';
    }
    else if (presaleSoldOut) {
        reason = 'All Eligible Tokens Minted';
    }
    else {
        reason = 'Sold Out!'
    }
		setMintText(reason);
    
    if (!mintingInProgress) {
        document.getElementById('qty').value = 1;
    }
		setAllowMint(false);
}

	const enableMint = (isPresale, isSale, claimableQty) => {
		if (+claimableQty > 0) {
			setMintText('Claim Now');
		}else if (isPresale && !isSale) {
			setMintText('Mint Now');
		}else {
			setMintText('Mint now');
		}
		setAllowMint(true);
	}

	return (
			<div className={"hero"}>
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
										{connectedAddress ? 
											<button className="btn btn-connect btn-disabled" id="btnConnect" disabled>{connectedAddress}</button>
										:
											<button className="btn btn-connect btn-enabled" id='btnConnect' onClick={connectMetamask}>Connect to Metamask
											</button>
										}
										</div>
										
										<div style={{flex: 1, padding: '10px 0'}}>
											<span id="mintCounts">{mintStatusText}</span>
											<span>
											<div className={"d-flex align-items-center"}>
												<input className="mint-input" id='qty' type="number" min="1"
												       max="10" defaultValue="1"/>
												{ allowMint ? 
													<button className="btn btn-mint btn-enabled" id='btnMint' onClick={handleMint}>{mintText}</button>
												:
													<button className="btn btn-mint btn-disabled" disabled id='btnMint'>{mintText}</button>
												}
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
