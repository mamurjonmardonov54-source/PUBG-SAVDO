// frontend/src/pages/Dashboard.js
import React from 'react';
import AdminPanel from '../components/AdminPanel';
import PaymentForm from '../components/PaymentForm';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Dashboard</h1>
        <p>Manage users and payments from here</p>
      </header>

      <main style={styles.main}>
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>User Management</h2>
          <AdminPanel />
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>Payments</h2>
          <PaymentForm />
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  section: {
    width: '100%',
    maxWidth: '450px',
    marginBottom: '30px',
  },
  sectionHeading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '15px',
  },
};

export default Dashboard;
