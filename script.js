document.getElementById("pokeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("pokeInput").value;
  if (value === "")
    return;
  console.log(value);
  
  /* global fetch */
  /* global moment */
  
  const url = "https://pokeapi.co/api/v2/pokemon/" + value.toLowerCase();
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      
      let results = "";
      results += json.name.toUpperCase() + "</h2>";

      results += "<p>Type: ";
      for (let i = 0; i < json.types.length; i++) {
        if (i === json.types.length - 1) {
          results += json.types[i].type.name.toUpperCase();
        } else {
          results += json.types[i].type.name.toUpperCase() + "/";
        }
      }
      results += "</p>";
      results += "<p>Abilities: ";
      for (let i = 0; i < json.abilities.length; i++) {
        if (json.abilities[i].is_hidden) {
          results += json.abilities[i].ability.name.toUpperCase() + " (Hidden Ability)";
        } else {
          results += json.abilities[i].ability.name.toUpperCase();
        }
        if (i !== json.abilities.length - 1) {
          results += "/";
        }
      }
      results += "</p>";

      results += "<p>Base Stats: </p>";
      results += "<ul>";
      for (let i = 0; i < json.stats.length; i++) {
        results += "<li>" + json.stats[i].stat.name.toUpperCase() + ": " + json.stats[i].base_stat + "</li>";
      }
      results += "</ul>";

      document.getElementById("pokeResults").innerHTML = results;
    }).catch((err) => {
      console.log(err);
    });
});