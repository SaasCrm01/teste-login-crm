import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const associations = await prisma.clientSeller.findMany({
        include: {
          client: true,
          seller: true,
        },
      });

      const associationsData = associations.map(association => ({
        seller: association.seller.name,
        client: association.client.name,
      }));

      res.status(200).json(associationsData);
    } catch (error) {
      console.error('Error fetching associations:', error);
      res.status(500).json({ error: 'Error fetching associations' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
