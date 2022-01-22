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
  let input, filter;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();

  let gridDivs = document.getElementsByClassName('gridDiv');

  for(let i = 0; i < gridDivs.length; i++) {
    let resturant = restaurantArray[i];
    let resturantName = resturant.restaurant_name;
    let div = gridDivs[i];

    if (resturantName.toUpperCase().indexOf(filter) > -1) {
      div.style.display = "";
    } else {
      div.style.display = "none";
    }
  }
  // ul = document.getElementById("myUL");
  // li = ul.getElementsByTagName('li');
  // console.log(li)
  //
  // // Loop through all list items, and hide those who don't match the search query
  // for (i = 0; i < li.length; i++) {
  //   console.log(li);
  //   a = li[i].getElementsByTagName("a")[0];
  //   txtValue = a.textContent || a.innerText;
  //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //     li[i].style.display = "";
  //   } else {
  //     li[i].style.display = "none";
  //   }
  // }
}


function createRestaurants(resturants) {
  restaurantArray = resturants;
  body = document.body
  let parent = document.getElementById("myUL");
  // a.forEach((e) => {
  for(let i = 0; i < restaurantArray.length; i++){
    let resturant = restaurantArray[i];
    // let resturantId = resturant.re
    // console.log(e.restaurant_name)
    let restDiv = document.createElement("li")
    restDiv.setAttribute("class", "gridDiv")
    // // let restImg = document.createElement("img")
    let restName = document.createElement("a")
    let name = document.createTextNode(resturant.restaurant_name)
    let email = document.createTextNode(resturant.email)
    let city = document.createTextNode(resturant.city)
    let locationIcon = document.createElement("i")
    let restEmail = document.createElement("a")
    let restCity = document.createElement("a")
    let mapDiv = document.createElement("div")
    let br = document.createElement("br")
    mapDiv.setAttribute("style", "height: 200px; width: 200px; padding:80px")
    restEmail.setAttribute("id", "email")
    restCity.setAttribute("id", "city")
    mapDiv.setAttribute("id", "map-" + i)
    mapDiv.setAttribute("class", "classMap")
    locationIcon.setAttribute("class", "fa fa-fw fab fa fa-location-arrow left-icon")
    parent.appendChild(restDiv)
    restName.appendChild(name)
    restEmail.appendChild(email)
    restCity.appendChild(city)
    restDiv.appendChild(restName)
    restDiv.appendChild(br)
    restDiv.appendChild(restEmail)
    restDiv.appendChild(br)

    restDiv.appendChild(br)
    restDiv.appendChild(mapDiv)
    restDiv.appendChild(br)
    restDiv.appendChild(restCity)
    restDiv.appendChild(locationIcon)
    restName.setAttribute("id", "name")
    restDiv.classList.add("robotCard")
    restDiv.style.backgroundColor = "white"
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

  for(let i = 0; i < mapDivs.length; i++){
    let resturant = restaurantArray[i];
    let div = mapDivs[i];
    let divId = div.getAttribute("id");
    const latLng = {lat: resturant.lat, lng: resturant.lng};
    const map = new google.maps.Map(document.getElementById(divId), {
      zoom: 15,
      center: latLng,
    });
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
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


function putData(array) {
    // let body = document.body
    // let div = document.createElement('div')
    let select = document.getElementById('customers')
    // div.appendChild(body)
      for( key in array){
          let option = document.createElement('option')
          option.innerHTML = (array[key].first_name) + ' ' + (array[key].last_name)
          option.setAttribute('value', array[key].customer_id)
          option.setAttribute('id', (array[key].first_name) + '_' + (array[key].last_name))
          console.log(select)
          select.appendChild(option)
        //   console.log(array[key].country)
      }

  }

