// src/pages/api/sellers/count.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const count = await prisma.seller.count();
      res.status(200).json({ count });
    } catch (error) {
      console.error('Error counting sellers:', error);
      res.status(500).json({ error: 'Error counting sellers' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: 'Method not allowed' });
  }
}
