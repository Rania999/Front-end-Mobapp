  
  function sendRequestCredentials(key,updateFunction) {
    const route = "/store"
    const url = new URL(route, 'https://kiva.mobapp.mines-paristech.fr/api')
    url.searchParams.append('filter',key)
    const hd = new Headers({'Authorization' : 'Basic ' + encode('kiva:bien') })
    console.log("Requesting " + url.toString())
    fetch(url, {
      method : 'GET',
      headers : hd
    }
    ).then((response) => {
      if (response.status == '200') {
        return(response.json())
      } else {
        alert('Response code :' + response.status)
      }
    }).then(updateFunction).catch(
      (e) => {alert('Something went wrong here' + e.message)}
    )
  }
export default sendRequestCredentials;