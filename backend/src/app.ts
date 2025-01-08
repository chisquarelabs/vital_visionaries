
import express from 'express';
import { createConnection ,} from 'typeorm';
import dotenv from 'dotenv';
import { User } from './entities/user.entity'; // You will create the User entity later

dotenv.config();

const app = express();
const port = 3000;

console.log("hello");
console.log('>>', process.env.DB_NAME,process.env.DATABASE_URL);


// Create TypeORM connection
createConnection({
   type: 'postgres',
  // host: process.env.DB_HOST,
  // port: 5432,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
  url: process.env.DATABASE_URL,
  entities: [User], 
  synchronize: true, // Automatically sync the database schema with your models
  logging: true, // Optional logging
  extra: {
    ssl: false, // Disable SSL
  },
}).then(() => {
  console.log('Connected to PostgreSQL database using TypeORM');
}).catch((error) => {
  console.error('Error connecting to the database', error);
});

// Express route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
