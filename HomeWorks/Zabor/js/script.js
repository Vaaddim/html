var elem = document.getElementsByClassName('illustration');
console.log(elem);
var elemLength = elem.length;
console.log(elemLength);


for (var i = 0; i < elemLength; i++){
	elem[i].addEventListener('mouseenter', hoverOn, false);
};

function hoverOn(){
	var thisSrc = this.src;
	var newSrc=thisSrc.replace('.png','_h.png');
	this.setAttribute('src',newSrc);
	this.setAttribute('class','illustrationHover');
}



for (var i = 0; i < elemLength; i++){
	elem[i].addEventListener('mouseleave', hoverOff, false);
};

function hoverOff(){
	var thisSrc = this.src;
	var newSrc=thisSrc.replace('_h.png','.png');
	this.setAttribute('src',newSrc);
	this.setAttribute('class','illustration');
}


var width = window.innerWidth;
console.log(width);
distKoeff = width*0.1;
console.log(distKoeff);


/*elem.forEach(function(item,i,elem){
	
})*/
