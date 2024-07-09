import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const sellersWithClients = await prisma.seller.findMany({
        include: {
          clients: {
            include: {
              client: true,
            },
          },
        },
      });

      const sellersData = sellersWithClients.map(seller => ({
        id: seller.id,
        name: seller.name,
        clients: seller.clients.map(cs => cs.client),
      }));

      res.status(200).json(sellersData);
    } catch (error) {
      console.error('Error fetching sellers and clients:', error);
      res.status(500).json({ error: 'Error fetching sellers and clients' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
