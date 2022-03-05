import React from 'react';

const TransferList = ({ transfers, approveTransfer, approvals }) => {

  const disableButton = transferId => {
    if (!approvals.hasOwnProperty(transferId)) {
      return false;
    }

    return approvals[transferId];

  };

  return (
    <div>
      <h2>Transfers</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>To</th>
            <th>Approvals</th>
            <th>Sent</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map(transfer => (
            <tr key={transfer.id}>
              <td>{transfer.id}</td>
              <td>{transfer.amount}</td>
              <td>{transfer.to}</td>
              <td>
                {transfer.approvals}
                <button disabled={disableButton(transfer.id)} onClick={async () => await approveTransfer(transfer.id)}>Approve</button>
              </td>
              <td>{transfer.sent ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransferList;