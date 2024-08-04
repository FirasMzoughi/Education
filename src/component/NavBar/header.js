import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png'; // Ensure the logo image is correctly placed

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="WalidAcademy Logo" />
      </div>
      <nav className="nav-links">
        <Link to="/">الرئيسية</Link>
        <Link to="/about">من نحن؟</Link>
        <Link to="/platform">المنصة</Link>
        <Link to="/content">محتوانا</Link>
        <Link to="/offers">عروضنا</Link>
      </nav>
      <div className="actions">
        <Link to="/login" className="login">تسجيل الدخول</Link>
        <Link to="/register" className="signup">سجل مجانا</Link>
      </div>
    </header>
  );
};

export default Header;
