import{a as d,P as N,N as v,b as S,e as E,c as C}from"./vendor-CsIy9GeN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const u="https://tasty-treats-backend.p.goit.global/api";async function Z(){try{return(await d.get(`${u}/categories`)).data}catch(e){return console.error("Error while fetching categories:",e),[]}}async function T(e){const t=`${u}/recipes/${e}`;return(await d.get(t)).data}const ee=async function(){try{return(await d.get(`${u}/recipes/popular`)).data}catch(e){throw e}};async function te(){const e=`${u}/areas`;return(await d.get(e)).data}async function se(){const e=`${u}/ingredients`;return(await d.get(e)).data}async function I(e,t){const a=`${u}/recipes/${e}/rating`;return console.log(a,t),await d.patch(a,t)}function F(e){return d.post(`${u}/orders/add`,e)}function A(){const e=window.innerWidth;if(e<768)return 2;if(e>=768)return 3}function re(e,t,a,i){const r={totalItems:Number(t)*Number(a),itemsPerPage:Number(t),visiblePages:A(),page:Number(e),centerAlign:!1,omitMiddlePages:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn pag-page">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} move-button"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} prev-button"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip more-button"><span class="tui-ico-ellip">...</span></a>'}};new N("pagination",r).on("afterMove",({page:o})=>{i(o)})}const m="/tasty-treats/assets/sprite-BeXmI9hm.svg";function g(e,t){return e<=t?"rate-item-active":"rate-item"}function P(e){const t=localStorage.getItem("favorites"),a=JSON.parse(t);return t&&a.find(i=>i.id===e)?"active":""}function R(e){return`<ul class='rate-list'>
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
          </ul>`}function ae(e,t,a,i,r,n){const o={title:e,description:t.replace("'",""),preview:a,rating:i,id:r,category:n},p=i>5?5 .toFixed(1):i.toFixed(1);return`<div data-category='${n}' class='recipe-item animate__animated animate__fadeIn' 
                style='
                      background: linear-gradient(0deg, rgba(5, 5, 5, 0.6),
                      rgba(5, 5, 5, 0)),
                      url(${a}); 
                      background-position: center;
                      background-size: cover;'>

                  <div class='inter-box'>

                    <button type='button' 
                    class='favorite-btn ${P(r)}'
                    data-info='${JSON.stringify(o)}'
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
                    <button type='button' name='details' class='button item-rec' data-id=${r}>See recipe</button>
                    </div>
                  </div>
                </div>`}const s={closeModalBtn:document.querySelector(".close-modal"),backdropModal:document.querySelector(".backdrop-recipes"),mainModalRecipes:document.querySelector(".modal-recipes"),modalRecipes:document.querySelector(".modal-recipes-js"),backdropModal:document.querySelector(".backdrop-recipes"),saveRecipeBtn:document.querySelector(".save-recipes-btn"),giveRatingBtn:document.querySelector(".give-rating-btn"),rateModal:document.querySelector(".modal-rating"),closeRate:document.querySelector(".close-rating-modal"),modalRateList:document.querySelector(".modal-rating-list"),rateVal:document.querySelector(".modal-rating-span"),rateRage:document.querySelector(".rating-range-input"),rateEmail:document.querySelector(".rating-email-input"),rateForm:document.querySelector(".modal-rating-form"),sendRateBtn:document.querySelector(".modal-rating-send-btn")};function ie(e){s.closeModalBtn.addEventListener("click",f),s.backdropModal.addEventListener("click",$),s.giveRatingBtn.addEventListener("click",w),window.addEventListener("keydown",M),s.backdropModal.classList.remove("is-hidden-modal"),s.mainModalRecipes.classList.remove("is-hidden-modal"),s.rateForm.dataset.id=e.dataset.id,H(e.dataset.id),q();const t=localStorage.getItem("favorites"),a=JSON.parse(t);t&&(a.find(i=>i.id===e.dataset.id)?s.saveRecipeBtn.textContent="Remove favorite":s.saveRecipeBtn.textContent="Add to favorite"),s.saveRecipeBtn.addEventListener("click",B)}function w(){s.mainModalRecipes.classList.add("is-hidden-modal"),s.rateModal.classList.remove("is-hidden-modal"),s.closeRate.addEventListener("click",k),s.modalRateList.addEventListener("click",b),s.rateEmail.addEventListener("input",y),s.rateForm.addEventListener("submit",L)}function b(e){const t=e.target.closest(".modal-rating-star-item");if(t){const a=[...e.currentTarget.children].indexOf(t)+1;[...e.currentTarget.children].forEach((i,r)=>r<=a-1?i.classList.add("is-rated"):i.classList.remove("is-rated")),s.rateVal.textContent=a.toFixed(1),s.rateRage.value=a}}function J(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function y(){J(s.rateEmail.value)?(s.rateEmail.style.borderColor="#9bb537",s.sendRateBtn.disabled=!1):(s.rateEmail.style.borderColor="#b83245",s.sendRateBtn.disabled=!0)}async function L(e){e.preventDefault();const t={rate:Number(e.target.elements["raiting-star"].value),email:e.target.elements.email.value},a=s.rateForm.dataset.id;try{await I(a,t),v.Notify.success(`Bizi değerlendirdiğiniz için teşekkürler. 
