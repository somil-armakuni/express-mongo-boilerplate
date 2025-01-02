import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'mydb',
    synchronize: false,
    logging: true,
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
});
