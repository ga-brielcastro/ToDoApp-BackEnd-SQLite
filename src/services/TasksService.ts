import { getCustomRepository } from "typeorm";
import { TasksRepository } from "../repositories/TasksRepository";


interface ITasksCreate {
  description: string;
  done: boolean;  
}

class TasksService {

  async create({ description, done }) {
    /*
    *  Para criarmos um objeto dentro de uma tabela, rpecisamos fazer dois passos utilizando typeORM
    *  1 - criar uma representacao desse objeto
    *  2 - salvar o objeto 
    */
    const tasksRepository = getCustomRepository(TasksRepository);


    const tasks = tasksRepository.create({
      description,
      done
    });

    await tasksRepository.save(tasks);
  }

  async find(){
    const tasksRepository =  getCustomRepository(TasksRepository);
    
    const tasks = await tasksRepository.find();

    return tasks;

  }
}

export { TasksService };