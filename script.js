const tableContent = document.querySelector(".table-content");
const searchValue = document.querySelector("#search-bar");
let pokemonsArr;
let rawPokemons;
let b;
let a;
let ascendingSort = document.querySelector(".ascending");
let descendingSort = document.querySelector(".descending");

const getPokemons = async () => {
  let url = "https://pokeapi.co/api/v2/pokemon?&limit=50";
  const response = await fetch(url);
  const value = await response.json();
  pokemonsArr = value.results;
  searchValue.value = "";
  fetchPokemons(pokemonsArr);
  console.log(pokemonsArr);

  // Delete Functionality
  a = document.querySelectorAll(".trash-button");

  a.forEach((btn) => {
    btn.addEventListener("click", () => {
      let element = btn.parentElement.parentElement;
      element.remove();
    });
  });

  //AscendingOrder
  ascendingSort.addEventListener("click", sortA);

  //DESCENDINGSORT
  descendingSort.addEventListener("click", sortB);
};

getPokemons();



const fetchPokemons = (pokemons) => {
  pokemons.forEach((poke, i) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${poke.url
      .slice(34, 36)
      .replace(/[^0-9]/g, "")}.png`;

    tableContent.innerHTML += `<tr class="row">
      <td class="id">${i + 1}</td>

      <td class="Poke-name-img">
        <img src=${imageUrl} class="Poke-img" />
        <p class="poke-text">${poke.name}</p>
      </td>

      <td class="url">${poke.url}</td>

      <td>
          <button class="trash-button" id="trash">
            <img src="images/icons8-trash-50.png" alt="" class="trash-img"/>
          </button>
      </td>
    </tr>`;
  });
};

const searchFun = () => {
  b = pokemonsArr.filter((n) => {
    searchinput = searchValue.value.toLowerCase();
    return n.name.startsWith(searchinput);
  });
  tableContent.innerHTML = " ";
  b.forEach(() => {
    tableContent.innerHTML = " ";
    fetchPokemons(b);
  });
  a = document.querySelectorAll(".trash-button");
  a.forEach((btn) => {
    btn.addEventListener("click", () => {
      let element = btn.parentElement.parentElement;
      element.remove();
    });
  });
};

const sortA = () => {
  tableContent.innerHTML = " ";
  const sortFun = (a, b) => {
    return a.name < b.name ? -1 : 1;
  };
  pokemonsArr.sort(sortFun);
  fetchPokemons(pokemonsArr);
  a = document.querySelectorAll(".trash-button");
  a.forEach((btn) => {
    btn.addEventListener("click", () => {
      let element = btn.parentElement.parentElement;
      element.remove();
    });
  });
};

const sortB = () => {
  tableContent.innerHTML = " ";
  const sortFun = (a, b) => {
    return a.name < b.name ? 1 : -1;
  };
  pokemonsArr.sort(sortFun);
  fetchPokemons(pokemonsArr);
  a = document.querySelectorAll(".trash-button");

  a.forEach((btn) => {
    btn.addEventListener("click", () => {
      let element = btn.parentElement.parentElement;
      element.remove();
    });
  });
};
