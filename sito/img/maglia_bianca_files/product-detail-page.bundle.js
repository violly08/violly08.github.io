"use strict";(self.webpackChunkshopify_universal_theme=self.webpackChunkshopify_universal_theme||[]).push([[24],{6316:(e,a,t)=>{function n(){var e,a=window.location.search;if(!a)return 0;var t=new URLSearchParams(a).get("variant");if(!t)return 0;var n=document.querySelector('[data-variant-id="'.concat(t,'"]'));return(null==n||null===(e=n.dataset)||void 0===e?void 0:e.index)||0}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(!e){var a=window.location.search;a&&(e=new URLSearchParams(a).get("variant")||void 0)}if(!e){var t=document.querySelector(".template-product__wrapper[data-initial-variant]");t instanceof HTMLElement&&(e=t.dataset.initialVariant)}if(e){var n=document.querySelector(".pdp-media-tablet .vertical-scroll-tiered"),r=document.querySelectorAll(".pdp-media-tablet [data-pdp-media-item]"),i=document.querySelectorAll('.pdp-media-tablet [data-variant-id="'.concat(e,'"]'));i&&(r.forEach((function(e){e.style.order="",e.classList.remove("col-span-2")})),i.forEach((function(e,a){0===a&&n&&e.classList.add("col-span-2"),e.style.order=-999+a})))}}t.d(a,{C:()=>n,t:()=>r}),document.addEventListener("DOMContentLoaded",(function(){r()}))}},e=>{e(e.s=6316)}]);