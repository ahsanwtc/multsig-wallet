import React, { useEffect, useState } from 'react';

import './App.css';
import { getWeb3, getWallet } from './utils'

function App() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const web3 = getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);

      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
    };

    init();
  }, []);

  if (web3 === undefined || accounts === undefined || wallet === undefined) {
    return (
      <div className="App">Loading...</div>
    );
  }

  return (
    <div className="App">
      Multsig Dapp
    </div>
  );
}

export default App;

/**
 * Web3 and React issue
 * 
 * https://github.com/ChainSafe/web3.js#web3-and-create-react-app
 */
