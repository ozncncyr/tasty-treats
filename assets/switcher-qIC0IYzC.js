import{a as d,P as N,N as v,b as S,e as E,c as C}from"./vendor-CsIy9GeN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const u="https://tasty-treats-backend.p.goit.global/api";async function Z(){try{return(await d.get(`${u}/categories`)).data}catch(e){return console.error("Error while fetching categories:",e),[]}}async function T(e){const t=`${u}/recipes/${e}`;return(await d.get(t)).data}const ee=async function(){try{return(await d.get(`${u}/recipes/popular`)).data}catch(e){throw e}};async function te(){const e=`${u}/areas`;return(await d.get(e)).data}async function se(){const e=`${u}/ingredients`;return(await d.get(e)).data}async function I(e,t){const r=`${u}/recipes/${e}/rating`;return console.log(r,t),await d.patch(r,t)}function F(e){return d.post(`${u}/orders/add`,e)}function A(){const e=window.innerWidth;if(e<768)return 2;if(e>=768)return 3}function ae(e,t,r,o){const a={totalItems:Number(t)*Number(r),itemsPerPage:Number(t),visiblePages:A(),page:Number(e),centerAlign:!1,omitMiddlePages:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn pag-page">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} move-button"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} prev-button"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip more-button"><span class="tui-ico-ellip">...</span></a>'}};new N("pagination",a).on("afterMove",({page:i})=>{o(i)})}const m="/tasty-treats/assets/sprite-BeXmI9hm.svg";function g(e,t){return e<=t?"rate-item-active":"rate-item"}function P(e){const t=localStorage.getItem("favorites"),r=JSON.parse(t);return t&&r.find(o=>o.id===e)?"active":""}function R(e){return`<ul class='rate-list'>
             <li class=${g(1,e)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${m}#star'></use>
              </svg>
            </li>
            <li class=${g(2,e)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${m}#star'></use>
              </svg>
            </li>
            <li class=${g(3,e)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${m}#star'></use>
              </svg>
            </li>
            <li class=${g(4,e)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${m}#star'></use>
              </svg>
            </li>
            <li class=${g(5,e)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${m}#star'></use>
              </svg>
            </li>
          </ul>`}function re(e,t,r,o,a,n){const i={title:e,description:t.replace("'",""),preview:r,rating:o,id:a,category:n},p=o>5?5 .toFixed(1):o.toFixed(1);return`<div data-category='${n}' class='recipe-item animate__animated animate__fadeIn' 
                style='
                      background: linear-gradient(0deg, rgba(5, 5, 5, 0.6),
                      rgba(5, 5, 5, 0)),
                      url(${r}); 
                      background-position: center;
                      background-size: cover;'>

                  <div class='inter-box'>

                    <button type='button' 
                    class='favorite-btn ${P(a)}'
                    data-info='${JSON.stringify(i)}'
                    name='favorite'>
                      <svg class='heart-icon' width='22' height='22'>
                          <use href='${m}#heart'></use>
                        </svg>
                    </button> 

                    <h2 class='title-item overflow-ellipsis'>${e}</h2>
                    <p class='title-descr ellipsis-multiline'>${t}</p>

                    <div class='rate-details-box'>
                    <p class='rate'>${p}</p>
                    ${R(p)}
                    <button type='button' name='details' class='button item-rec' data-id=${a}>See recipe</button>
                    </div>
                  </div>
                </div>`}const s={closeModalBtn:document.querySelector(".close-modal"),backdropModal:document.querySelector(".backdrop-recipes"),mainModalRecipes:document.querySelector(".modal-recipes"),modalRecipes:document.querySelector(".modal-recipes-js"),backdropModal:document.querySelector(".backdrop-recipes"),saveRecipeBtn:document.querySelector(".save-recipes-btn"),giveRatingBtn:document.querySelector(".give-rating-btn"),rateModal:document.querySelector(".modal-rating"),closeRate:document.querySelector(".close-rating-modal"),modalRateList:document.querySelector(".modal-rating-list"),rateVal:document.querySelector(".modal-rating-span"),rateRage:document.querySelector(".rating-range-input"),rateEmail:document.querySelector(".rating-email-input"),rateForm:document.querySelector(".modal-rating-form"),sendRateBtn:document.querySelector(".modal-rating-send-btn")};function oe(e){s.closeModalBtn.addEventListener("click",f),s.backdropModal.addEventListener("click",$),s.giveRatingBtn.addEventListener("click",w),window.addEventListener("keydown",M),s.backdropModal.classList.remove("is-hidden-modal"),s.mainModalRecipes.classList.remove("is-hidden-modal"),s.rateForm.dataset.id=e.dataset.id,H(e.dataset.id),q();const t=localStorage.getItem("favorites"),r=JSON.parse(t);t&&(r.find(o=>o.id===e.dataset.id)?s.saveRecipeBtn.textContent="Remove favorite":s.saveRecipeBtn.textContent="Add to favorite"),s.saveRecipeBtn.addEventListener("click",B)}function w(){s.mainModalRecipes.classList.add("is-hidden-modal"),s.rateModal.classList.remove("is-hidden-modal"),s.closeRate.addEventListener("click",k),s.modalRateList.addEventListener("click",b),s.rateEmail.addEventListener("input",y),s.rateForm.addEventListener("submit",L)}function b(e){const t=e.target.closest(".modal-rating-star-item");if(t){const r=[...e.currentTarget.children].indexOf(t)+1;[...e.currentTarget.children].forEach((o,a)=>a<=r-1?o.classList.add("is-rated"):o.classList.remove("is-rated")),s.rateVal.textContent=r.toFixed(1),s.rateRage.value=r}}function J(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function y(){J(s.rateEmail.value)?(s.rateEmail.style.borderColor="#9bb537",s.sendRateBtn.disabled=!1):(s.rateEmail.style.borderColor="#b83245",s.sendRateBtn.disabled=!0)}async function L(e){e.preventDefault();const t={rate:Number(e.target.elements["raiting-star"].value),email:e.target.elements.email.value},r=s.rateForm.dataset.id;try{await I(r,t),v.Notify.success("Thank you for appreciating the recipe.")}catch(o){v.Notify.failure(o.response.data.message||"Rating has not been submited...")}f()}function j(){[...s.modalRateList.children].forEach(e=>e.classList.remove("is-rated")),s.rateEmail.style.borderColor="",s.sendRateBtn.disabled=!0,s.rateVal.textContent="0.0",s.rateForm.dataset.id="",s.rateForm.reset()}function k(){s.mainModalRecipes.classList.remove("is-hidden-modal"),s.rateModal.classList.add("is-hidden-modal"),s.closeRate.removeEventListener("click",k),s.modalRateList.addEventListener("click",b),s.rateEmail.addEventListener("input",y),s.rateForm.addEventListener("submit",L)}function f(){z(),j(),s.backdropModal.classList.add("is-hidden-modal"),s.mainModalRecipes.classList.add("is-hidden-modal"),s.rateModal.classList.add("is-hidden-modal"),s.modalRecipes.innerHTML="",q()}function $({currentTarget:e,target:t}){e===t&&f()}function M(e){e.key==="Escape"&&f()}async function H(e){try{const t=await T(e),{title:r,description:o,preview:a,rating:n,_id:i,category:p}=t,c={title:r,description:o,preview:a,rating:n,id:i,category:p};s.modalRecipes.dataset.info=`${JSON.stringify(c)}`,D(_(t)),V()}catch(t){console.error(t)}}function _(e){const t=e.ingredients,r=e.youtube?e.youtube.replace("watch?v=","embed/"):e.thumb,o=e.tags;let a="";if(o[0])for(let c=0;c<o.length;c++)a+=`<li class="recipe-tag">#${o[c]}</li>`;let n="";for(let c=0;c<t.length;c++)n+=`<li class="recipe-ingridient">${t[c].name} <span class="recipe-ps">${t[c].measure}</span></li>`;const i=e.rating>5?5 .toFixed(1):e.rating.toFixed(1);return`<div class="recipe-parts">
    ${W(r,e.description)}
    <div class="recipe-title">
      <h2 class="recipe-title-txt">${e.title}</h2>
      <div class="rating-part">
        <p class='rate'>${i}</p>
      ${R(i)}
        <p class="recipe-time">${e.time} min</p>
      </div>
      <ul class="ingridients">
        ${n}
      </ul>
    </div>
  </div>
  <ul class="recipe-tags">
    ${a}
  </ul>
  <p class="recipe-instr">${e.instructions}</p>
  </div>
`}function V(){const e=document.querySelector(".recipe-instr");S.init(e,{alwaysShowTracks:!0});const t=document.querySelector(".ingridients");S.init(t,{alwaysShowTracks:!0})}function D(e){s.modalRecipes.insertAdjacentHTML("afterbegin",e)}function q(){document.querySelector("body").classList.toggle("overflow-hidden")}function W(e,t){return e.endsWith(".jpg")?`<img class="modal-img" src="${e}" alt="${t}">`:`<iframe
      class="recipe-frame"
      src="${e}"
      frameborder="0"
      alt="${t}"
    ></iframe>`}function B({target:e}){const t=localStorage.getItem("favorites"),r=JSON.parse(t),o=JSON.parse(s.modalRecipes.dataset.info);t?r.find(a=>a.id===o.id)?(localStorage.setItem("favorites",JSON.stringify([...r.filter(a=>a.id!==o.id)])),e.textContent="Add to favorite"):(localStorage.setItem("favorites",JSON.stringify([...r,o])),e.textContent="Remove favorite"):(localStorage.setItem("favorites",JSON.stringify([o])),e.textContent="Remove favorite")}function z(){s.closeModalBtn.removeEventListener("click",f),s.backdropModal.removeEventListener("click",$),s.saveRecipeBtn.removeEventListener("click",B),s.giveRatingBtn.removeEventListener("click",w),s.closeRate.removeEventListener("click",k),s.modalRateList.removeEventListener("click",b),s.rateEmail.removeEventListener("input",y),s.rateForm.removeEventListener("submit",L),window.removeEventListener("keydown",M)}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),o=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),(a?E:C)(document.body)};t.addEventListener("click",o),r.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),E(document.body))})})();const l={openModalBtn:document.querySelector(".shopping-link"),openModalBtnHero:document.querySelector(".btn-hero"),closeModalBtn:document.querySelector(".order-modal-close-btn"),backdrop:document.querySelector(".backdrop-order"),modal:document.querySelector(".modal-order"),forma:document.querySelector(".modal-form-order")};try{l.openModalBtnHero.addEventListener("click",x)}catch{}l.openModalBtn.addEventListener("click",x);l.closeModalBtn.addEventListener("click",h);l.backdrop.addEventListener("click",K);l.forma.addEventListener("submit",G);async function G(e){e.preventDefault();const{name:t,tel:r,email:o,comment:a}=e.currentTarget,n={name:t.value,phone:r.value,email:o.value,comment:a.value};try{const i=await F(n);v.Notify.success("Your order has been submitted!")}catch(i){v.Notify.failure(i.response.data.message||"Order has not been placed...")}finally{h()}}function x(){window.addEventListener("keydown",O),document.body.classList.add("overflowHidden"),l.backdrop.classList.add("active"),l.modal.classList.add("active")}function h(){document.body.classList.remove("overflowHidden"),window.removeEventListener("keydown",O),document.body.classList.remove("overflowHidden"),l.backdrop.classList.remove("active"),l.modal.classList.remove("active")}function K(e){e.currentTarget===e.target&&h()}function O(e){e.code==="Escape"&&h()}function U(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",r=e||t;document.documentElement.setAttribute("data-theme",r),document.querySelectorAll(".input-switcher").forEach(function(a){a.checked=r==="dark"})}function X(){const t=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",t),document.querySelectorAll(".input-switcher").forEach(function(o){o.checked=t==="dark"}),localStorage.setItem("theme",t)}const Y=document.querySelectorAll(".input-switcher");Y.forEach(function(e){e.addEventListener("change",X)});U();export{oe as O,se as a,Z as b,te as f,ee as g,re as r,ae as s};
//# sourceMappingURL=switcher-qIC0IYzC.js.map
