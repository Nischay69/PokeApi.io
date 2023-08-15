const tableContent = document.querySelector(".table-content");
// onclick="fun(${i})
// const fun = (id) => {
//   console.log(id);
//   let row = document.querySelectorAll(".row");
//   console.log(row);
//   let url = document.querySelectorAll(".url");
//   console.log(url);
//   url.forEach((element) => {
//     inner = element.innerHTML;

//     url = inner.slice(34, 36).replace(/[^0-9]/g, "");
//     if (id == url) {
//       console.log(id);
//       console.log(url);
//       row[url - 1].remove();
//     }
//   });
// };
// const fun = (i) => {
//   let row = document.querySelectorAll(".");
//   console.log(row);
//   console.log(i);
//   row[i].remove();
//   console.log(row);
//   console.log(i);
// };
async function displayPoke() {
  let url = "https://pokeapi.co/api/v2/pokemon?&limit=50";
  const response = await fetch(url);
  const value = await response.json();
  console.log(value.results.length);
  Poke = value.results[0];
  console.log(Poke);
  value.results.forEach((Poke, i) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${Poke.url
      .slice(34, 36)
      .replace(/[^0-9]/g, "")}.png`;
    tableContent.innerHTML += `<tr class="row"><td class="id">${
      i + 1
    }</td><td class="Poke-name-img"><img src=${imageUrl} class="Poke-img"></img><p class="poke-text">${
      Poke.name
    }</p></td><td class="url">${
      Poke.url
    }</td><td><span><button class="trash-button" id="trash"><img src="images/icons8-trash-50.png" alt="" class="trash-img"/></button></span></td></tr>`;
  });
}
tableContent.addEventListener(
  "click",
  function (e) {
    console.log("gg");
    if (e.target.tagName == "SPAN") {
      console.log("gg");
      e.target.parentElement.remove();
    }
  },
  false
);
displayPoke();
