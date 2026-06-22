//================================================
// MENSAJE INICIAL (Máquina de escribir controlada)
//================================================

const mensaje = `
Mi preciosa.
Tengo algo importante que decirte.
Y espero que me regales unos minutitos de tu tiempo ❤️
`;

let i = 0;
let texto = "";
let ejecutorEscritura; 

function escribir() {
    if (i < mensaje.length) {
        texto += mensaje.charAt(i);
        const elementoTexto = document.getElementById("texto");
        if (elementoTexto) {
            elementoTexto.innerHTML = texto.replace(/\n/g, "<br>");
        }
        i++;
        ejecutorEscritura = setTimeout(escribir, 50);
    }
}

escribir();

//================================================
// ESTRELLAS (Optimizado el renderizado)
//================================================

function estrellas() {
    const fondo = document.getElementById("stars");
    if (!fondo) return;
    const fragmento = document.createDocumentFragment(); 
    for(let i=0; i<80; i++){ 
        let s = document.createElement("div");
        s.className = "star";
        s.style.left = Math.random()*100+"vw";
        s.style.top = Math.random()*100+"vh";
        s.style.width = "2px";
        s.style.height = "2px";
        fragmento.appendChild(s);
    }
    fondo.appendChild(fragmento);
}

estrellas();

//================================================
// CORAZONES (Animación limpia sin congelamientos)
//================================================

function corazones(){
    if (document.hidden) return; 

    let c = document.createElement("div");
    c.className = "corazon";
    c.innerHTML = "❤️";
    c.style.left = Math.random()*90+"vw";
    document.body.appendChild(c);
    
    setTimeout(() => {
        if(c && c.parentNode) {
            c.remove();
        }
    }, 4500);
}

let intervaloCorazones = setInterval(corazones, 2000);

//================================================
// CAMBIO ESCENAS
//================================================

function cambiarEscena(a, b){
    const escenaA = document.getElementById(a);
    const escenaB = document.getElementById(b);
    if(escenaA) escenaA.classList.add("oculto");
    if(escenaB) escenaB.classList.remove("oculto");
}

//================================================
// ESCENA 1
//================================================

const boton1 = document.getElementById("boton1");
const musica = document.getElementById("musica");

boton1.onclick = () => {
    clearTimeout(ejecutorEscritura); 
    if(musica) {
        musica.play().catch(e => console.log("Audio esperando interacción"));
    }
    cambiarEscena("escena1", "escena2");
};

//================================================
// ESCENA 2
//================================================

const boton2 = document.getElementById("boton2");
boton2.onclick = () => {
    cambiarEscena("escena2", "escena3");
};

//================================================
// TARJETAS
//================================================

let abiertas = 0;
const boton3 = document.getElementById("boton3");

function revelarTarjeta(t){
    if(t.classList.contains("revelada")) return;
    t.classList.add("revelada");
    abiertas++;

    if(abiertas === 3){
        setTimeout(() => {
            if(boton3) boton3.classList.remove("oculto");
        }, 700);
    }
}

//================================================
// ESCENA 3
//================================================

if(boton3) {
    boton3.onclick = () => {
        cambiarEscena("escena3", "escena4");
    };
}

//================================================
// BOTON NO
//================================================

const no = document.getElementById("no");

function mover(){
    let x = Math.random() * (window.innerWidth - 180);
    let y = Math.random() * (window.innerHeight - 100);

    no.style.position = "fixed";
    no.style.left = x + "px";
    no.style.top = y + "px";
}

if(no) {
    no.addEventListener("mouseover", mover);
    no.addEventListener("touchstart", mover, {passive: true});
}

//================================================
// CARTA (Efecto controlado)
//================================================

const carta = `
Mi niña...
Mi preciosa...
Mi corazón bonito...
Eres mi lugar seguro.
La persona con quien más tranquilidad siento.
Gracias por existir.
Gracias por tu sonrisa.
Gracias por tus ojitos.
Gracias por ser tú.
Con muchísimo cariño,
Polar ❤️
`;

let p = 0;
const textoCarta = document.getElementById("textoCarta");

function escribirCarta(){
    if(p < carta.length){
        if(textoCarta) textoCarta.textContent += carta.charAt(p);
        p++;
        setTimeout(escribirCarta, 40);
    }
}

//================================================
// ESCENA 4 -> TRANSICIÓN AL SOBRE CERRADO
//================================================

const si = document.getElementById("si");
const btnAbrirSobre = document.getElementById("btnAbrirSobre");
const tituloSobre = document.getElementById("tituloSobre");
const boton5 = document.getElementById("boton5");

