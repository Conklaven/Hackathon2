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

const getRest = (e) => {
    console.log(e)
    return db('restaurunts')
    .select('*',)
    // console.log(e)
    .where({restaurant_name : e})

}

module.exports ={getRest}