import knex from 'knex';
import path from 'path';

const connection = knex({
  
    client: 'pg',
   // version: '7.2',
    connection: {
      host : '127.0.0.1',
      port : 8745,
      user : 'postgres',
      password : 'VrPost@Server',
      database : 'suppegpag'
      
    }
  });

export default connection;