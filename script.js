var std = 5;
var moong = 240;
var water = 1.06;
var jaggery = 240;
var cashew = 15;
var cardamom = 2.1;
var cumin = 2.1;
var ghee = 8.4;
var coco = 0.25;
var num = localStorage.getItem("mvalue");

function convert(a){
    return (a/std)*num;
}
if (convert(moong) >= 1000){
    document.getElementById("moong").innerHTML = (convert(moong)/1000).toFixed(2)+"kg";
}
else{
    document.getElementById("moong").innerHTML = (convert(moong)).toFixed(2)+"gms";
}

if (convert(water) < 1){
    document.getElementById("water").innerHTML = (convert(water)*1000).toFixed(2)+"ml";
}
else{
    document.getElementById("water").innerHTML = (convert(water)).toFixed(2)+"L";
}

if (convert(coco) < 1){
    document.getElementById("coco").innerHTML = (convert(coco)*1000).toFixed(2)+"ml";
}
else{
    document.getElementById("coco").innerHTML = (convert(coco)).toFixed(2)+"L";
}

if (convert(ghee) >= 1000){
    document.getElementById("ghee").innerHTML = (convert(ghee)/1000).toFixed(2)+"kg";
}
else{
    document.getElementById("ghee").innerHTML = (convert(ghee)).toFixed(2)+"gms";
}

if (convert(cashew) >= 1000){
    document.getElementById("cash").innerHTML = (convert(cashew)/1000).toFixed(2)+"kg";
}
else{
    document.getElementById("cash").innerHTML = (convert(cashew)).toFixed(2)+"gms";
}

if (convert(cardamom) >= 1000){
    document.getElementById("card").innerHTML = (convert(cardamom)/1000).toFixed(2)+"kg";
}
else{
    document.getElementById("card").innerHTML = (convert(cardamom)).toFixed(2)+"gms";
}

if (convert(jaggery) >= 1000){
    document.getElementById("jag").innerHTML = (convert(jaggery)/1000).toFixed(2)+"kg";
}
else{
    document.getElementById("jag").innerHTML = (convert(jaggery)).toFixed(2)+"gms";
}

if (convert(cumin) >= 1000){
    document.getElementById("cumin").innerHTML = (convert(cumin)/1000).toFixed(2)+"kg";
}
else{
    document.getElementById("cumin").innerHTML = (convert(cumin)).toFixed(2)+"gms";
}




// document.getElementById("moong").innerHTML = parseInt(convert(moong))+"gms"; 
// document.getElementById("water").innerHTML = parseInt(convert(water))+"L";
// document.getElementById("jag").innerHTML = parseInt(convert(jaggery))+"gms";
// document.getElementById("cash").innerHTML = parseInt(convert(cashew))+"gms";
// document.getElementById("cumin").innerHTML = parseInt(convert(cumin))+"gms";
// document.getElementById("ghee").innerHTML = parseInt(convert(ghee))+"gms";
// document.getElementById("card").innerHTML = parseInt(convert(cardamom))+"gms";

// console.log(convert(moong));

