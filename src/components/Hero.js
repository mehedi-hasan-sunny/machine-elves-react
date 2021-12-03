import '../assets/css/Hero.css';
import React, {useEffect, useState} from "react";
import { ethers } from 'ethers';

// abis
import contractAbi from '../assets/contract/abi.json';

// instances
import { web3MainNet } from '../assets/contract/instances/ethers';
import http from '../assets/contract/instances/http';

// apis
// import ContractApi from '../assets/contract/contract.api';
// import AuthApi from '../assets/contract/auth.api';

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
				const address = await provider.getSigner().getAddress();
				await handleConnect(address);
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

// adding things to prevent loading timing issues
export const ConnectionType = {
  // WalletConnect: 'WalletConnect',
  Metamask: 'Metamask',
};

const ContractApi = {
  async getTokensOfOwner(owner) {
    const res = await contractInstance.tokensOfOwner(owner);
    return res.map(String)
  },
  async getPricePerNFT() {
    const res = await contractInstance.SALE_PRICE();
    return res.toString();
  },
  async getPresaleLive() {
    return await contractInstance.presaleMintActive();
  },
  async getSaleLive() {
    return await contractInstance.publicMintActive();
  },
  async getClaimLive(){
    return await contractInstance.foundersDeedClaimActive();
  },
  async getTotalSold() {
    return await contractInstance.totalSupply();
  },
  async getMaxQuantity() {
    return await contractInstance.MAX_SUPPLY();
  },
  async getMaxPresaleMintQty(){
    return await contractInstance.MAX_PER_PRESALE_PURCHASE();
  },
  async getPublicSalePerTxMax() {
    return await contractInstance.MAX_PER_PURCHASE();
  },
  async getCanClaim(address){
    return await contractInstance.canClaim(address);
  },
  async getContractState() {
    const presalePromise = this.getPresaleLive();
    const salePromise = this.getSaleLive();
    const claimPromise = this.getClaimLive();
    const totalSoldPromise = this.getTotalSold();

    const [isPresale, isSale, isClaim, totalSold] = await Promise.all([presalePromise, salePromise, claimPromise, totalSoldPromise]);
    return { isPresale, isSale, isClaim, totalSold };
  },
  async getContractDefaults() {
    const maxSupplyPromise = this.getMaxQuantity();
    const salePricePromise = this.getPricePerNFT();
    const maxPublicSaleMintQtyPromise = this.getPublicSalePerTxMax();
    const maxPresaleQtyPromise = this.getMaxPresaleMintQty();

    const [
      maxSupply,
      salePrice,
      maxPublicSaleMintQty,
      maxPresaleQty
    ] = await Promise.all([
      maxSupplyPromise,
      salePricePromise,
      maxPublicSaleMintQtyPromise,
      maxPresaleQtyPromise
    ]);

    return { maxSupply, salePrice, maxPublicSaleMintQty, maxPresaleQty };
  },
  async getMintedAmount(address) {
    const res = await contractInstance.balanceOf(address);
    return +res;
  },
  async requestWithSigner(
    connectionType,
    buyerAddress,
    functionName,
    params = [],
    price = 0,
    waitReceipt = false,
  ) {

    if (connectionType === ConnectionType.Metamask) {
      return this.requestWithSignerMetamask(functionName, params, price, waitReceipt);
    } else if (connectionType === ConnectionType.WalletConnect) {
      return this.requestWithSignerWalletConnect(buyerAddress, functionName, params, price, waitReceipt);
    }
  },
  async requestWithSignerMetamask(functionName, params, price, waitReceipt) {
    const contract = contractInstanceWithSigner;
    const override = {};

    if (price) {
      override.value = price.toString();

      const estimatedGas = await contract.estimateGas[functionName](...params, override);
      override.gasLimit = Math.round(estimatedGas * 1.75);
    }

    const tx = await contract[functionName](...params, override);

    if (waitReceipt) {
      await tx.wait();
    }

    return tx.hash;
  },

  async presaleMint(connectionType, buyerAddress, hash, sig, qty, nonce, price) {
    return await this.requestWithSigner(
      connectionType,
      buyerAddress,
      'presaleMint',
      [hash, sig, nonce, qty],
      price,
      true
    )
  },
  async publicMint(connectionType, buyerAddress, qty, price) {
    return await this.requestWithSigner(
      connectionType,
      buyerAddress,
      'mint',
      [qty],
      price,
      true
    )
  },
  async claimMint(connectionType, buyerAddress) {
    return await this.requestWithSigner(
      connectionType,
      buyerAddress,
      'foundersDeedClaim',
      [],
      0,
      true
    )
  },
};


// const contractInstance = new ethers.Contract(process.env.CONTRACT_ADDRESS, contractAbi, web3MainNet);
// prod
const contractInstance = new ethers.Contract(0x240Ba10E17E3631109ed86432BF51DDc803cFB00, contractAbi, web3MainNet);
const contractInstanceWithSigner = contractInstance.connect(signer);
const contractInterface = new ethers.utils.Interface(contractAbi);

const AuthApi = {
  async whitelisted(publicAddress) {
    const res = await http.get(`/auth/whitelist/${contractInstance.address}/${publicAddress}`);
    return res.data;
  },
  async getNonce(publicAddress) {
    const res = await http.get(`/auth/nonce/${contractInstance.address}/${publicAddress}`);
    return res.data;
  },
  async authUser(publicAddress, signature) {
    const res = await http.get(`/auth/verify-signature/${contractInstance.address}/${publicAddress}/${signature}`);
    return res.data;
  },
  async getTransactionHash(token) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const res = await http.get('/transaction/hash', { headers });
    return res.data;
  },
};

export default Hero;
