

const mensaje = `Oye...

Jacqueline...

Mi preciosa...

Tengo algo importante que decirte...

Y espero que me regales unos minutitos de tu tiempo ❤️`;



let i = 0;



function escribir(){

if(i < mensaje.length){

document.getElementById("texto").innerHTML += mensaje.charAt(i);

i++;

setTimeout(escribir,70);

}


}


escribir();







function estrellas(){


for(let i=0;i<120;i++){


let estrella=document.createElement("div");


estrella.className="star";


estrella.style.width="3px";


estrella.style.height="3px";


estrella.style.left=Math.random()*100+"vw";


estrella.style.top=Math.random()*100+"vh";


document.body.appendChild(estrella);


}


}



estrellas();








function corazones(){


let c=document.createElement("div");


c.className="corazon";


c.innerHTML="❤️";


c.style.left=Math.random()*100+"vw";


c.style.top="100vh";


document.body.appendChild(c);



setTimeout(()=>{


c.remove();


},6000);


}



setInterval(corazones,700);








const fotos=[


"amor.jpg",

"feli.jpg",

"felij.jpg",

"familia.jpg",

"nojada.jpg",

"Ojos.jpg",

"Diosa.jpg",

"divina.jpg",

"bonita.jpg",

"cariño.jpg"


];



let indice=0;



function cambiarFoto(){


document.getElementById("foto").src=fotos[indice];



indice++;



if(indice>=fotos.length){


indice=0;


}


}



setInterval(cambiarFoto,3000);







const boton=document.getElementById("boton");




boton.onclick=function(){



let musica=document.getElementById("musica");



musica.play();




boton.innerHTML="❤️ Gracias por estar aquí ❤️";




document.getElementById("texto").innerHTML="";


document.getElementById("texto").innerHTML=`
Jacqueline...

Antes de continuar...

Quiero hacerte una pequeña pregunta ❤️
`;



setTimeout(()=>{


boton.innerHTML="😊 Estoy lista";



},2000);




}
