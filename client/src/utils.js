import Web3 from "web3";
import Wallet from './contracts/Wallet.json';

const getWeb3 = () => new Web3('http://127.0.0.1:9545');

const getWallet = async web3 => {
  const networkId = await web3.eth.net.getId();
  const contractDeployed = Wallet.networks[networkId];
  return new web3.eth.Contract(
    Wallet.abi,
    contractDeployed && contractDeployed.address
  );
};

export { getWeb3, getWallet };