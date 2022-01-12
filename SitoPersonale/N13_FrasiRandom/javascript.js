function CreaUnaFrase() {
let soggetto="";
let verbo="";
let complementooggetto="";

soggetto=document.getElementById('soggetto').value;
document.getElementById('inputsoggetto').innerHTML=soggetto;

verbo=document.getElementById('verbo').value;
document.getElementById('inputverbo').innerHTML=verbo;


complementooggetto=document.getElementById('co').value;
document.getElementById('inputCO').innerHTML=complementooggetto;

let frase="";
frase=soggetto+ ", "+verbo+ " e "+complementooggetto;

document.getElementById('out').innerHTML=frase;
}