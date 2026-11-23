// Programa 2: Cuadrado de un número
// Lee los datos de los campos, valida, calcula y muestra el resultado en pantalla.

// Muestra un mensaje en el área de resultado (esError = true lo pinta como error)
function mostrar(mensaje, esError) {
  const area = document.getElementById("resultado");
  area.textContent = mensaje;
  area.className = esError ? "error" : "";
}

// Función que se ejecuta al presionar el botón
function calcular() {
  // Se lee el número ingresado
  const n = parseFloat(document.getElementById("numero").value);

  // Validación: el campo no puede estar vacío
  if (isNaN(n)) {
    return mostrar("Por favor ingrese un número.", true);
  }

  // Se eleva al cuadrado y se muestra el resultado
  mostrar("El cuadrado de " + n + " es: " + (n * n));
}

// Se asocia la función al clic del botón
document.getElementById("btnCalcular").addEventListener("click", calcular);

// Limpia todos los campos, borra el resultado y devuelve el cursor al primer campo
function limpiar() {
  campos.forEach(function (campo) { campo.value = ""; });
  mostrar("");
  campos[0].focus();
}

document.getElementById("btnLimpiar").addEventListener("click", limpiar);

// Lista de campos de entrada, en el orden en que aparecen en pantalla
const campos = Array.from(document.querySelectorAll("input"));

// Con Enter el cursor pasa al siguiente campo; en el último campo, Enter calcula
campos.forEach(function (campo, i) {
  campo.addEventListener("keydown", function (evento) {
    if (evento.key !== "Enter") return;
    evento.preventDefault();
    if (i < campos.length - 1) {
      campos[i + 1].focus();
    } else {
      calcular();
    }
  });
});
