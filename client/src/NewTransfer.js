import React, { useState } from 'react';

const NewTransfer = ({ createTransfer }) => {

  const [transfer, setTransfer] = useState(undefined);

  const submit = async e => {
    e.preventDefault();
    await createTransfer(transfer);
  };

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({ ...transfer, [field]: value });
  };

  return (
    <div>
      <h2>Create Transfer</h2>
      <form onSubmit={submit}>
        <label htmlFor='amount'>Amount</label>
        <input id='amount' type='text' onChange={e => updateTransfer(e, 'amount')} />

        <label htmlFor='to'>To</label>
        <input id='to' type='text' onChange={e => updateTransfer(e, 'to')} />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewTransfer;