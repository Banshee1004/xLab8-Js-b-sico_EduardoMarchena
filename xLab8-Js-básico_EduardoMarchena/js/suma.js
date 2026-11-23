// Programa 1: Suma de tres valores
// Lee los datos de los campos, valida, calcula y muestra el resultado en pantalla.

// Muestra un mensaje en el área de resultado (esError = true lo pinta como error)
function mostrar(mensaje, esError) {
  const area = document.getElementById("resultado");
  area.textContent = mensaje;
  area.className = esError ? "error" : "";
}

// Función que se ejecuta al presionar el botón
function calcular() {
  // Se leen los tres valores ingresados
  const a = parseFloat(document.getElementById("n1").value);
  const b = parseFloat(document.getElementById("n2").value);
  const c = parseFloat(document.getElementById("n3").value);

  // Validación: los tres campos deben tener números
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return mostrar("Por favor ingrese los tres números.", true);
  }

  // Se suman y se muestra el resultado
  const suma = a + b + c;
  mostrar("La suma de los valores ingresados es: " + suma);
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
