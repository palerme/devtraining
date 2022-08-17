import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'masterkey',
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity.js'], 
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'masterkey',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
});