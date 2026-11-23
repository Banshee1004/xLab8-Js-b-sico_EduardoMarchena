// Programa 3: Promedio de calificaciones
// Lee los datos de los campos, valida, calcula y muestra el resultado en pantalla.

// Muestra un mensaje en el área de resultado (esError = true lo pinta como error)
function mostrar(mensaje, esError) {
  const area = document.getElementById("resultado");
  area.textContent = mensaje;
  area.className = esError ? "error" : "";
}

// Función que se ejecuta al presionar el botón
function calcular() {
  // Se leen el nombre y las tres calificaciones
  const nombre = document.getElementById("nombre").value.trim();
  const c1 = parseFloat(document.getElementById("c1").value);
  const c2 = parseFloat(document.getElementById("c2").value);
  const c3 = parseFloat(document.getElementById("c3").value);

  // Validación: nombre y calificaciones son obligatorios
  if (nombre === "" || isNaN(c1) || isNaN(c2) || isNaN(c3)) {
    return mostrar("Ingrese el nombre y las tres calificaciones.", true);
  }

  // Promedio con dos decimales
  const promedio = ((c1 + c2 + c3) / 3).toFixed(2);
  mostrar("El promedio de " + nombre + " es: " + promedio + " puntos");
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

// Validación del campo nombre: sin números, máximo 2 espacios y máximo 50 caracteres
const campoNombre = document.getElementById("nombre");

campoNombre.addEventListener("input", function () {
  const original = campoNombre.value;

  // Se eliminan los números
  let limpio = original.replace(/[0-9]/g, "");

  // Se conservan solo los primeros 2 espacios
  let espacios = 0;
  limpio = limpio.split("").filter(function (caracter) {
    if (caracter === " ") {
      espacios++;
      return espacios <= 2;
    }
    return true;
  }).join("");

  // Se limita a 50 caracteres
  limpio = limpio.slice(0, 50);

  // Solo se modifica el campo si hubo cambios, y se mantiene la posición del cursor
  if (limpio !== original) {
    const posicion = campoNombre.selectionStart - (original.length - limpio.length);
    campoNombre.value = limpio;
    campoNombre.setSelectionRange(posicion, posicion);
  }
});
