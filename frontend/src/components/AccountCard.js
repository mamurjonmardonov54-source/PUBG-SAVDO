import React from 'react';

const AccountCard = ({ account }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{account.title}</h3>
      <p>Level: {account.level} | UC: {account.UC}</p>
      <p>Price: {account.price} UZS</p>
      <button>Buy</button>
    </div>
  );
};

export default AccountCard;
