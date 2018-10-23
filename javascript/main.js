var cookie=document.getElementById("cookie");
cookie.addEventListener("click", more);
var countCookie=document.getElementById("countCookie");
var scoreCookie=0;
var multiply=document.getElementById("multiply");
var multiplylevel=1;
function  more(){
	scoreCookie=scoreCookie+1;
document.getElementById("countCookie").innerHTML=scoreCookie;
document.title=scoreCookie+"Cookies"
	}
	function multiplyByLevel(){
		if(scoreCookie>=10){
	scoreCookie=scoreCookie*multiplylevel;
	multiplylevel=multiplylevel+1;
	document.getElementById("multiply").innerHTML=multiplylevel;
	document.getElementById("countCookie").innerHTML=scoreCookie;
	document.title=scoreCookie+"Cookies";
		
}else{
	alert("you need more than 10")
}
	}

function multiplyBySelf(){
	if(scoreCookie>=100){
	scoreCookie=scoreCookie*scoreCookie;
	document.getElementById("countCookie").innerHTML=scoreCookie;
	document.title=scoreCookie+"Cookies"

}else{
	alert("you need more than 100")
}
}

function auto(){
	   if(scoreCookie>=200){
		scoreCookie=scoreCookie+1;
      console.log("Fgfdg")
      document.getElementById("countCookie").innerHTML=scoreCookie;
	document.title=scoreCookie+"Cookies"

	setInterval(auto, 5000);
}else{
	alert("you need more than 200")
}
	
}
