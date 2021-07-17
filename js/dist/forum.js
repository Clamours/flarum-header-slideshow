module.exports=function(e){var t={};function r(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["forum/components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["common/components/Page"]},function(e,t,r){"use strict";r.r(t);var s=r(1),i=r(0),o=r.n(i),n=r(2),l=r.n(n);function a(e,t){var r=this;this.slides=e.querySelector(".carousel__slides"),this.controls=e.querySelector(".carousel__controls"),this.carouselSpeed=t||5e3,this.slides.addEventListener("keydown",(function(e){r.handleKeyPress(e)})),this.slides.parentElement.addEventListener("touchstart",(function(e){r.handleSwipe(e)})),this.init()}a.prototype.init=function(){var e=this;this.current=this.slides.firstElementChild,this.createControls(),this.current.classList.add("carousel__slide--current"),this.carouselCycle=setInterval((function(){e.nextSlide()}),this.carouselSpeed)},a.prototype.updateCarousel=function(e){var t=this;clearInterval(this.carouselCycle),Array.from(this.slides.children).forEach((function(e){return e.classList.remove("carousel__slide--current")})),e.classList.add("carousel__slide--current");var r=this.getCurrentSlideIndex(e);this.updateControls(r),this.current=e,this.carouselCycle=setInterval((function(){t.nextSlide()}),this.carouselSpeed)},a.prototype.nextSlide=function(){this.updateCarousel(this.current.nextElementSibling||this.slides.firstElementChild)},a.prototype.prevSlide=function(){this.updateCarousel(this.current.previousElementSibling||this.slides.lastElementChild)},a.prototype.handleControls=function(e,t){var r=Array.from(this.slides.children)[t];return this.updateCarousel(r),this.carouselCycle},a.prototype.handleKeyPress=function(e){var t;if("ArrowRight"===e.key)t=this.current.nextElementSibling||this.slides.firstElementChild;else{if("ArrowLeft"!==e.key)return;t=this.current.previousElementSibling||this.slides.lastElementChild}this.updateCarousel(t)},a.prototype.createControls=function(){for(var e=this,t=this.slides.children.length,r=0;r<t;r++){var s=document.createElement("div");s.setAttribute("role","button"),s.setAttribute("class","carousel__control"),this.controls.insertAdjacentElement("beforeend",s)}this.controls.firstElementChild.classList.add("carousel__control--current"),Array.from(this.controls.children).forEach((function(t,r){t.addEventListener("click",(function(){return e.handleControls(t,r)}))}))},a.prototype.updateControls=function(e){var t=Array.from(this.controls.querySelectorAll(".carousel__control"));t.forEach((function(e){return e.classList.remove("carousel__control--current")})),t[e].classList.add("carousel__control--current")},a.prototype.getCurrentSlideIndex=function(e){return Array.from(this.slides.querySelectorAll(".carousel__slide")).findIndex((function(t){return t===e}))},a.prototype.handleSwipe=function(e){var t=this,r=e.touches[0].clientX;function s(e,t){t.slides.removeEventListener("touchend",s);var i=e.changedTouches[0].clientX;r<i&&i-r>120?t.prevSlide():r>i&&r-i>120&&t.nextSlide()}this.slides.addEventListener("touchend",(function(e){s(e,t)}))};var c=a,u=r(3),d=r.n(u);o.a.initializers.add("justoverclock/header-slideshow",(function(){Object(s.extend)(l.a.prototype,"view",(function(e){if(e.children&&e.children.splice){var t=o.a.forum.attribute("ImageOne"),r=o.a.forum.attribute("ImageTwo"),s=o.a.forum.attribute("ImageThree"),i=o.a.forum.attribute("LinkOne"),n=o.a.forum.attribute("LinkTwo"),l=o.a.forum.attribute("LinkThree"),a=m("div",{className:"carousel"},[m("div",{className:"carousel__slides",tabindex:"0"},[m("div",{className:"carousel__slide"},[m("div",{className:"carousel__slide-content"},[m("h2",{className:"carousel__slide-title"},o.a.forum.attribute("TitleSlide1")||"Set your title"),m("p",{className:"carousel__slide-description"},o.a.forum.attribute("TextSlide1")||"Set the slogan for your first slide into the admin panel"),m("a",{className:"carousel__slide-button",href:i},o.a.forum.attribute("BtnSlide1")||"Button Text Here")]),m("img",{className:"carousel__slide-image",src:t})]),m("div",{className:"carousel__slide"},[m("div",{className:"carousel__slide-content"},[m("h2",{className:"carousel__slide-title"},o.a.forum.attribute("TitleSlide2")||"Set your title"),m("p",{className:"carousel__slide-description"},o.a.forum.attribute("TextSlide2")||"Set the slogan for your second slide into the admin panel"),m("a",{className:"carousel__slide-button",href:n},o.a.forum.attribute("BtnSlide2")||"Button Text Here")]),m("img",{className:"carousel__slide-image",src:r})]),m("div",{className:"carousel__slide"},[m("div",{className:"carousel__slide-content"},[m("h2",{className:"carousel__slide-title"},o.a.forum.attribute("TitleSlide3")||"Set your title"),m("p",{className:"carousel__slide-description"},o.a.forum.attribute("TextSlide3")||"Set the slogan for your third slide into the admin panel"),m("a",{className:"carousel__slide-button",href:l},o.a.forum.attribute("BtnSlide3")||"Button Text Here")]),m("img",{className:"carousel__slide-image",src:s})])]),m("div",{className:"carousel__controls"})]);e.children.splice(0,0,a)}}))})),Object(s.extend)(d.a.prototype,"oncreate",(function(e){var t=document.getElementsByClassName("Hero WelcomeHero");if(new c(document.querySelector(".carousel"),1e3*o.a.forum.attribute("TransitionTime")),o.a.current.matches(l.a))for(var r=0;r<t.length;r++)t[r].style.display="none"}))}]);
//# sourceMappingURL=forum.js.map