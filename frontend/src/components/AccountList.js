import React, { useEffect, useState } from 'react';
import API from '../services/api';
import AccountCard from './AccountCard';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  
  useEffect(() => {
    API.get('/accounts').then(res => setAccounts(res.data));
  }, []);

  return (
    <div>
      {accounts.map(account => <AccountCard key={account._id} account={account} />)}
    </div>
  );
};

export default AccountList;
