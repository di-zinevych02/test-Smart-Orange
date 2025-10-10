(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".slides-list"),t=document.querySelectorAll(".slide"),n=document.getElementById("prev"),o=document.getElementById("next");let e=0;const s=t.length,r=()=>{i.style.transform=`translateX(-${e*100}%)`},c=()=>{n.disabled=e===0,o.disabled=e===s-1},m=()=>{e<s-1&&(e++,r(),c())},g=()=>{e>0&&(e--,r(),c())};o.addEventListener("click",m),n.addEventListener("click",g),c()});const f=i=>i.map(t=>`
    <li class="objects-item">
    <div class="icon-container">
    <svg class="icon-prev" width="40" height="24">
    <use xlink:href="../img/svg/sprite.svg#icon-pin"></use>
    </svg>
    </div>
    <div class="container-year-type">
    <p class="year">${t.year}</p>
    <p class="type">${t.type}</p>
    </div>
    <img src="${t.img}" alt="${t.name}" >
    <h3 class="title-card"> "${t.name}"</h3>
    <p class="types-work">Види робіт</p>
    <ul class="list-tags">
    ${t.tags.map(n=>`<li class="item-tags">${n}</li>`).join("")}
    </ul>
    </li>
    `).join(""),l=document.querySelector(".objects-list"),d=document.querySelector(".load-more");let a=[],u=1;const y=3;async function h(){try{a=await(await fetch("https://test.smarto.agency/smarto_complexes_list.json")).json(),p()}catch(i){l.innerHTML=`<li style="color:red;">Помилка: ${i.message}</li>`}}function p(){const i=u*y,t=a.slice(0,i);l.innerHTML="";const n=f(t);l.innerHTML=n,t.length>=a.length&&(d.classList.add("is-hidden"),iziToast.info({title:"Готово",message:"Усі об`єкти завантажені",position:"topRight"}))}d.addEventListener("click",()=>{u++,p()});h();
//# sourceMappingURL=index.js.map
