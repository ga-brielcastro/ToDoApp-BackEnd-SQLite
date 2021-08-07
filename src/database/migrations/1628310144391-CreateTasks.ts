import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTasks1628310144391 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { // migrations:run 
        await queryRunner.createTable(
            new Table({
                name: "tasks",
                columns: [
                  {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,   
                  },

                  {
                      name: "description",
                      type: "varchar"
                  },

                  {
                      name: "done",
                      type: "boolean"
                  },

                  {
                      name: "created_at",
                      type: "timestamp",
                      default: "now()"
                  },
                 
                  {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> { // migrations:revert
        await queryRunner.dropTable('tasks');
    }

}
