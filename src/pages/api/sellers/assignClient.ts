// src/pages/api/sellers/assignClient.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { sellerName, clientNames } = req.body;

    try {
      // Find the seller by name
      const seller = await prisma.seller.findFirst({
        where: { name: sellerName },
      });

      if (!seller) {
        return res.status(404).json({ error: 'Seller not found' });
      }

      // Find clients by names
      const clients = await prisma.client.findMany({
        where: {
          name: {
            in: clientNames,
          },
        },
      });

      if (clients.length !== clientNames.length) {
        return res.status(404).json({ error: 'One or more clients not found' });
      }

      // Create ClientSeller relationships
      const clientSellerRelationships = clients.map(client => ({
        clientId: client.id,
        sellerId: seller.id,
      }));

      await prisma.clientSeller.createMany({
        data: clientSellerRelationships,
      });

      res.status(200).json({ message: 'Clients assigned to seller successfully' });
    } catch (error) {
      console.error('Error assigning clients to seller:', error);
      res.status(500).json({ error: 'Error assigning clients to seller' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
