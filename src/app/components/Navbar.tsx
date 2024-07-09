// src/app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import React from 'react';
import './Navbar.css'; // Importa o CSS da navbar

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column vh-100 position-fixed">
      <div className="container-fluid d-flex flex-column">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand text-blue-500 hover:text-blue-700">Crm 01</a>
        </Link>
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <Link href="/register-client" legacyBehavior>
                <a className="nav-link text-blue-500 hover:text-blue-700">Cadastrar Cliente</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register-seller" legacyBehavior>
                <a className="nav-link text-blue-500 hover:text-blue-700">Cadastrar Vendedor</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/clients" legacyBehavior>
                <a className="nav-link text-blue-500 hover:text-blue-700">Clientes</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/sellers" legacyBehavior>
                <a className="nav-link text-blue-500 hover:text-blue-700">Vendedores</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
