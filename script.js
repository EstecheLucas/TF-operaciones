document.getElementById("generar").addEventListener("click", operarMatrices);

function operarMatrices() {
  const filas = parseInt(document.getElementById("filas").value);
  const columnas = parseInt(document.getElementById("columnas").value);

  // Generar matrices aleatorias entre 1 y 20
  const matriz1 = tf.randomUniform([filas, columnas], 1, 21, 'int32');
  const matriz2 = tf.randomUniform([filas, columnas], 1, 21, 'int32');

  // Suma de matrices
  const suma = tf.add(matriz1, matriz2);

  // Multiplicación (matriz2 transpuesta)
  const multiplicacion = tf.matMul(matriz1, matriz2.transpose());

  // Mostrar resultados
  Promise.all([
    matriz1.array(),
    matriz2.array(),
    suma.array(),
    multiplicacion.array()
  ]).then(([m1, m2, s, m]) => {
    const res = `
Matriz 1:
${JSON.stringify(m1, null, 2)}

Matriz 2:
${JSON.stringify(m2, null, 2)}

Suma:
${JSON.stringify(s, null, 2)}

Multiplicación:
${JSON.stringify(m, null, 2)}
    `;
    document.getElementById("resultado").textContent = res;
  });
}
