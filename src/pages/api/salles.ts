// src/app/api/sales.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const sales = await prisma.sale.findMany();
      res.status(200).json(sales);
    } catch (error) {
      console.error('Error fetching sales:', error);
      res.status(500).json({ error: 'Error fetching sales' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
