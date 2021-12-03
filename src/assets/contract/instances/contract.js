import { ethers } from 'ethers';

// abis
import contractAbi from '../abi.json';

// instances
import { signer, web3MainNet } from './ethers';

// const contractInstance = new ethers.Contract(process.env.CONTRACT_ADDRESS, contractAbi, web3MainNet);
// prod
const contractInstance = new ethers.Contract(0x240Ba10E17E3631109ed86432BF51DDc803cFB00, contractAbi, web3MainNet);
const contractInstanceWithSigner = contractInstance.connect(signer);
const contractInterface = new ethers.utils.Interface(contractAbi);

export {
  contractInstance,
  contractInstanceWithSigner,
  contractInterface,
};
