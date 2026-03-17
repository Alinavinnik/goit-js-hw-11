import{a as d,i as c}from"./assets/vendor-Btw-Mag-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(s){return d.get("https://pixabay.com/api/",{params:{key:"55036420-a7a19d5751e273048ff10c958",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const h=document.querySelector(".gallery");document.querySelector(".loader");function y(s){function r(e){const{webformatURL:t,tags:n,likes:l,views:u,comments:m,downloads:f,largeImageURL:p}=e;return`<figure class="photo-card">
              <a>${p}</a><img src="${t}" alt="${n}"/>

              <figcaption class="info">
              <div class="info-item">
              <p>Likes: <span>${l}</span> </p></div>
               <div class="info-item"><p>Views: <span>${u}</span></p></div>
                <div class="info-item"><p>Comments: <span>${m}</span></p></div>
                 <div class="info-item"><p>Downloads: <span>${f}</span></p></div>
              </figcaption>
            </figure>`}function i(e){return e.map(r).join("")}const o=i(s);return h.innerHTML=o}const a=document.querySelector(".form");a.addEventListener("submit",v);function v(s){s.preventDefault();const i=new FormData(a).get("search-text");if(i.trim()===""){c.show({message:"Please enter a search term",position:"topRight"});return}else g(i).then(o=>{o.hits.length?y(o.hits):c.show({message:"Sorry, there are no images matching your search query.Please try again!",position:"topRight"})});a.reset()}
//# sourceMappingURL=index.js.map
