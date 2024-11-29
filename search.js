const resulBox = document.getElementById("result-box");
const inputSearch = document.getElementById("input-search");
let match = "";

let searchResult = [
  "Менеджер",
  "Менеджер з продажу",
  "Менеджер з продажу дитячих іграшок",
  "Менеджер з продажу продуктів",
];

inputSearch.addEventListener("input", (e) => {
  const res = e.target.value;
  resulBox.textContent = `Результат: ${res}`;
  let condition = res;
  let result = document.getElementById("result");
  let list = "";
  for (let i = 0; i < searchResult.length; i++) {
    list += `<li> ${searchResult[i]}</li>`.replace(
      condition,
      `<b>${condition}</b>`
    );
  }
  result.innerHTML = list;
});

// let condition = match;
// console.log(match);
//
// document.getElementById("input-search").value = match;
//
// let result = document.getElementById("result");
// let list = "";
// for (let i = 0; i < searchResult.length; i++) {
//   list += `<li> ${searchResult[i]}</li>`.replace(
//     condition,
//     `<b>${condition}</b>`
//   );
// }
// result.innerHTML = list;
