fetch('/restaurants')
  .then(response => response.json())
  .then(data => {
    console.log(data);
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


function createRestaurants(a) {
  body = document.body
  let parent = document.getElementById("myUL");
  a.forEach((e) => {
    console.log(e.restaurant_name)
    let restDiv = document.createElement("li")
    // // let restImg = document.createElement("img")
    let restName = document.createElement("a")
    let name = document.createTextNode(e.restaurant_name)
    // // let email = document.createTextNode(e.email)
    // // let robotEmail = document.createElement("div")
    // // robotEmail.setAttribute("id", "email")
    // // robotImg.src = e.image
    // // robotDiv.appendChild(robotImg)
    restName.appendChild(name)
    // // robotEmail.appendChild(email)
    parent.appendChild(restDiv)
    restDiv.appendChild(restName)
    // // robotDiv.appendChild(robotEmail)
    restName.setAttribute("id", "name")
    // // robotImg.style.height = "60%"
    // // robotImg.style.margin = "auto"
    // // robotImg.style.marginTop = "10px"
    // // robotImg.style.background = "darkBlue"
    // restDiv.classList.add("robotCard")
    // restDiv.style.backgroundColor = "lightBlue"
    // console.log(e)
  })
}


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