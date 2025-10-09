const container = document.querySelector("objects-container");
const objectsList = document.querySelector("objects");
const loadMoreBtn = document.querySelector("load-more");

let allData = [];
let page = 1;
const limit = 3;

async function fetchData() {
  try {
    const response = await fetch(`https://test.smarto.agency/smarto_complexes_list.json`);
    allData = await response.json();
    renderItems();
  } catch (error) {
    container.innerHTML = `<p style="color:red;">Помилка: ${error.message}</p>`;
  }
}
function renderItems() {

}
