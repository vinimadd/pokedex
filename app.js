const cardBodyCave = document.getElementById("cave");
const cave = document.createElement("class", "container");
cardBodyCave.appendChild(cave);

const cardBodyForest = document.getElementById("forest");
const forest = document.createElement("class", "container");
cardBodyForest.appendChild(forest);

const cardBodyGrassland = document.getElementById("grass");
const grass = document.createElement("class", "container");
cardBodyGrassland.appendChild(grass);

const cardBodyMountain = document.getElementById("mountain");
const mountain = document.createElement("class", "container");
cardBodyMountain.appendChild(mountain);

const cardBodyRare = document.getElementById("rare");
const rare = document.createElement("class", "container");
cardBodyRare.appendChild(rare);

const cardBodyRough = document.getElementById("rough");
const rough = document.createElement("class", "container");
cardBodyRough.appendChild(rough);

const cardBodySea = document.getElementById("sea");
const sea = document.createElement("class", "container");
cardBodySea.appendChild(sea);

const cardBodyUrban = document.getElementById("urban");
const urban = document.createElement("class", "container");
cardBodyUrban.appendChild(urban);

const cardBodyWater = document.getElementById("water");
const water = document.createElement("class", "container");
cardBodyWater.appendChild(water);

function caveGroup(){
fetch("https://pokeapi.co/api/v2/pokemon-habitat/1")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let poketest = data.pokemon_species;
     
    poketest.forEach(element => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = element.name;

      let pokeurl = element.url;
      getPokeData(pokeurl, card);

      cave.appendChild(card);
      card.appendChild(h1);      

    });
  });
}
caveGroup();

// function forestGroup(){
fetch("https://pokeapi.co/api/v2/pokemon-habitat/2")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let poketest = data.pokemon_species;
    poketest.forEach(element => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = element.name;

      let pokeurl = element.url;
      getPokeData(pokeurl, card);

      forest.appendChild(card);
      card.appendChild(h1);
    });
  });

// function grasslandGroup(){
fetch("https://pokeapi.co/api/v2/pokemon-habitat/3")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let poketest = data.pokemon_species;
    poketest.forEach(element => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = element.name;

      let pokeurl = element.url;
      getPokeData(pokeurl, card);

      grass.appendChild(card);
      card.appendChild(h1);
    });
  });

// function mountainGroup(){
fetch("https://pokeapi.co/api/v2/pokemon-habitat/4")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let poketest = data.pokemon_species;
    poketest.forEach(element => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = element.name;

      let pokeurl = element.url;
      getPokeData(pokeurl, card);

      mountain.appendChild(card);
      card.appendChild(h1);
    });
  });

// function rareGroup(){
fetch("https://pokeapi.co/api/v2/pokemon-habitat/5")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let poketest = data.pokemon_species;
    poketest.forEach(element => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = element.name;

      let pokeurl = element.url;
      getPokeData(pokeurl, card);

      rare.appendChild(card);
      card.appendChild(h1);
    });
  });

// function rough-terrainGroup(){
fetch("https://pokeapi.co/api/v2/pokemon-habitat/6")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let poketest = data.pokemon_species;
    poketest.forEach(element => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = element.name;

      let pokeurl = element.url;
      getPokeData(pokeurl, card);

      rough.appendChild(card);
      card.appendChild(h1);
    });
  });

// function seaGroup(){
fetch("https://pokeapi.co/api/v2/pokemon-habitat/7")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let poketest = data.pokemon_species;
    poketest.forEach(element => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = element.name;

      let pokeurl = element.url;
      getPokeData(pokeurl, card);

      sea.appendChild(card);
      card.appendChild(h1);
    });
  });

// function urbanGroup(){
fetch("https://pokeapi.co/api/v2/pokemon-habitat/8")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let poketest = data.pokemon_species;
    poketest.forEach(element => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = element.name;

      let pokeurl = element.url;
      getPokeData(pokeurl, card);

      urban.appendChild(card);
      card.appendChild(h1);
    });
  });

// function water-edgeGroup(){
fetch("https://pokeapi.co/api/v2/pokemon-habitat/9")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let poketest = data.pokemon_species;
    poketest.forEach(element => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = element.name;

      let pokeurl = element.url;
      getPokeData(pokeurl, card);

      water.appendChild(card);
      card.appendChild(h1);
    });
  });

  function getPokeData (pokeurl, container) {
    let url = pokeurl; // <--- this is saving the pokemon url to a variable to use in the fetch. 
                          //Example: https://pokeapi.co/api/v2/pokemon/1/"
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
      let pokeColor = pokeData.color.name;
      let pokeCapture= pokeData.capture_rate;
      let pokeGrowth = pokeData.growth_rate.name;
      let pokeShape = pokeData.shape.name;
      let pokeID = pokeData.id;

      const card = document.createElement("div");
      card.setAttribute("class", "card");

        const capture = document.createElement("p");
        capture.textContent = "Capture rate: " + pokeCapture;
        const color = document.createElement("p");
        color.textContent = "Pokemon color: " + pokeColor;
        const growth = document.createElement("p");
        growth.textContent = "Pokemon growth rate: " + pokeGrowth;
        const shape = document.createElement("p");
        shape.textContent = "Pokemon shape: " + pokeShape;

        container.appendChild(card);
        
        createPokeImage(pokeID, card);
        card.append(capture, color, growth, shape);
        
      
    })
  }

  function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

//   https://pokeapi.co/api/v2/pokemon?limit=964
