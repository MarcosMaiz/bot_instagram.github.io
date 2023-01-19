//Para continuar el ciclo en la ultima posicion donde estaba lo unico que hay que hacer es cambiar el valor de i por el valor de La posicion del usuario en el array es ...

let usuarios = [];
let frases = [
  "",
  "😎😎😎",
  "surge",
  "pega",
  "estoy",
  "participandig",
  "🔥🔥🔥",
  "surgencio",
  "ufffff",
  "🤩🤩🤩",
];
let i = 0;
let contador_frases = 0;
const botonSiguiente = document.getElementById("boton");
const parrafo = document.getElementById("parrafo");
const parrafo2 = document.getElementById("parrafo2");

console.log(usuarios.length);

function imprimirUsuarios() {
  if (i < usuarios.length) {
    if (contador_frases < frases.length - 1) {
      parrafo.innerHTML = usuarios[i] + " " + frases[contador_frases];
      contador_frases += 1;
    } else if (contador_frases >= frases.length - 1) {
      parrafo.innerHTML = usuarios[i] + " " + frases[contador_frases];
      contador_frases = 0;
      i += 1;
      parrafo2.innerHTML = "La posicion del usuario en el array es " + i;
    }
  } else {
    botonSiguiente.style.display = "none";
  }
}

botonSiguiente.addEventListener("click", imprimirUsuarios);
