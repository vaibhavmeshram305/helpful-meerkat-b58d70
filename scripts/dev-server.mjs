// Local-only development server. Requires Node.js; no npm install needed.
// Launch with: npm run dev
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const port = Number(process.env.PORT || 5173);
const MIME = {
  '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.js':'text/javascript; charset=utf-8', '.mjs':'text/javascript; charset=utf-8',
  '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml',
  '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg',
  '.webp':'image/webp', '.txt':'text/plain; charset=utf-8'
};
const server = createServer(async (request,response)=>{
  try {
    const pathname = decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    const filename = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (filename !== root && !filename.startsWith(root + path.sep)) {
      response.writeHead(403);response.end('Forbidden');return;
    }
    const info = await stat(filename);
    if (!info.isFile()) {response.writeHead(404);response.end('Not found');return;}
    const bytes = await readFile(filename);
    response.writeHead(200,{'Content-Type': MIME[path.extname(filename)] || 'application/octet-stream',
      'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff'});
    response.end(request.method==='HEAD' ? undefined : bytes);
  } catch (error) {
    response.writeHead(error.code==='ENOENT' ? 404 : 500);
    response.end(error.code==='ENOENT' ? 'Not found' : 'Server error');
  }
});
// Binding only to loopback is intentional: this is NOT a public deployment.
server.listen(port,'127.0.0.1',()=>{
  console.log(`\nOPERATION VOLTAGE // development server`);
  console.log(`Open http://127.0.0.1:${port} in your browser`);
  console.log('Private to this computer. Press Ctrl+C to stop.\n');
});
