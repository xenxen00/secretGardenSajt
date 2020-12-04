/*btnPrijava.onclick=proveriPodatke;

function proveriPodatke(){
    var objIme, objPrezime, objIndeks, objFinansije, objSmer, objDomaci, nizPodaci, nizGreske;



objIme = ime.value;
objPrezime = prezime.value;
objIndeks=brInd.value;
objFinansije=document.getElementsByName("radF");
objSmer=Smer.value;
objDomaci=document.getElementsByName("ChD");

nizPodaci=[];
nizGreske=[];


//provera imena
if(objIme==""){
    nizGreske.push("Niste uneli ime");
}
else{
    nizPodaci.push(objIme);
}

//provera prezimena
if(objPrezime=="" || objPrezime.length<3){
    nizGreske.push("Niste uneli prezime kako treba");
}
else{
    nizPodaci.push(objPrezime);
}

//provera indeksa
if(objIndeks=="" || objIndeks.indexOf("/")==-1){
    nizGreske.push("Niste uneli indeks pravilno");
}
else{
    nizPodaci.push(objIndeks);
}

//provera nacina finansiranja
var VrednostFinansije="";

for(let i=0; i<objFinansije.length; i++){
    if(objFinansije[i].checked) {
        VrednostFinansije=objFinansije[i].value;
        break;
    
}
}
if(VrednostFinansije==""){
    nizGreske.push("Niste izabrali finansije");
}
else nizPodaci.push(objFinansije);

//provera smera
var x = document.getElementById("Smer").selectedIndex.value;
if(x=="0"){
    nizGreske.push("Niste izabrali smer");

}
else nizPodaci.push(x);

var vrednostDomaci="";
for(let i; i<objDomaci.length; i++){
    if(objDomaci[i].checked){
        vrednostDomaci=objDomaci[i].value; break;
    }
}
if(vrednostDomaci=""){
    nizGreske.push("Niste izabrali domaci");

}
else nizPodaci.push(objDomaci);

var ispis="<ul class='list-group'>";
if(nizGreske!=0){
    for(let greska of nizGreske){
        ispis+=`<li class="list-group-item">${greska}</li>`;
    }
}
else{
    for(let podatak of nizPodaci){
        ispis += `<li class="list-group-item">${podatak}</li>`;
    }
}
ispis+="</ul>";
document.querySelector("#ispis").innerHTML = ispis;
}*/
btnPrijava.onclick=proveriPodatke;

function proveriPodatke(){
    var objIme, objPrezime, objIndeks, objFinansije, objSmer, objDomaci;



objIme = ime.value;
objPrezime = prezime.value;
objIndeks=brInd.value;
objFinansije=document.getElementsByName("radF");
objSmer=Smer.value;
objDomaci=document.getElementsByName("ChD");




//provera imena
if(objIme.length<3){
   document.getElementById("ime").nextElementSibling.classList.add("prikaz");
}
else{
    objIme.nextElementSibling.ClassList.remove("prikaz");
}

//provera prezimena
if(objPrezime=="" || objPrezime.length<3){
    document.getElementById("prezime").nextElementSibling.classList.add("prikaz");
}
else{
    objPrezime.nextElementSibling.ClassList.remove("prikaz");
}

//provera indeksa
if(objIndeks=="" || objIndeks.indexOf("/")==-1){
    document.getElementById("brInd").nextElementSibling.classList.add("prikaz");
}
else{
    objIndeks.nextElementSibling.ClassList.remove("prikaz");
}

//provera nacina finansiranja
var VrednostFinansije="";

for(let i=0; i<objFinansije.length; i++){
    if(objFinansije[i].checked) {
        VrednostFinansije=objFinansije[i].value;
        break;
    
}
}
if(VrednostFinansije==""){
    document.getElementById("finans").nextElementSibling.classList.add("prikaz");
}
else objFinansije.nextElementSibling.ClassList.remove("prikaz");

//provera smera
var x = document.getElementById("Smer").selectedIndex.value;
if(x=="0"){
    document.getElementById("Smer").nextElementSibling.classList.add("prikaz");

}
else document.getElementById("Smer").nextElementSibling.classList.remove("prikaz");

var vrednostDomaci="";
for(let i; i<objDomaci.length; i++){
    if(objDomaci[i].checked){
        vrednostDomaci=objDomaci[i].value; break;
    }
}
if(vrednostDomaci=""){
    document.getElementById("domaciZ").nextElementSibling.classList.add("prikaz");


}
else document.getElementById("domaciZ").nextElementSibling.classList.remove("prikaz");





}
