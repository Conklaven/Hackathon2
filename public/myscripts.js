fetch('/restaurants')
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    createRestaurants(data)
  })

// (() => {
//   body = document.body
//   let newDiv = document.createElement("ul")
//   body.appendChild(newDiv)
//   newDiv.setAttribute("id", "myUL")
//   // newDiv.style.border = '1px solid black'
// })()

let restaurantSearch = []
let restaurantArray = []

// let btn = document.getElementById("submit")
// btn.addEventListener("click", robotSort)
// function robotSort() {
//     searchtext = document.getElementById("searchbar")
//     // console.log(sea
//     console.log(searchtext.value)
//     robotSearch =robots.filter(e => e.name.indexOf(searchtext.value) != 0 )

//     console.log(robotSearch)
// }

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


function createRestaurants(resturants) {
  restaurantArray = resturants;
  body = document.body
  let parent = document.getElementById("myUL");
  // a.forEach((e) => {
  for(let i = 0; i < restaurantArray.length; i++){
    let resturant = restaurantArray[i];
    // console.log(e.restaurant_name)
    let restDiv = document.createElement("li")
    // // let restImg = document.createElement("img")
    let restName = document.createElement("a")
    let name = document.createTextNode(resturant.restaurant_name)
    let email = document.createTextNode(resturant.email)
    let city = document.createTextNode(resturant.city)
    let restEmail = document.createElement("a")
    let restCity = document.createElement("a")
    let mapDiv = document.createElement("div")
    mapDiv.setAttribute("style", "height: 300px; width: 300px;")
    restEmail.setAttribute("id", "email")
    restCity.setAttribute("id", "city")
    mapDiv.setAttribute("id", "map-" + i)
    mapDiv.setAttribute("class", "classMap")
    // mapDiv.setAttribute("width", "400");
    // mapDiv.setAttribute("height", "270");

    // let mapScript = document.createElement("script")
    // mapScript.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1Q5VKObdCwAbLJWyN5gngRk8NP21QO7Y&callback=initMap&libraries=&v=weekly")
    // mapScript.setAttribute("async")
    // // robotImg.src = e.image
    // // robotDiv.appendChild(robotImg)
    restName.appendChild(name)
    restCity.appendChild(city)
    restEmail.appendChild(email)
    parent.appendChild(restDiv)
    restDiv.appendChild(restName)
    restDiv.appendChild(restCity)
    restDiv.appendChild(restEmail)
    restDiv.appendChild(mapDiv)
    // restDiv.appendChild(mapScript)
    restName.setAttribute("id", "name")
    // // robotImg.style.height = "60%"
    // // robotImg.style.margin = "auto"
    // // robotImg.style.marginTop = "10px"
    // // robotImg.style.background = "darkBlue"
    restDiv.classList.add("robotCard")
    restDiv.style.backgroundColor = "white"
    // console.log(e)
  }
  let mapScript = document.createElement("script")
  mapScript.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1Q5VKObdCwAbLJWyN5gngRk8NP21QO7Y&callback=initMap&libraries=&v=weekly")
  mapScript.setAttribute("async", '')
  body.appendChild(mapScript)
}
// Initialize and add the map
function initMap() {
  geocoder = new google.maps.Geocoder();
  // The location of Uluru
  let mapDivs = document.getElementsByClassName('classMap');
  // console.log("printing map divs:");
  // console.log(mapDivs);
  // console.log(mapDivs.length);

  for(let i = 0; i < mapDivs.length; i++){
    let resturant = restaurantArray[i];
    let div = mapDivs[i];
    let divId = div.getAttribute("id");
    // console.log(divId);
    // const telAviv = { lat: 32.073582, lng: 34.788052 };
    // const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    // codeAddress(resturant.city, map);

    geocoder.geocode({ 'address': resturant.city }, function (results, status) {
      console.log("geocoder results for: "+resturant.city+" are "+results+", status is: "+status);
      const latLng = {lat: results[0].geometry.location.lat (), lng: results[0].geometry.location.lng ()};
      const map = new google.maps.Map(document.getElementById(divId), {
        zoom: 12,
        center: latLng,
      });

      if (status == 'OK') {
        const marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
        console.log("set marker successfully for: "+resturant.city);
      } else {
        console.error("Failed setting marker for: "+resturant.city);
        // alert('Geocode was not successful for the following reason: ' + status);
      }
    });

    // const map = new google.maps.Map(document.getElementById(divId), {
    //   zoom: 2,
    //   center: uluru,
    // });
    // The marker, positioned at Uluru
    // const marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map,
    // });

  }

}
//
// function codeAddress(address, map) {
//
//   geocoder.geocode({ 'address': address }, function (results, status) {
//     console.log(results);
//     const latLng = {lat: results[0].geometry.location.lat (), lng: results[0].geometry.location.lng ()};
//     console.log (latLng);
//     if (status == 'OK') {
//       const marker = new google.maps.Marker({
//         position: latLng,
//         map: map
//       });
//       console.log(map);
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }


// function putData(array) {
//     // let body = document.body
//     // let div = document.createElement('div')
//     let select = document.getElementById('customers')
//     // div.appendChild(body)
//       for( key in array){
//           let option = document.createElement('option')
//           option.innerHTML = (array[key].first_name) + ' ' + (array[key].last_name)
//           option.setAttribute('value', array[key].customer_id)
//           option.setAttribute('id', (array[key].first_name) + '_' + (array[key].last_name))
//           console.log(select)
//           select.appendChild(option)
//         //   console.log(array[key].country)
//       }

//   }