!function(){"use strict";var e=window.Cookies.noConflict();document.getElementById("mobile-lang-select").addEventListener("change",(function(){var n=this.value,t=this.dataset.canonical,i="/";"en"!==n&&(i+=n+"/"),e.set("nf_lang",n,{expires:365}),location.href=i+t}))}();