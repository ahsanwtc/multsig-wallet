const Wallet = artifacts.require('Wallet');

contract('Wallet', (accounts) => {
  let wallet;
  const quorum = 2;

  beforeEach(async () => {
    wallet = await Wallet.new([accounts[0], accounts[1], accounts[2], quorum]);
    await web3.eth.sendTransaction({ from: accounts[0], to: wallet.address, value: 1000 });
  });
});