import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/homePage';
import Booking from './pages/Booking';
import AdminPanel from './components/cms/AdminPanel';
import Login from './pages/Login';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;

