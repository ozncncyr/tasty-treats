import{r as re,s as ne,O as H,f as oe,a as se,b as ce,g as ae}from"./assets/switcher-DJFXV1yO.js";import{a as L,S as ie,d as le,N as de,b as ue}from"./assets/vendor-CsIy9GeN.js";const _="https://tasty-treats-backend.p.goit.global/api/recipes";function N(){const e=window.innerWidth;if(e>=1280)return"per_page=9&limit=9";if(e>=768&&e<1280)return"per_page=8&limit=8";if(e<768)return"per_page=6&limit=6"}async function me(e,r,n="",o="",s=""){const c=`${_}?title=${e}&page=${r}&${N()}&time=${n}&area=${o}&ingredient=${s}`;try{const{data:t}=await L.get(c);return t}catch{throw new Error("An error occurred while fetching images.")}}async function O(e,r){const n=`${_}?category=${e}&page=${r}&${N()}`;try{const{data:o}=await L.get(n);return o}catch{throw new Error("An error occurred while fetching images.")}}new ie(".swiper",{pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:!0},spaceBetween:10,autoplay:{delay:5e3,disableOnInteraction:!1},grabCursor:!0,loop:!0,mousewheel:{invert:!0},slidesPerView:1,slidesPerGroup:1});const S=document.querySelector(".first-cook"),b=document.querySelector(".second-cook"),$=document.querySelector(".third-cook"),M=document.querySelector(".first-cook-center-card"),q=document.querySelector(".second-cook-center-card"),B=document.querySelector(".third-cook-center-card"),I=document.querySelector(".first-cook-last-card"),A=document.querySelector(".second-cook-last-card"),T=document.querySelector(".third-cook-last-card"),pe="https://tasty-treats-backend.p.goit.global/api/events",R=async()=>{try{return(await L.get(`${pe}`)).data}catch(e){console.log(e)}};R().then(e=>{const{cook:r,topic:n}=e[0],o=({firstSlideCook:t})=>`<img src="${t.imgUrl}"
          srcset="${t.imgWebpUrl}" alt ="${t.name}"
          class="swiper-slide-img cook-card" />`,s=({firstSlideTopic:t})=>`<img src="${t.previewUrl}" alt = "masterclass"
        class="swiper-slide-img food-center-card" />
      <p class="master-class">${t.name}</p>
      <p class="master-class-coutry">${t.area}</p>`,c=({firstSlideTopic:t})=>`<img src="${t.imgUrl}" alt = "tasty food"
      class="swiper-slide-img big-slide-salat-img" />`;try{if(S){const t=o({firstSlideCook:r});S.innerHTML=t}}catch(t){console.error(t)}try{if(M){const t=s({firstSlideTopic:n});M.innerHTML=t}}catch(t){console.error(t)}try{if(I){const t=c({firstSlideTopic:n});I.innerHTML=t}}catch(t){console.error(t)}return e}).then(e=>{const{cook:r,topic:n}=e[1],o=({secondSlideCook:t})=>`<img src="${t.imgUrl}"
           srcset="${t.imgWebpUrl}" alt ="${t.name}"
           class="swiper-slide-img cook-card" />`,s=({secondSlideTopic:t})=>`<img src="${t.previewUrl}" alt = "masterclass"
    class="swiper-slide-img food-center-card" />
  <p class="master-class">${t.name}</p>
  <p class="master-class-coutry">${t.area}</p>`,c=({secondSlideTopic:t})=>`<img src="${t.imgUrl}" alt = "tasty food"
        class="big-slide-img" />`;try{if(b){const t=o({secondSlideCook:r});b.innerHTML=t}}catch(t){console.error(t)}try{if(q){const t=s({secondSlideTopic:n});q.innerHTML=t}}catch(t){console.error(t)}try{if(A){const t=c({secondSlideTopic:n});A.innerHTML=t}}catch(t){console.error(t)}return e}).then(e=>{const{cook:r,topic:n}=e[2],o=({thirdSlideCook:t})=>`<img src="${t.imgUrl}"
             srcset="${t.imgWebpUrl}" alt ="${t.name}"
            class="swiper-slide-img cook-card" />`,s=({thirdSlideTopic:t})=>`<img src="${t.previewUrl}" alt = "masterclass"
    class="swiper-slide-img food-center-card" />
  <p class="master-class">${t.name}</p>
  <p class="master-class-coutry">${t.area}</p>`,c=({thirdSlideTopic:t})=>`<img
        src="${t.imgUrl}" alt = "tasty food"
        class="big-slide-img pancakes-img"
      />`;try{if($){const t=o({thirdSlideCook:r});$.innerHTML=t}}catch(t){console.error(t)}try{if(B){const t=s({thirdSlideTopic:n});B.innerHTML=t}}catch(t){console.error(t)}try{if(T){const t=c({thirdSlideTopic:n});T.innerHTML=t}}catch(t){console.error(t)}return e}).catch(e=>console.error(e));window.addEventListener("load",R);const i=document.querySelector(".search-input"),u=document.querySelector("#image-container"),g=document.getElementById("pagination"),P=document.getElementById("spinner"),y=document.querySelector(".list-area"),C=document.querySelector(".list-ingred"),fe=document.querySelector(".input-section"),U=document.querySelector(".list-time"),m=document.querySelector(".cancel-button-input");document.querySelector(".clear-button").addEventListener("click",function({target:e}){document.querySelector(".list-time").value="",document.querySelector(".search-input").value="",document.querySelector(".list-area").value="",document.querySelector(".list-ingred").value="",w(e)});i.addEventListener("input",()=>{i.value.trim()!==""?m.style.display="inline-block":m.style.display="none"});m.addEventListener("click",function({target:e}){i.value="",m.style.display="none",w(e)});const F=document.querySelector(".search-icon");i.addEventListener("focus",()=>{F.classList.add("active")});i.addEventListener("blur",()=>{F.classList.remove("active")});let d="",a="",k="",h="",v="";const ge=300;l();function ye(e){const r=JSON.parse(e.dataset.info);e.classList.toggle("active");const n=JSON.parse(localStorage.getItem("favorites"))??[];e.classList.contains("active")?localStorage.setItem("favorites",JSON.stringify([...n,r])):localStorage.setItem("favorites",JSON.stringify([...n.filter(o=>o.id!==r.id)]))}function Ce({target:e}){if(!e.closest("button"))return;const r=e.closest("button");r.name==="favorite"&&ye(r),r.name==="details"&&H(r)}u.addEventListener("click",Ce);async function ke(){try{return(await oe()).reduce((r,n)=>r+ve(n))}catch{}}async function he(){try{return(await se()).reduce((r,n)=>r+Le(n))}catch{}}function ve(e){const{name:r}=e;return`<option value="${r}">${r}</option>`}function Le(e){const{name:r,_id:n}=e;return`<option value="${n}">${r}</option>`}async function we(){try{const e=await ke();Se(e)}catch{}}async function Ee(){try{const e=await he();be(e)}catch{}}function Se(e){y.insertAdjacentHTML("beforeend",e)}function be(e){C.insertAdjacentHTML("beforeend",e)}const $e=le(Me,ge);fe.addEventListener("input",$e);function Me(e){const r=e.target.value;if(e.target.classList.contains("search-input")){if(!r)return i.value="";a=qe(r)}e.target.classList.contains("list-area")&&(v=r),e.target.classList.contains("list-ingred")&&(h=r),e.target.classList.contains("list-time")&&(k=r),u.innerHTML="",j(),l()}function qe(e){const r=e.trim();return`${r[0].toUpperCase()}${r.slice(1,r.length)}`}function Be(){P.style.display="block"}function Ie(){P.style.display="none"}async function l(e=1,r=me){try{Be(),we(),Ee();const{page:n,perPage:o,totalPages:s,results:c}=await r(a,e,k,v,h);if(!c.length)throw new Error("No result");const t=await[...c.map(({title:f,description:K,preview:X,rating:Z,_id:ee,category:te})=>re(f,K,X,Z,ee,te))].join("");s>1?(g.style.display="block",ne(n,o,s,f=>{l(f,r)})):g.style.display="none",u.innerHTML=t,d=a}catch{U.firstElementChild.setAttribute("selected","selected"),y.firstElementChild.setAttribute("selected","selected"),C.firstElementChild.setAttribute("selected","selected"),g.style.display="none",de.Notify.warning("No result for your request, please try again!"),a="",k="",h="",v="",d===a&&(d=""),d?a=d:a="",l()}finally{U.firstElementChild.removeAttribute("selected","selected"),y.firstElementChild.removeAttribute("selected","selected"),C.firstElementChild.removeAttribute("selected","selected"),Ie()}}function D(e=""){a=e}function Ae(e,r){const n=document.createElement("button");return n.textContent=e,n.classList.add("button-category"),n.addEventListener("click",r),n}async function Te(){const e=document.getElementById("categoriesContainer"),r=e.querySelector(".scroll-content");r.innerHTML="",(await ce()).forEach(o=>{const s=Ae(o.name,()=>{D(o.name),u.innerHTML="",l(1,O),document.querySelectorAll(".isUse").forEach(t=>{t.classList.remove("isUse")}),s.classList.add("isUse")});r.appendChild(s)}),ue.init(e,{alwaysShowTracks:!0})}const Ue=document.getElementById("categoriesContainer"),x=document.createElement("div");x.className="scroll-content";Ue.appendChild(x);const W=document.getElementById("allCategoriesButton");W.addEventListener("click",w);function w({target:e}){j(e),D(),u.innerHTML="",l(1,O),Array.from(document.querySelectorAll(".scroll-content button")).forEach(n=>{n.classList.remove("isUse")})}Te();function j(e=W){document.querySelectorAll(".isUse").forEach(n=>n.classList.remove("isUse")),e.classList.add("isUse")}document.addEventListener("DOMContentLoaded",function(){document.getElementById("scrollButton").addEventListener("click",function(){He(1e3)})});function He(e){const r=-window.scrollY/(e/30),n=setInterval(function(){window.scrollY!==0?window.scrollBy(0,r):clearInterval(n)},15)}window.addEventListener("scroll",function(){var e=window.pageYOffset||document.documentElement.scrollTop,r=document.getElementById("scrollButton");e>100?r.style.display="block":r.style.display="none"});const J=document.querySelector(".popular-recipes-list");J.addEventListener("click",Oe);async function _e(){try{const e=await ae();Ne(e)}catch(e){console.error("Error while rendering popular recipes:",e)}}function Ne(e){const r=e.map(n=>`<li class="popular-recipes-item data-id="${n._id}"">
      <img class="popular-recipes-image" src="${n.preview}" alt="${n.title}" />
      <div data-id="${n._id}">
      <p class="popular-recipes-item-title">${n.title}</p>
      <p class="popular-recipes-item-description">${n.description}</p>
      </div>
    </li>`).join("");J.innerHTML=r}_e();function Oe(e){const r=e.target.parentNode;H(r)}const Re=document.getElementById("footer-btn"),p=document.querySelector(".team__backdrop"),Y=document.querySelector(".team__modal-close-btn"),z=document.querySelector("body");Re.addEventListener("click",Pe);function Pe(e){e.preventDefault(),p.classList.remove("is-hidden"),document.body.classList.add("modal-open"),Fe()}function V(e){e.preventDefault(),e.code==="Escape"&&E()}function G(e){e.target.closest(".team__wrapper")||E()}function Q(e){e.preventDefault(),E()}function Fe(){document.addEventListener("keydown",V),p.addEventListener("click",G),Y.addEventListener("click",Q),z.style.overflow="hidden"}function E(){document.removeEventListener("keydown",V),p.removeEventListener("click",G),Y.removeEventListener("click",Q),p.classList.add("is-hidden"),document.body.classList.remove("modal-open"),z.style.overflow="auto"}
//# sourceMappingURL=index.js.map
