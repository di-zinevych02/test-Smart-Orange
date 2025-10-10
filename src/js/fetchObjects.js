import { createObjectsCard } from "./render-function.js";
const objectsList = document.querySelector(".objects-list");
const loadMoreBtn = document.querySelector(".load-more");

let allData = [];
let page = 1;
const limit = 3;

async function fetchData() {
  try {
    const response = await fetch(`https://test.smarto.agency/smarto_complexes_list.json`);
    //кладемо отримані дані в масив
    allData = await response.json();
    renderItems();
  } catch (error) {
    objectsList.innerHTML = `<li style="color:red;">Помилка: ${error.message}</li>`;
  }
}
function renderItems() {
  const end = page * limit; //1*3=3
  //відображення 3 карток відразу.
  const visibleItems = allData.slice(0, end);
  //очистка списку перед ререндером
  objectsList.innerHTML = "";
  //генеруємо розмітку через функцію createObjectsCard
  const cardsHTML = createObjectsCard(visibleItems);
  //Вставляємо у список
  objectsList.innerHTML = cardsHTML;

  //Якщо кількість карток буде перевищувати чи дорівнює загальної кількості карток на сервері то кнопку приховали
  if (visibleItems.length >= allData.length) {
    loadMoreBtn.classList.add('is-hidden');
    iziToast.info({
      title: "Готово",
      message: "Усі об`єкти завантажені",
      position: "topRight",
    });
}
  }
loadMoreBtn.addEventListener("click", () => {
  page++;
  renderItems();
});
// старт
fetchData();