document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  
  /* global fetch */
  /* global moment */
  
  const url = "https://pokeapi.co/api/v2/" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      
      let results = "";
      results += json.name.toUpperCase() + "</h2>";
      //results += '<h2>' + json.main.temp + " </h2>"
      results += "<pre>" + JSON.stringify(json, null, 4)
      results += "</pre>";
      document.getElementById("weatherResults").innerHTML = results;
    }).catch((err) => {
      console.log(err);
    });
});