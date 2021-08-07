import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';
import {v4 as uuid} from 'uuid';

@Entity('tasks')
class Task {

  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  done: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Podemos estar trabalhando com atualizacao de dados e ai o ID pode já vir preenchido
  constructor() { 
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Task };