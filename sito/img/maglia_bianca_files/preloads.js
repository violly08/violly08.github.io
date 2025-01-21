
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.13f74d1f16d1ab4249f4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.latest.en.fd7b807db2d29cf8deb9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/346.latest.en.9a281932cf6ae11eb09b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/891.latest.en.051286e30b2bab5510b4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.e3d8e17da48dd8427ae8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/977.latest.en.e1a0ded7d00403072415.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/535.latest.en.279632d5b190d715dfcc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/554.latest.en.fa5fd1096dadbc1338c4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/307.latest.en.85d320635fdc7a8792cd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.f38ed769cc88d3663bf1.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.latest.en.c2dc1f07062250e60370.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.cbda45b43fa1d875bd53.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.b1a85f925b41702ad78f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0011/4651/9637/files/5XYQqvxLmD9Ojx3xQCHoMeAoxJQcQsQf_x320.png?v=1709471440"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  