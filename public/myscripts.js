fetch('/customers')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      putData(data)
  }
  )


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
