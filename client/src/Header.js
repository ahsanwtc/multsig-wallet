import React from 'react';

const Header = ({ approvers, quorum }) => {
  return (
    <ul>
      <li>Approvers: {approvers.join(', ')}</li>
      <li>Quorum: {quorum}</li>
    </ul>
  );
};

export default Header;