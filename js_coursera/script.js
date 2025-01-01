function update(Pic){
	const old=document.getElementById("image");
	old.innerHTML=Pic.alt;
	old.style.backgroundImage="url("+Pic.src+")";
}



function FocusImg(Pic){
	Pic.style.opacity=1;
}



function BlurImg(Pic){
	Pic.style.opacity=0.5;

}




function UnDo(){
	const old=document.getElementById("image");
	old.style.backgroundImage="url('')";
    	old.innerHTML="Hover over an image below to display here";

}



function Tab(){
	let arr=document.querySelectorAll("#gallery .preview");
	for (let i=0; i<arr.length; i++){
		console.log("Image"+i);
		arr[i].setAttribute("tabindex","0");
		arr[i].style.opacity=0.5;
	}

}
