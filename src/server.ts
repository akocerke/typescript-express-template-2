import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import AppRouter from './routes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../docs/swagger.json';

// Initialisierung von express
const app = express();
app.use(bodyParser.json());
// Use for development
app.use(cors());

// Serve Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Register routes
app.use('/v1', AppRouter); //v1

export default app;
