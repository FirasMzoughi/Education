import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png'; // Ensure the logo image is correctly placed

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="WalidAcademy Logo" />
      </div>
      <nav className="nav-links">
        <a href="#home">الرئيسية</a>
        <a href="#about">من نحن؟</a>
        <a href="#platform">المنصة</a>
        <a href="#content">محتوانا</a>
        <a href="#offers">عروضنا</a>
      </nav>
      <div className="actions">
        <Link to="/login" className="login">تسجيل الدخول</Link>
        <Link to="/register" className="signup">سجل مجانا</Link>
      </div>
    </header>
  );
}

export default Header;
