import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compress from 'compression';
import methodOverride from 'method-override';
import routes from 'src/api/routes/index';
import config from './vars';

const app = express();

// request logging. dev: console | production: file
app.use(morgan(config.logs));

// parse body params in the json format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api routes in express
app.use('/api', routes);

export default app;
