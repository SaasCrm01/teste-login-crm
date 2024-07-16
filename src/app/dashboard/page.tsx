// src/app/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import ClientRegistrationsChart from '../components/ClientRegistrationsChart';
import SellerRegistrationsChart from '../components/SellerRegistrationsChart';

export default function Dashboard() {
  const [clientCount, setClientCount] = useState<number | null>(null);
  const [sellerCount, setSellerCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchClientCount = async () => {
      try {
        const response = await fetch('/api/clients/count');
        const data = await response.json();
        setClientCount(data.count);
      } catch (error) {
        console.error('Error fetching client count:', error);
      }
    };

    const fetchSellerCount = async () => {
      try {
        const response = await fetch('/api/sellers/count');
        const data = await response.json();
        setSellerCount(data.count);
      } catch (error) {
        console.error('Error fetching seller count:', error);
      }
    };

    fetchClientCount();
    fetchSellerCount();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Número de Clientes</h5>
              <p className="card-text">{clientCount !== null ? clientCount : 'Carregando...'}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Número de Vendedores</h5>
              <p className="card-text">{sellerCount !== null ? sellerCount : 'Carregando...'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h5>Client Registrations by Day</h5>
          <ClientRegistrationsChart />
        </div>
        <div className="col-md-6">
          <h5>Seller Registrations by Day</h5>
          <SellerRegistrationsChart />
        </div>
      </div>
    </div>
  );
}