if(si) {
    si.onclick = () => {
        // Pasa a la escena 5 pero el sobre se mantiene cerrado y espera al botón ABRIR
        cambiarEscena("escena4", "escena5");
    };
}

// LÓGICA DE APERTURA MANUAL DEL SOBRE
if(btnAbrirSobre) {
    btnAbrirSobre.onclick = () => {
        // Ocultamos el botón "ABRIR" inmediatamente
        btnAbrirSobre.classList.add("oculto");
        
        // Mostramos el título hermoso de fondo
        if(tituloSobre) tituloSobre.classList.remove("oculto");

        // Abrimos el sobre e iniciamos animación
        const sobre = document.querySelector(".envelope");
        if(sobre) sobre.classList.add("open");

        // Tiempo proporcional para desplegar y empezar a escribir el texto
        setTimeout(() => {
            escribirCarta();

            // Aparece el botón de la siguiente escena cuando el texto termine de procesarse
            setTimeout(() => {
                if(boton5) boton5.classList.remove("oculto");
            }, 5000);

        }, 1200);
    };
}

//================================================
// ESCENA 5
//================================================

if(boton5) {
    boton5.onclick = () => {
        cambiarEscena("escena5", "escena6");
        iniciarGaleria(); 
    };
}

//================================================
// GALERIA (Solo ejecuta al ser activada)
//================================================

const fotos = [
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

let indice = 0;
const galeriaFoto = document.getElementById("galeriaFoto");
let intervaloGaleria;

function cambiarFoto(){
    if(!galeriaFoto) return;
    galeriaFoto.style.opacity = 0;

    setTimeout(() => {
        indice = (indice + 1) % fotos.length;
        galeriaFoto.src = fotos[indice];
        galeriaFoto.style.opacity = 1;
    }, 500);
}

function iniciarGaleria() {
    if(!intervaloGaleria) {
        intervaloGaleria = setInterval(cambiarFoto, 3000);
    }
}

//================================================
// ESCENA 6
//================================================

const boton6 = document.getElementById("boton6");
if(boton6) {
    boton6.onclick = () => {
        clearInterval(intervaloGaleria); 
        cambiarEscena("escena6", "escena7");
        iniciarContador();
    };
}

//================================================
// CONTADOR Y SU BOTÓN DETENER
//================================================
let cronometro;

function iniciarContador(){
    const numero = document.getElementById("contadorAleatorio");
    if(!numero) return;
    cronometro = setInterval(()=>{
        let valor = Math.floor(Math.random()*999);
        numero.innerHTML = valor.toString().padStart(3,'0');
    }, 70);
}

const botonDetener = document.getElementById("detener");
if(botonDetener) {
    botonDetener.onclick = () => {
        clearInterval(cronometro);
        const numero = document.getElementById("contadorAleatorio");
        const respuestaAmor = document.getElementById("respuestaAmor");
        const boton7 = document.getElementById("boton7");
        
        if(numero) {
            numero.style.fontSize = "70px";
            numero.innerHTML = "❤️";
        }
        if(respuestaAmor) respuestaAmor.innerHTML = "Todos los días quiero verte ❤️";
        if(boton7) boton7.classList.remove("oculto");
        botonDetener.style.display = "none";
    };
}

//================================================
// ESCENA 7
//================================================

const boton7 = document.getElementById("boton7");
if(boton7) {
    boton7.onclick = () => {
        cambiarEscena("escena7", "escena8");
        escribirMensaje();
    };
}

//================================================
// ESCENA 8
//================================================

const mensajeFinal = `
Eres mi niña.
Mi preciosa.
Mi corazón bonito.
Mi lugar seguro.

Gracias por cada sonrisa.
Gracias por existir.

Con muchísimo cariño.

Polar ❤️
`;

let mf = 0;

function escribirMensaje(){
    const mensajeFinalElemento = document.getElementById("mensajeFinal");
    if(mf < mensajeFinal.length){
        if(mensajeFinalElemento) mensajeFinalElemento.textContent += mensajeFinal.charAt(mf);
        mf++;
        setTimeout(escribirMensaje, 45);
    }
}

const boton8 = document.getElementById("boton8");
if(boton8) {
    boton8.onclick = () => {
        cambiarEscena("escena8", "escena9");
        const finTxt = document.getElementById("final");
        if(finTxt) {
            finTxt.innerHTML = `Te quiero muchísimo<br><br>Mi Chio ❤️`;
        }
    };
}
