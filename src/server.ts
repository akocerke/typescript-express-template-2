// server.ts

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import AppRouter from './routes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../docs/swagger.json';

// Initialisierung von express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve Swagger UI
app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Register routes
app.use('/v1', AppRouter); // Hier wird der Präfix /v1 gesetzt

export default app; // Exportiere app als Standardexport
