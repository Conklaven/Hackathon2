const knex = require('knex');
const env =require('dotenv');
env.config();

const db =knex({
    client: 'pg',
    connection:{
        connectionString: process.env.DATABASE_URL,
         ssl: { rejectUnauthorized: false }

    }
})

const getData = () => {
    return db('restaurunts')
    .select('restaurant_name')
    .orderBy('restaurant_name')
}

module.exports ={getData}