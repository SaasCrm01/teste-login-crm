// loadEnv.js
const dotenv = require('dotenv');
const path = require('path');

// Carregar variáveis de ambiente do .env.local
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL);
console.log("Loaded DIRECT_URL:", process.env.DIRECT_URL);
