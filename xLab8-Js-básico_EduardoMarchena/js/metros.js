// Programa 4: Conversión de metros
// Lee los datos de los campos, valida, calcula y muestra el resultado en pantalla.

// Muestra un mensaje en el área de resultado (esError = true lo pinta como error)
function mostrar(mensaje, esError) {
  const area = document.getElementById("resultado");
  area.textContent = mensaje;
  area.className = esError ? "error" : "";
}

// Función que se ejecuta al presionar el botón
function calcular() {
  // Se lee el valor en metros
  const m = parseFloat(document.getElementById("metros").value);

  // Validación: el campo no puede estar vacío
  if (isNaN(m)) {
    return mostrar("Por favor ingrese un valor en metros.", true);
  }

  // 1 m = 100 cm  y  1 m = 0.001 km
  const cm = (m * 100).toLocaleString("en-US");
  const km = (m / 1000).toLocaleString("en-US", { maximumFractionDigits: 6 });
  mostrar(m + " metros equivalen a " + cm + " centímetros y " + km + " kilómetros.");
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
