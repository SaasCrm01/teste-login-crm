// src/app/clients/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';
import 'bootstrap/dist/css/bootstrap.min.css';

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
};

const ClientDetails = () => {
  const params = useParams();
  const id = params?.id;
  console.log("Client ID:", id);

  const { data, error } = useSWR(id ? `/api/clients/${id}` : null, fetcher);

  if (error) return <div>Falha ao carregar os dados do cliente.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="container mt-5">
      <h1>Detalhes do Cliente</h1>
      <table className="table table-responsive table-striped">
        <tbody>
          <tr>
            <th>Nome</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{data.email}</td>
          </tr>
          <tr>
            <th>Telefone</th>
            <td>{data.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClientDetails;
