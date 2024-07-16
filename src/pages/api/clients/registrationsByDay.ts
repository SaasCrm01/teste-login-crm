// src/pages/api/clients/registrationsByDay.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const clients = await prisma.client.findMany({
        select: {
          createdAt: true,
        },
      });

      const registrationsByDay = Array(7).fill(0); // Inicializa o array com 0

      clients.forEach(client => {
        const day = new Date(client.createdAt).getDay();
        registrationsByDay[day]++;
      });

      const result = registrationsByDay.map((count, index) => ({
        day: daysOfWeek[index],
        count,
      }));

      res.status(200).json(result);
    } catch (error) {
      console.error('Error fetching client registrations:', error);
      res.status(500).json({ error: 'Error fetching client registrations' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
