// frontend/src/components/PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    method: '',
    userId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend API ga yuborish joyi
    console.log('Payment Data Submitted:', paymentData);

    // Formani tozalash
    setPaymentData({
      amount: '',
      method: '',
      userId: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={paymentData.amount}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Payment Method:</label>
          <select
            name="method"
            value={paymentData.method}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">Select Method</option>
            <option value="card">Card</option>
            <option value="paypal">PayPal</option>
            <option value="crypto">Crypto</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={paymentData.userId}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Submit Payment</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default PaymentForm;
