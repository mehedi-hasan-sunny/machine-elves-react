import { ethers } from 'ethers';

const INFURA_ID = null;  // TODO set this if we needed to

const metamaskProvider = window.ethereum;
const web3 = metamaskProvider
  ? new ethers.providers.Web3Provider(metamaskProvider)
  : new ethers.providers.WebSocketProvider(INFURA_ID);
const signer = web3.getSigner();

const web3MainNet = metamaskProvider
  ? new ethers.providers.Web3Provider(metamaskProvider, {
    name: "mainnet",
    chainId: +1,
  })
  : web3;

export {
  metamaskProvider,
  web3,
  signer,
  web3MainNet
};
