import { Router } from 'express';
import { TasksController } from './controllers/TasksController';

const routes = Router();

const tasksController = new TasksController();

routes.get('/', tasksController.find);

routes.post('/', tasksController.create);



export { routes };