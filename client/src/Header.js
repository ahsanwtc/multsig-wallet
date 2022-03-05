import React from 'react';

const Header = ({ approvers, quorum, account }) => {
  return (
    <React.Fragment>
      <div>
        <span>Account: {account}</span>
      </div>
      <ul>
        <li>Approvers: {approvers.join(', ')}</li>
        <li>Quorum: {quorum}</li>
      </ul>
    </React.Fragment>
  );
};

export default Header;