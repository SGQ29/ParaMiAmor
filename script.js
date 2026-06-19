// 1. MÁQUINA DE ESCRIBIR (ESCENA 1)
const textoBase = `Oye...
Preciosa de mi vida...
Tengo algo importante que decirte...
Y espero que me regales unos minutitos de tu tiempo ❤️`;

const mensaje = textoBase.replace(/\n/g, "<br>");
let i = 0;
let textoActual = "";

function escribir() {
    if (i < mensaje.length) {
        if (mensaje.substring(i, i + 4) === "<br>") {
            textoActual += "<br>";
            i += 4;
        } else {
            textoActual += mensaje.charAt(i);
            i++;
        }
        document.getElementById("texto").innerHTML = textoActual;
        setTimeout(escribir, 55);
    }
}
escribir();

/* ESTRELLAS DE FONDO */
function estrellas() {
    const contenedorEstrellas = document.getElementById("stars");
    for (let i = 0; i < 100; i++) {
        let estrella = document.createElement("div");
        estrella.className = "star";
        estrella.style.width = "2px";
        estrella.style.height = "2px";
        estrella.style.left = Math.random() * 100 + "vw";
        estrella.style.top = Math.random() * 100 + "vh";
        contenedorEstrellas.appendChild(estrella);
    }
}
estrellas();

/* LLUVIA DE CORAZONES */
function corazones() {
    let c = document.createElement("div");
    c.className = "corazon";
    c.innerHTML = "❤️";
    c.style.left = Math.random() * 95 + "vw";
    c.style.top = "100vh";
    document.body.appendChild(c);
    setTimeout(() => { c.remove(); }, 5000);
}
setInterval(corazones, 700);

/* LÓGICA DE NAVEGACIÓN ENTRE ESCENAS */
function cambiarEscena(actualId, siguienteId, esFlex = true) {
    const actual = document.getElementById(actualId);
    const siguiente = document.getElementById(siguienteId);
    
    actual.style.opacity = "0";
    setTimeout(() => {
        actual.classList.add("oculto");
        siguiente.classList.remove("oculto");
        siguiente.style.display = esFlex ? "flex" : "block";
        if (esFlex) siguiente.style.flexDirection = "column";
        setTimeout(() => { siguiente.style.opacity = "1"; }, 50);
    }, 800);
}

// Botón Escena 1 -> Escena 2
document.getElementById("boton1").onclick = () => {
    let musica = document.getElementById("musica");
    musica.play().catch(() => console.log("Interacción requerida para audio."));
    cambiarEscena("escena1", "escena2");
};

// Botón Escena 2 -> Escena 3
document.getElementById("boton2").onclick = () => {
    cambiarEscena("escena2", "escena3");
};

// Control de las Tarjetas de la Escena 3
let tarjetasClickeadas = 0;
function revelarTarjeta(elemento) {
    if (!elemento.classList.contains("revelada")) {
        elemento.classList.add("revelada");
        tarjetasClickeadas++;
        
        // Si clickea las 3 tarjetas, aparece el botón para continuar
        if (tarjetasClickeadas === 3) {
            setTimeout(() => {
                const btn3 = document.getElementById("boton3");
                btn3.classList.remove("oculto");
                btn3.style.opacity = "1";
            }, 600);
        }
    }
}

// Botón Escena 3 -> Escena 4
document.getElementById("boton3").onclick = () => {
    cambiarEscena("escena3", "escena4");
};

/* BOTÓN HUYENTE "NO" (ESCENA 4) */
const no = document.getElementById("no");
const moverBotonNo = () => {
    const padding = 65;
    let x = Math.random() * (window.innerWidth - no.clientWidth - padding);
    let y = Math.random() * (window.innerHeight - no.clientHeight - padding);
    if (x < padding) x = padding;
    if (y < padding) y = padding;

    no.style.position = "fixed";
    no.style.left = x + "px";
    no.style.top = y + "px";
    no.style.margin = "0";
};
no.addEventListener("mouseover", moverBotonNo);
no.addEventListener("touchstart", (e) => { e.preventDefault(); moverBotonNo(); });

/* BOTÓN "SÍ" -> AVANZAR A CARTA FINAL (ESCENA 5) */
const textoCartaBase = `Jacqueline...

Eres mi lugar seguro.
Mi niña.
Mi preciosa.
Mi corazón bonito.
Gracias por existir. ❤️

Con amor,
Polar`;

let j = 0;
let contenidoCarta = "";

function escribirCarta() {
    if (j < textoCartaBase.length) {
        contenidoCarta += textoCartaBase.charAt(j);
        document.getElementById("textoCarta").innerHTML = contenidoCarta;
        j++;
        setTimeout(escribirCarta, 50);
    }
}

document.getElementById("si").onclick = () => {
    cambiarEscena("escena4", "escena5");
    
    // Activar sobre mágico tras desplegar escena
    setTimeout(() => {
        const sobre = document.querySelector(".envelope");
        sobre.classList.add("open");
        setTimeout(escribirCarta, 2200);
    }, 1200);
};
