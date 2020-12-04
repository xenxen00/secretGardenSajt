var nizLinkova=["#oNama", "#usluge", "#whyUs", "#", "#"];
var nizTekst=["About Us", "Bloomy Solutions", "Why Us", "Contact","Documentation"];


console.log(nizTekst); //izbrisi kasnije

//kreiranje menija

var ulNav=document.createElement('ul');

for(let i=0; i<nizLinkova.length; i++){
    var liTag=document.createElement('li');
    var aTag=document.createElement('a');
    att=document.createAttribute('href');
    att.value=nizLinkova[i];
    aTag.setAttributeNode(att);
    aTagSadrzaj=document.createTextNode(nizTekst[i]);
   
    aTag.appendChild(aTagSadrzaj);
    liTag.appendChild(aTag);
    ulNav.appendChild(liTag);
}
navBar.appendChild(ulNav);
//hamburger.appendChild(ulNav);

var ulNav2=document.createElement('ul');
for(let i=0; i<nizLinkova.length; i++){
    var liTag2=document.createElement('li');
    var aTag2=document.createElement('a');
    att2=document.createAttribute('href');
    att2.value=nizLinkova[i];
    aTag2.setAttributeNode(att2);
    aTagSadrzaj2=document.createTextNode(nizTekst[i]);
   
    aTag2.appendChild(aTagSadrzaj2);
    liTag2.appendChild(aTag2);
    ulNav2.appendChild(liTag2);
}
hamburger.appendChild(ulNav2);






