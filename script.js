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
