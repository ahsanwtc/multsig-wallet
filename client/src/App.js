import React, { useEffect, useState } from 'react';

import './App.css';
import { getWeb3, getWallet } from './utils'
import Header from './Header';

function App() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState(undefined);
  const [quorum, setQuorum] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const web3 = getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();

      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
    };

    init();
  }, []);

  if (web3 === undefined || accounts === undefined || wallet === undefined || approvers === undefined || quorum === undefined) {
    return (
      <div className="App">Loading...</div>
    );
  }

  return (
    <div className="App">
      Multsig Dapp
      <Header approvers={approvers} quorum={quorum}/>
    </div>
  );
}

export default App;

/**
 * Web3 and React issue
 * 
 * https://github.com/ChainSafe/web3.js#web3-and-create-react-app
 */