Thank you for appreciating the recipe.`)}catch(i){v.Notify.failure(i.response.data.message||"Rating has not been submited...")}f()}function j(){[...s.modalRateList.children].forEach(e=>e.classList.remove("is-rated")),s.rateEmail.style.borderColor="",s.sendRateBtn.disabled=!0,s.rateVal.textContent="0.0",s.rateForm.dataset.id="",s.rateForm.reset()}function k(){s.mainModalRecipes.classList.remove("is-hidden-modal"),s.rateModal.classList.add("is-hidden-modal"),s.closeRate.removeEventListener("click",k),s.modalRateList.addEventListener("click",b),s.rateEmail.addEventListener("input",y),s.rateForm.addEventListener("submit",L)}function f(){W(),j(),s.backdropModal.classList.add("is-hidden-modal"),s.mainModalRecipes.classList.add("is-hidden-modal"),s.rateModal.classList.add("is-hidden-modal"),s.modalRecipes.innerHTML="",q()}function $({currentTarget:e,target:t}){e===t&&f()}function M(e){e.key==="Escape"&&f()}async function H(e){try{const t=await T(e),{title:a,description:i,preview:r,rating:n,_id:o,category:p}=t,c={title:a,description:i,preview:r,rating:n,id:o,category:p};s.modalRecipes.dataset.info=`${JSON.stringify(c)}`,z(_(t)),V()}catch(t){console.error(t)}}function _(e){const t=e.ingredients,a=e.youtube?e.youtube.replace("watch?v=","embed/"):e.thumb,i=e.tags;let r="";if(i[0])for(let c=0;c<i.length;c++)r+=`<li class="recipe-tag">#${i[c]}</li>`;let n="";for(let c=0;c<t.length;c++)n+=`<li class="recipe-ingridient">${t[c].name} <span class="recipe-ps">${t[c].measure}</span></li>`;const o=e.rating>5?5 .toFixed(1):e.rating.toFixed(1);return`<div class="recipe-parts">
    ${D(a,e.description)}
    <div class="recipe-title">
      <h2 class="recipe-title-txt">${e.title}</h2>
      <div class="rating-part">
        <p class='rate'>${o}</p>
      ${R(o)}
        <p class="recipe-time">${e.time} min</p>
      </div>
      <ul class="ingridients">
        ${n}
      </ul>
    </div>
  </div>
  <ul class="recipe-tags">
    ${r}
  </ul>
  <p class="recipe-instr">${e.instructions}</p>
  </div>
`}function V(){const e=document.querySelector(".recipe-instr");S.init(e,{alwaysShowTracks:!0});const t=document.querySelector(".ingridients");S.init(t,{alwaysShowTracks:!0})}function z(e){s.modalRecipes.insertAdjacentHTML("afterbegin",e)}function q(){document.querySelector("body").classList.toggle("overflow-hidden")}function D(e,t){return e.endsWith(".jpg")?`<img class="modal-img" src="${e}" alt="${t}">`:`<iframe
      class="recipe-frame"
      src="${e}"
      frameborder="0"
      alt="${t}"
    ></iframe>`}function B({target:e}){const t=localStorage.getItem("favorites"),a=JSON.parse(t),i=JSON.parse(s.modalRecipes.dataset.info);t?a.find(r=>r.id===i.id)?(localStorage.setItem("favorites",JSON.stringify([...a.filter(r=>r.id!==i.id)])),e.textContent="Add to favorite"):(localStorage.setItem("favorites",JSON.stringify([...a,i])),e.textContent="Remove favorite"):(localStorage.setItem("favorites",JSON.stringify([i])),e.textContent="Remove favorite")}function W(){s.closeModalBtn.removeEventListener("click",f),s.backdropModal.removeEventListener("click",$),s.saveRecipeBtn.removeEventListener("click",B),s.giveRatingBtn.removeEventListener("click",w),s.closeRate.removeEventListener("click",k),s.modalRateList.removeEventListener("click",b),s.rateEmail.removeEventListener("input",y),s.rateForm.removeEventListener("submit",L),window.removeEventListener("keydown",M)}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),i=()=>{const r=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),(r?E:C)(document.body)};t.addEventListener("click",i),a.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),E(document.body))})})();const l={openModalBtn:document.querySelector(".shopping-link"),openModalBtnHero:document.querySelector(".btn-hero"),closeModalBtn:document.querySelector(".order-modal-close-btn"),backdrop:document.querySelector(".backdrop-order"),modal:document.querySelector(".modal-order"),forma:document.querySelector(".modal-form-order")};try{l.openModalBtnHero.addEventListener("click",x)}catch{}l.openModalBtn.addEventListener("click",x);l.closeModalBtn.addEventListener("click",h);l.backdrop.addEventListener("click",K);l.forma.addEventListener("submit",G);async function G(e){e.preventDefault();const{name:t,tel:a,email:i,comment:r}=e.currentTarget,n={name:t.value,phone:a.value,email:i.value,comment:r.value};try{const o=await F(n);v.Notify.success("Your order has been submitted!")}catch(o){v.Notify.failure(o.response.data.message||"Order has not been placed...")}finally{h()}}function x(){window.addEventListener("keydown",O),document.body.classList.add("overflowHidden"),l.backdrop.classList.add("active"),l.modal.classList.add("active")}function h(){document.body.classList.remove("overflowHidden"),window.removeEventListener("keydown",O),document.body.classList.remove("overflowHidden"),l.backdrop.classList.remove("active"),l.modal.classList.remove("active")}function K(e){e.currentTarget===e.target&&h()}function O(e){e.code==="Escape"&&h()}function U(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",a=e||t;document.documentElement.setAttribute("data-theme",a),document.querySelectorAll(".input-switcher").forEach(function(r){r.checked=a==="dark"})}function X(){const t=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",t),document.querySelectorAll(".input-switcher").forEach(function(i){i.checked=t==="dark"}),localStorage.setItem("theme",t)}const Y=document.querySelectorAll(".input-switcher");Y.forEach(function(e){e.addEventListener("change",X)});U();export{ie as O,se as a,Z as b,te as f,ee as g,ae as r,re as s};
//# sourceMappingURL=switcher-3wRqTQjf.js.map
