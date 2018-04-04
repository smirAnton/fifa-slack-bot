import expressValidator from 'express-validator';
import errorHandler from 'errorhandler';
import compression from 'compression';
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import lusca from 'lusca';
import path from 'path';
import morgan from 'morgan';

import { randomize, IRandomTeams } from './util/helpers';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env.example' });

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(morgan('dev'));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use(
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }),
);

app.post('/', (req: Request, res: Response): Response => {
  const result: IRandomTeams = randomize();

  return res.status(200).json({
    response_type: 'in_channel',
    text: `Selected teams rate: ${result.rate}. Selected teams: ${
      result.teams[0]
    } vs ${result.teams[1]}`,
  });
});

app.use(errorHandler());

export default app;
