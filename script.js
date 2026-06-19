// Texto de bienvenida formateado para soportar los saltos de línea correctamente
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
        setTimeout(escribir, 60);
    }
}

// Iniciar máquina de escribir
escribir();

/* ESTRELLAS */
function estrellas() {
    const contenedorEstrellas = document.getElementById("stars");
    for (let i = 0; i < 120; i++) {
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

/* CORAZONES FLOATING */
function corazones() {
    let c = document.createElement("div");
    c.className = "corazon";
    c.innerHTML = "❤️";
    c.style.left = Math.random() * 95 + "vw";
    c.style.top = "100vh";
    document.body.appendChild(c);

    setTimeout(() => {
        c.remove();
    }, 6000);
}
setInterval(corazones, 600);

/* CAMBIO DE ESCENA */
const boton = document.getElementById("boton");
boton.onclick = () => {
    let musica = document.getElementById("musica");
    musica.play().catch(() => {
        console.log("El navegador bloqueó el autoplay, se requiere interacción previa.");
    });

    document.getElementById("escena1").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("escena1").classList.add("oculto");
        const escena2 = document.getElementById("escena2");
        escena2.classList.remove("oculto");
        escena2.style.display = "flex";
        escena2.style.flexDirection = "column";
    }, 1000);
};

/* BOTÓN HUIDIZO ("NO") */
const no = document.getElementById("no");

const moverBotonNo = () => {
    const padding = 60;
    // Calcula posiciones aleatorias seguras dentro de la ventana del navegador
    let x = Math.random() * (window.innerWidth - no.clientWidth - padding);
    let y = Math.random() * (window.innerHeight - no.clientHeight - padding);

    // Asegura que no se salga por los bordes superiores o izquierdos
    if (x < padding) x = padding;
    if (y < padding) y = padding;

    no.style.position = "fixed";
    no.style.left = x + "px";
    no.style.top = y + "px";
    no.style.margin = "0";
};

// Evento para computadoras (Mouse) y dispositivos móviles (Touch)
no.addEventListener("mouseover", moverBotonNo);
no.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Evita el click accidental en móviles al intentar tocarlo
    moverBotonNo();
});

/* ACCIÓN BOTÓN "SÍ" */
document.getElementById("si").onclick = () => {
    alert("❤️ ¡Sabía que ibas a decir que tú! Correcto preciosa, Te quiero. ❤️");
};
/* CONTENIDO DE LA CARTA (ESCENA 3) */
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
        setTimeout(escribirCarta, 50); // Velocidad de escritura de la carta
    }
}

/* ACCIÓN AL PRESIONAR "SÍ" -> AVANZAR A ESCENA 3 */
document.getElementById("si").onclick = () => {
    // 1. Desvanecer Escena 2
    document.getElementById("escena2").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("escena2").classList.add("oculto");
        
        // 2. Mostrar Escena 3
        const escena3 = document.getElementById("escena3");
        escena3.classList.remove("oculto");
        escena3.style.display = "flex";
        escena3.style.flexDirection = "column";
        
        // Pequeño delay para la transición de opacidad
        setTimeout(() => {
            escena3.style.opacity = "1";
            
            // 3. Activar animación del sobre (Abrir y subir carta)
            setTimeout(() => {
                const sobre = document.querySelector(".envelope");
                sobre.classList.add("open");
                
                // 4. Iniciar la máquina de escribir de la carta una vez arriba
                setTimeout(escribirCarta, 2200); 
            }, 1000);

        }, 50);
    }, 1000);
};
