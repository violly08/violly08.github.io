(self.webpackChunkshopify_universal_theme=self.webpackChunkshopify_universal_theme||[]).push([[30],{8123:(e,r,t)=>{"use strict";t(4730)},4730:()=>{class e extends HTMLElement{constructor(){super(),this.urlToShare=document.location.href,this.label=this.querySelector("[data-button-label]"),this.shareLabel=window.shareStrings.copyToClipboard,this.successLabel=window.shareStrings.successMessage,this.shareLabelError=window.shareStrings.copyToClipboardError,this.shareUrlError=window.shareStrings.shareUrlError,!navigator.share&&navigator.clipboard&&(this.label.innerHTML=window.shareStrings.copyToClipboard),this.addEventListener("click",(e=>this.runShareAction(e,this))),this.addEventListener("keydown",(e=>this.shareKeyboardEvent(e,this)))}shareKeyboardEvent(e,r){("Enter"===e.key||"Spacebar"===e.key||" "===e.key||32===e.key)&&this.runShareAction(e,r)}runShareAction(e,r){if(e.preventDefault(),e.stopPropagation(),navigator.share||!navigator.clipboard)return this.openNavigatorShare(e,r);navigator.clipboard.writeText(this.urlToShare).then((()=>{this.label.innerHTML=this.successLabel,setTimeout((()=>{this.label.innerHTML=this.shareLabel}),2e3)})).catch((e=>{e&&console.log(this.shareLabelError)})).finally((()=>{r.focus()}))}openNavigatorShare(e,r){return navigator.share({url:this.urlToShare,title:document.title}).catch((e=>{e&&console.log(this.shareUrlError,e)})).finally((()=>{r.focus()})),!1}}customElements.get("share-button")||customElements.define("share-button",e)}},e=>{e(e.s=8123)}]);