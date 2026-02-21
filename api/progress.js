import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export default async function handler(req, res) {
  try {
    const data = await readFile(join(process.cwd(), 'agents', 'progress.json'), 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store'); // toujours frais
    res.status(200).send(data);
  } catch (err) {
    console.error('Progress API error:', err);
    res.status(500).json({ error: 'Unable to read progress', details: err.message });
  }
}