import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column vh-100">
      <a className="navbar-brand mb-4" href="#">Crm 01</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse show" id="navbarNav">
        <ul className="navbar-nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" href="/register-client">Register Client</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/client-list">Client List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
