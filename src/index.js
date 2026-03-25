import 'dotenv/config';
import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  try {
    await initMongoDB();
    startServer();
  } catch (e) {
    console.error('Bootstrap failed:', e);
    process.exit(1);
  }
};

bootstrap();
