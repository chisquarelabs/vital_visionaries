import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import { initializeDB } from './utils/dbConnection';
import patient from './routes/patient'

dotenv.config();

// Initialize the app
const app: Application = express();
const PORT = process.env.PORT || 3000;

// DB Connection
initializeDB().then(() => {
  console.log('Database initialized');
}).catch((error: any) => {
  console.error('Database initialization error:', error);
});


// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(morgan('dev')); 
app.use(cors());
app.use(helmet()); 


// Main Routes
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Health Check Ok!' });
});
app.use("/api", patient);


// Error Handling Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Not Found');
  res.status(404).json({ message: error.message });
});
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: error.message,
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});