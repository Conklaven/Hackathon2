const express = require('express');
const app = express();
const env = require('dotenv');
const DB = require('./modules/db');
// .config({path:});
env.config();

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
})

app.use('/', express.static(__dirname+'/public'));

app.get('/about', (req, res) => {
 res.sendFile(__dirname+'/public/about.html')
})

app.get('/welcome', (req, res) => {
    res.redirect('/home')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
   })

// const knex = require('knex')
//
//  const db = knex({
//      client: 'pg',
//      connection: {
//         connectionString: process.env.DATABASE_URL,
//          ssl: { rejectUnauthorized: false }
//
//      }
//  });

 app.get('/restaurants', (req, res) => {
    DB.getData()
    // DB.getCountries(db)
    // .select('first_name', 'last_name', 'email')
    // .where({country_id : 40})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err)
    })
    })