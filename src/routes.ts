import { Router } from 'express';
import { TasksController } from './controllers/TasksController';

const routes = Router();

const tasksController = new TasksController();

routes.get('/', (req, res) => {});

routes.post('/', tasksController.create);



export { routes };