// frontend/src/pages/Home.js
import React from 'react';
import AdminPanel from '../components/AdminPanel';
import PaymentForm from '../components/PaymentForm';

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to the Dashboard</h1>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <AdminPanel />
        </section>

        <section style={styles.section}>
          <PaymentForm />
        </section>
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
};

export default Home;
