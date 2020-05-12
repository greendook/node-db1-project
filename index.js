const server = require('./api/server.js');

const PORT = process.env.PORT || 5432;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
