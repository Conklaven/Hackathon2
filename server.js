const express = require('express');
const app = express();
const geocoder = require('google-geocoder');
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

app.get('/update-restaurants-latlng', (req, res) => {
    const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
    let cityMap = {}
    DB.getFullData()
        // DB.getCountries(db)
        // .select('first_name', 'last_name', 'email')
        // .where({country_id : 40})
        .then(async (data) => {
            for (let i = 0; i < data.length; i++) {
                let resturnat = data[i];
                let cachedResult = cityMap[resturnat.city];
                if (cachedResult){
                    resturnat.lng = cachedResult.lng;
                    resturnat.lat = cachedResult.lat;
                }else {
                    await sleep(100);
                    const locationResult = await getGeoCodeLocation(resturnat.city)
                    cityMap[resturnat.city] = locationResult;
                    resturnat.lng = locationResult.lng;
                    resturnat.lat = locationResult.lat;
                }
                // save to db...
                const updatedResturant = await DB.updateData(resturnat)
                console.log(updatedResturant);
            }

            res.json(data);
        })
        .catch(err => {
            console.log(err)
        })
})

const geo = geocoder({
    key: 'AIzaSyDm2Ollsl9oWErgOQydJ4nyD1JH1muOBPo'
});

async function getGeoCodeLocation(address){
    return new Promise((resolve, reject) => {
        geo.find(address, function(err, results){
            console.log(results);
            if (err === null){
                resolve( {
                    lng: results[0].location.lng,
                    lat: results[0].location.lat,
                });
            }else {
                resolve( {
                    lng: null,
                    lat: null,
                });
            }
        });
    });
}