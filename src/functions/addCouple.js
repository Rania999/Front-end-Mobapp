  
  function addCouple(key, value, route){
    const url = new URL(route, 'http://localhost:5000/')
    url.searchParams.append('key',key)
    url.searchParams.append('val',value)
  
    console.log("Requesting " + url.toString())
    fetch(url, {
      method : 'POST',
      body : {key: key, val : value}
    }
  
    ).then(response => console.log(response.status)).catch(
      (e) => {alert('Something went wrong ' + e.message)}
    )
  }