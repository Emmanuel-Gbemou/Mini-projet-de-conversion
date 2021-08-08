
function conversion(){
let celsius=document.getElementById("celsius") ;
let fahrenheit=document.getElementById("fahrenheit") ;
let reponse=document.querySelector("div.reponse") ;

if(celsius.value){
fahrenheit.value=(celsius.value*9/5) + 32 ;
reponse.textContent=celsius.value +" °C=> "+fahrenheit.value+" °F" ;
}
setTimeout(conversion , 1000) ;
}56
conversion();