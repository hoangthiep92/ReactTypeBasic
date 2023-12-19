import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import Footer from './layouts/Footer';
import CreatePizzaPage from './pages/createPizzaPage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <CreatePizzaPage /> */}
      <Footer />
    </div>
  );
}

export default App;
