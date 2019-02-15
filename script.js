const parallax = document.getElementbyId("parallax");
window.addEventListener("scroll",function(){
	let offset = window.pageYoffset;
	parallax.style.backgroundPositionY = offset*0.7 + "px";
})