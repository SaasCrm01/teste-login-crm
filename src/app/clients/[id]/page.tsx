"use client";

import { useParams } from 'next/navigation';
import useSWR from 'swr';

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
  console.log("Client ID:", id); // Log para depuração

  const { data, error } = useSWR(id ? `/api/clients/${id}` : null, fetcher);

  console.log("Data:", data); // Log para depuração
  console.log("Error:", error); // Log para depuração

  if (error) return <div>Falha ao carregar os dados do cliente.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Telefone: {data.phone}</p>
      {/* Adicione mais detalhes conforme necessário */}
    </div>
  );
};

export default ClientDetails;
