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
    .select('restaurant_name','city', 'email', 'restaurant_id', 'lat', 'lng')
    .orderBy('restaurant_name')
}

const getFullData = () => {
    return db('restaurunts')
        .select('*')
}

const updateData = (restaurunt) => {
    return db('restaurunts')
        .insert(restaurunt)
        .onConflict("restaurant_id")
        .merge()
        .returning("*");
}

module.exports ={getData, getFullData, updateData}

