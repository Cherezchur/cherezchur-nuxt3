import{f as s,g as i,n}from"./entry.cd2f9024.js";import"./swiper-vue.ae598e73.js";const f=s(async(a,o)=>{let e,t;const r=String(a.path);if(a.matched.length!==1)return;const{galleryPaths:l}=([e,t]=i(()=>$fetch("/api/gallery-params")),e=await e,t(),e);l.includes(r)||n("/gallery")});export{f as default};