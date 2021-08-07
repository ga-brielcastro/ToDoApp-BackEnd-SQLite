import { Request, Response } from 'express';
import { TasksService } from '../services/TasksService';


class TasksController {

  async create(req: Request, res, Response){
    const {description, done} = req.body;

    const tasksService = new TasksService();

    const tasks = await tasksService.create({description, done});

    return res.json(tasks);
  }
}

export { TasksController };