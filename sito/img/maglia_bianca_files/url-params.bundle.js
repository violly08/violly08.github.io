(self.webpackChunkshopify_universal_theme=self.webpackChunkshopify_universal_theme||[]).push([[36],{4715:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===e(i)?i:String(i)),n)}var i}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.getParamsFromUrl()}var r,o;return r=e,(o=[{key:"getParamsFromUrl",value:function(){var e=window.location.toString().split("?");if(e.length>1){var t=e[0],r=e[1].split("&");this.analyzeParams(r,t)}}},{key:"analyzeParams",value:function(e,t){e.forEach((function(e){"login_web=true"===e?(history.replaceState(null,"",t),Shopify.analytics.publish("customer_login_success",{method:"email"})):"register_web=true"===e&&(history.replaceState(null,"",t),Shopify.analytics.publish("customer_register_success",{method:"email"}))}))}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}())}},e=>{e(e.s=4715)}]);