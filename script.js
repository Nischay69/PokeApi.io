const tableContent = document.querySelector(".table-content");

let pokemonsArr;

const getPokemons = async () => {
  let url = "https://pokeapi.co/api/v2/pokemon?&limit=50";
  const response = await fetch(url);
  const value = await response.json();
  pokemonsArr = value.results
  fetchPokemons(pokemonsArr, deleteFunc)
}
getPokemons();

const deleteFunc = (id) => {
  pokemonsArr.splice(id, 1)
  tableContent.innerHTML = " "
  fetchPokemons(pokemonsArr)
}

const fetchPokemons = (pokemons) => {
  pokemons.forEach((poke, i) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${poke.url
      .slice(34, 36)
      .replace(/[^0-9]/g, "")}.png`;

    tableContent.innerHTML +=
      `<tr class="row">
      <td class="id">${i + 1}</td>

      <td class="Poke-name-img">
        <img src=${imageUrl} class="Poke-img" />
        <p class="poke-text">${poke.name}</p>
      </td>

      <td class="url">${poke.url}</td>

      <td>
          <button class="trash-button" onclick="deleteFunc(${i})" id="trash">
            <img src="images/icons8-trash-50.png" alt="" class="trash-img"/>
          </button>
      </td>
    </tr>`;
  });
}
