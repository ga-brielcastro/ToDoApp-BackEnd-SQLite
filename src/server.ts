import express from 'express';
import './database'; // CreateConnection do TypeORM
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');  
});