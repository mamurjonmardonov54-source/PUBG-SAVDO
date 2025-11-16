// frontend/src/pages/AccountDetail.js
import React, { useState, useEffect } from 'react';

const AccountDetail = () => {
  const [account, setAccount] = useState({
    username: 'JohnDoe',
    email: 'john@example.com',
    role: 'User',
    balance: 100,
  });

  // Masalan, backenddan account ma'lumotini olish
  useEffect(() => {
    // fetch('/api/account')
    //   .then(res => res.json())
    //   .then(data => setAccount(data));
    console.log('Account data loaded');
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Account Details</h2>
      <div style={styles.card}>
        <p><strong>Username:</strong> {account.username}</p>
        <p><strong>Email:</strong> {account.email}</p>
        <p><strong>Role:</strong> {account.role}</p>
        <p><strong>Balance:</strong> ${account.balance}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#007bff',
  },
  card: {
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
};

export default AccountDetail;
