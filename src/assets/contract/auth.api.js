import http from './instances/http';
// import { contractInstance } from './instances/contract';

const AuthApi = (contractInstance) => {
  return {
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
  }
};

export default AuthApi;
