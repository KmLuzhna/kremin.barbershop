var width,imagesPlus=document.querySelectorAll(".slider .slider-line li"),sliderLine=document.querySelector(".slider .slider-line"),elem=document.querySelector(".element"),count=0;function init(){console.log("resize"),width=document.querySelector(".slider").offsetWidth,sliderLine.style.width=width*imagesPlus.length+"px",imagesPlus.forEach((function(e){e.style.width=width+"px",e.style.height="auto"})),rollSlider()}function rollSlider(){sliderLine.style.transform="translate(-"+count*width+"px)"}function rollSliderNext(){var e=document.querySelector(".element-list"),t=document.querySelector(".current"),l=t.nextElementSibling,r=e.firstElementChild,i=e.lastElementChild;l?(t.classList.remove("current"),l.classList.add("current")):t===i&&(t.classList.remove("current"),r.classList.add("current")),sliderLine.style.transform="translate(-"+count*width+"px)"}function rollSliderPev(){var e=document.querySelector(".element-list"),t=document.querySelector(".current"),l=t.previousElementSibling,r=e.firstElementChild,i=e.lastElementChild;l?(t.classList.remove("current"),l.classList.add("current")):t===r&&(t.classList.remove("current"),i.classList.add("current")),sliderLine.style.transform="translate(-"+count*width+"px)"}init(),window.addEventListener("resize",init),document.querySelector(".slider-next").addEventListener("click",(function(){++count>=imagesPlus.length&&(count=0),rollSliderNext()})),document.querySelector(".slider-prev").addEventListener("click",(function(){--count<0&&(count=imagesPlus.length-1),rollSliderPev()}));
//# sourceMappingURL=index.4acdc94c.js.map
