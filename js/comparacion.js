// Programa 5: Comparación de dos valores
// Lee los datos de los campos, valida, calcula y muestra el resultado en pantalla.

// Muestra un mensaje en el área de resultado (esError = true lo pinta como error)
function mostrar(mensaje, esError) {
  const area = document.getElementById("resultado");
  area.textContent = mensaje;
  area.className = esError ? "error" : "";
}

// Función que se ejecuta al presionar el botón
function calcular() {
  // Se leen los dos números
  const a = parseFloat(document.getElementById("v1").value);
  const b = parseFloat(document.getElementById("v2").value);

  // Validación: ambos campos son obligatorios
  if (isNaN(a) || isNaN(b)) {
    return mostrar("Por favor ingrese los dos números.", true);
  }

  // Si son iguales no hay mayor ni menor
  if (a === b) {
    return mostrar("Los dos números son iguales (" + a + "), la diferencia es 0.");
  }

  // Se determina el mayor, el menor y la diferencia
  const mayor = Math.max(a, b);
  const menor = Math.min(a, b);
  const diferencia = mayor - menor;
  mostrar("El número mayor es " + mayor + ", el menor es " + menor + ", y su diferencia es " + diferencia + ".");
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
