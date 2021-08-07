import { Request, Response } from 'express';
import { TasksService } from '../services/TasksService';


class TasksController {

  async create(req: Request, res, Response){
    const {description, done} = req.body;

    const tasksService = new TasksService();

    try {
      
      const tasks = await tasksService.create({description, done});
      return res.json(tasks);

    } catch (err) {
      return res.status(400).send.json({message: err.message});
    }
  }

  async find(req: Request, res: Response){

    const tasksService = new TasksService();
    const tasks = await tasksService.find();

    return res.json(tasks);
  }
}

export { TasksController };