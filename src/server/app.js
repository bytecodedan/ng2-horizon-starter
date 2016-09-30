import path from 'path';
import express from 'express';
import horizon from '@horizon/server';

import config from '../../config';
import './jobs';

const app = express();

app.use('/static', express.static(path.join(process.cwd(), '.build')));
app.use(express.static('dist'));

const run = () => {  

  const port = process.env.PORT || config.server.port;
  
  const httpServer = app.listen(port, (err) => {
    if (err) {
      console.log(err); 
      return;
    }

    console.log(`Express listening at http://localhost:${port}`); 
  });

  const horizonOptions = {
    auto_create_collection: true,
    auto_create_index: true,
    project_name: 'horizon_app',
    permissions: false, 
    auth: {
      allow_anonymous: true,
      allow_unauthenticated: true,
      token_secret: config.horizon.token_secret
    }
  };
  const horizonServer = horizon(httpServer, horizonOptions);
};

export default {
  run
};
