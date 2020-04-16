//get an element from existing html, create a new element that will append to the html el with new content

const cardBody = document.getElementById("main");
const container = document.createElement("class", "container");

cardBody.appendChild(container);

//trying to dynamically get the url and pagination prev/next => not perfect, some if statements needed

pokemon("https://pokeapi.co/api/v2/pokemon");

function pokemon(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let allPoke = data.results;

      allPoke.forEach(element => {
        pokeurl = element.url;
        getPokeData(pokeurl);
      });

      document.getElementById("next").addEventListener("click", () => {
        pokemon(data.next);
        next.setAttribute('button', 'btn');
      });

      document.getElementById("previous").addEventListener("click", () => {
        pokemon(data.previous);
        previous.setAttribute('button', 'btn');
      });

    })
    .catch(err => {
      console.log(err);
    });
}

//from given url fetch the desired data

function getPokeData(pokeurl) {
  let url = pokeurl;

  fetch(url)
    .then(response => response.json())
    .then(pokeData => {
      appendAll(pokeData);
    })
    .catch(err => {
      console.log(err);
    });
}

//pick the data and pic you want to get and append to a card then append this card to a created element appened to html el
//a small issue here => small cards don't want to separate, probably there is a problem with appending card(s) to the caontainer
//unfortunately couldn't find the solution

function appendAll(pokeData) {
  let pokeID = pokeData.id;
  let pokeAbility = pokeData.abilities;
  let ability = [];

  pokeAbility.forEach(a => {
    ability += a.ability.name + ", ";
  });

  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const name = document.createElement("h1");
  name.textContent = pokeData.name;
  const height = document.createElement("h3");
  height.textContent = "Height: " + pokeData.height;
  const weight = document.createElement("h3");
  weight.textContent = "Weight: " + pokeData.weight;
  const experience = document.createElement("h3");
  experience.textContent = "Base experience: " + pokeData.base_experience;
  const abilities = document.createElement("h3");
  abilities.textContent = "Abilities: " + ability;

  card.appendChild(name);
  createPokeImage(pokeID, card);
  card.append(abilities, height, weight, experience);
  container.appendChild(card);
}
//get pic using pokemon id from a webside (when there's no hope, internet is my best friend)

function createPokeImage(pokeID, containerDiv) {
  let pokeImgContainer = document.createElement("div");
  pokeImgContainer.classList.add("image");

  let pokeImage = document.createElement("img");
  pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;

  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
}

//and I know I'm missing a filter, I'd use array.find()  or array.filter() search bar and I know that with body-parser I can get the condition

//   https://pokeapi.co/api/v2/pokemon?limit=964
