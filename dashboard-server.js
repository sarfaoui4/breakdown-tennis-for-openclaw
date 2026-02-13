import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const HOST = '0.0.0.0';
const PORT = 3000;
const PROGRESS_PATH = join(__dirname, 'agents', 'progress.json');
const DASHBOARD_PATH = join(__dirname, 'dashboard.html');

const server = createServer(async (req, res) => {
  try {
    if (req.url === '/progress.json' || req.url === '/api/progress') {
      const data = await readFile(PROGRESS_PATH, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
      return;
    }
    // Serve dashboard HTML for all other routes
    const html = await readFile(DASHBOARD_PATH, 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } catch (err) {
    console.error('Dashboard error:', err.message);
    res.writeHead(err.code === 'ENOENT' ? 404 : 500);
    res.end(`Error: ${err.message}`);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Dashboard Tennis Breakdown écoute sur http://${HOST}:${PORT}`);
  console.log(`Données dynamiques : ${PROGRESS_PATH}`);
});