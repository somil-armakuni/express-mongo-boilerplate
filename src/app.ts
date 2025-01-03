import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import prisma from './config/prisma-client';
import routes from './routes';
import { requestLogger } from './middleware/request-logger';

const app: Application = express();

// Test Prisma connection to MongoDB
(async () => {
    try {
        await prisma.$connect();
        console.log('Connected to MongoDB via Prisma');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
})();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan('dev')); // Log HTTP requests
app.use(json()); // Parse JSON payloads
app.use(requestLogger) //used custom middleware here.
app.use(urlencoded({ extended: true })); // Parse URL-encoded payloads
app.use(express.json());

// Routes
app.use('/api', routes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});


// Error Handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

export default app;