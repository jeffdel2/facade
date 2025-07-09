const { createServer } = require('http');
const { readFileSync, existsSync } = require('fs');
const { extname, join } = require('path');
const { URL } = require('url');

const buildPath = join(__dirname, 'build');

// Check if build folder exists
if (!existsSync(buildPath)) {
  console.error('Build folder not found. Please run "npm run build" first.');
  process.exit(1);
}

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let filePath = join(buildPath, url.pathname);

  // Default to index.html for root or missing files
  if (filePath === join(buildPath, '/') || !existsSync(filePath)) {
    filePath = join(buildPath, 'index.html');
  }

  // Check if file exists
  if (!existsSync(filePath)) {
    res.writeHead(404);
    res.end('File not found');
    return;
  }

  // Get file extension
  const ext = extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  // Read and serve file
  try {
    const content = readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    res.writeHead(500);
    res.end('Server error');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 