const Wallet = artifacts.require('Wallet');
const QUORUM = 2;

contract('Wallet', accounts => {
  let wallet;
  

  beforeEach(async () => {
    wallet = await Wallet.new([accounts[0], accounts[1], accounts[2]], QUORUM);
    await web3.eth.sendTransaction({ from: accounts[0], to: wallet.address, value: 1000 });
  });

  it('should have correct approvers and quorum', async () => {
    const approvers = await wallet.getApprovers();
    const quorum = await wallet.quorum();
    assert(approvers.length === 3);
    assert(approvers[0] === accounts[0]);
    assert(approvers[1] === accounts[1]);
    assert(approvers[2] === accounts[2]);
    assert(quorum.toNumber() === QUORUM);
  });

  it ('shoud create transfers', async () => {
    const amount = 100, to = accounts[5], fromAddress = accounts[0];

    await wallet.createTransfer(amount, to, { from: fromAddress });
    const transfers = await wallet.getTransfers();
    assert(transfers.length === 1);
    /**
     * * ints in struct are wrapped with string rather than big number
     */
    assert(transfers[0].id === '0');
    assert(transfers[0].amount === `${amount}`);
    assert(transfers[0].to === to);
    assert(transfers[0].approvals === '0');
    assert(transfers[0].sent === false);
  });

});