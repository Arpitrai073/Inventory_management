import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; // 👈 Import the new page
import InventoryPage from './pages/InventoryPage';
import AddProductPage from './pages/AddProductPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> {/* 👈 Add the new route */}
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<InventoryPage />} />
              <Route path="/add-product" element={<AddProductPage />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;