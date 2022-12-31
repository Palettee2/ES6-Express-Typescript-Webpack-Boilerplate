import app from './config/express';
import { connect } from './config/mongoose';
import config from './config/vars';

connect().catch((err: Error) => {
  console.log(`Some Error in Connection ${err}`);
});

app.listen(config.port, () => {
  console.log(`Listening to port ${config.port}`);
});
