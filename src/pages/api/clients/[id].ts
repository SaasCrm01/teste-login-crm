import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    console.error('Invalid ID:', id);
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    console.log('Fetching client with ID:', id);
    const { data: client, error } = await supabase
      .from('clients')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Error fetching client data' });
    }

    if (!client) {
      console.error('Client not found:', id);
      return res.status(404).json({ error: 'Client not found' });
    }

    console.log('Client data:', client);
    res.status(200).json(client);
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
