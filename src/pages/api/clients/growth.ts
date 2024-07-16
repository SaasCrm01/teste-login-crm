// src/app/api/clients/growth.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const growth = await prisma.clientGrowth.findMany();
      res.status(200).json(growth);
    } catch (error) {
      console.error('Error fetching client growth data:', error);
      res.status(500).json({ error: 'Error fetching client growth data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
 