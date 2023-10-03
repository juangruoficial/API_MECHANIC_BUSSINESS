import express from 'express';
import { router } from './routes/routes.js';

const app = express();

// This will allow to receive information in Json format from clientside
app.use(express.json());

//app.use('/api/v1', passengerRouter);
app.use('/api/v1', router);

//escucha las peticiones de los clientes
/* app.listen(3000, () => {
  console.log('listening on port 3001');
}); */

export default app;
