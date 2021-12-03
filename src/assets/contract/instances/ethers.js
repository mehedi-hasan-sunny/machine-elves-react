import { ethers } from 'ethers';

const metamaskProvider = window.ethereum;
const web3 = metamaskProvider
  ? new ethers.providers.Web3Provider(metamaskProvider)
  : new ethers.providers.WebSocketProvider(process.env.INFURA);
const signer = web3.getSigner();

const web3MainNet = metamaskProvider
  ? new ethers.providers.Web3Provider(metamaskProvider, {
    name: process.env.NETWORK_NAME,
    chainId: +process.env.NETWORK_ID,
  })
  : web3;

export {
  metamaskProvider,
  web3,
  signer,
  web3MainNet
};
