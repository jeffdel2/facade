const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Check if build folder exists
const buildPath = path.join(__dirname, 'build');
if (!fs.existsSync(buildPath)) {
  console.error('Build folder not found. Please run "npm run build" first.');
  process.exit(1);
}

// Serve static files from the React app
app.use(express.static(buildPath));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  const indexPath = path.join(buildPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Build files not found. Please run "npm run build" first.');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 