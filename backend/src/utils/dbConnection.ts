import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST, 
  port: parseInt(process.env.DB_PORT || '5432', 10), 
  username: process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME, 
  synchronize: false, 
  logging: process.env.TYPEORM_LOGGING === 'true', 
  entities: [__dirname + '/entities/*.entity{.ts,.js}'], 
  migrations: [__dirname + '/migrations/*{.ts,.js}'], 
  subscribers: [__dirname + '/subscribers/*{.ts,.js}'], 
});

export const initializeDB = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log('Database connection established successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); 
  }
};

export default AppDataSource;