export const createObjectsCard = objects =>
  objects.map(objectInfo => `
    <li class="objects-item">
    <div class="icon-container">
    <svg class="icon-prev" width="40" height="24">
    <use xlink:href="../img/svg/sprite.svg#icon-pin"></use>
    </svg>
    </div>
    <div class="container-year-type">
    <p class="year">${objectInfo.year}</p>
    <p class="type">${objectInfo.type}</p>
    </div>
    <img src="${objectInfo.img}" alt="${objectInfo.name}" >
    <h3 class="title-card"> "${objectInfo.name}"</h3>
    <p class="types-work">Види робіт</p>
    <ul class="list-tags">
    ${objectInfo.tags.map(tag => `<li class="item-tags">${tag}</li>`).join("")}
    </ul>
    </li>
    `).join("");