// instances
// import {
//   contractInstance,
//   contractInstanceWithSigner,
// } from './instances/contract';

// import { ConnectionType } from '../index';
export const ConnectionType = {
  // WalletConnect: 'WalletConnect',
  Metamask: 'Metamask',
};

const ContractApi = (contractInstance, signer )=> {
  console.log('config contract api',signer);
  const contractInstanceWithSigner = contractInstance.connect(signer);

  return {
    contractInstanceWithSigner,
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
      overrideSigner?
    ) {
      if (connectionType === ConnectionType.Metamask) {
        if(overrideSigner){
          return this.requestWithSignerMetamask(functionName, params, price, waitReceipt,overrideSigner);
        }else{
          return this.requestWithSignerMetamask(functionName, params, price, waitReceipt);
        }
      } else if (connectionType === ConnectionType.WalletConnect) {
        return this.requestWithSignerWalletConnect(buyerAddress, functionName, params, price, waitReceipt);
      }
    },
    async requestWithSignerMetamask(functionName, params, price, waitReceipt, overrideSigner?) {
      let contract = contractInstanceWithSigner;
      if(overrideSigner){
        contract = contractInstance.connect(overrideSigner);
      }
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
    async publicMint(connectionType, buyerAddress, qty, price, localSigner) {
      console.log('instance',this.contractInstanceWithSigner);
      console.log('pm local signer',localSigner);
      return await this.requestWithSigner(
        connectionType,
        buyerAddress,
        'mint',
        [qty],
        price,
        true,
        localSigner
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
  }
};

export default ContractApi;
