function drawTable(data: Array<Record<string, string | number>>): string {
  const keys = Object.keys(data[0]);

  // Calcular anchos máximos por columna
  const widths = keys.map((k, i) => {
    let maxHeader = k.length;
    let maxBody = Math.max(...data.map(row => String(Object.values(row)[i]).length));
    return Math.max(maxHeader, maxBody);
  });

  // Función para capitalizar
  const capitalize = (str: string) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

  // Línea separadora
  const line = "+" + widths.map(w => "-".repeat(w + 2)).join("+") + "+\n";

  let finalStr = line;

  // Header
  finalStr += "|" + keys.map((k, i) =>
    " " + capitalize(k) + " ".repeat(widths[i] - k.length + 1)
  ).join("|") + "|\n";

  finalStr += line;

  // Filas
  data.forEach(row => {
    const values = Object.values(row).map(String);
    finalStr += "|" + values.map((val, i) =>
      " " + val + " ".repeat(widths[i] - val.length + 1)
    ).join("|") + "|\n";
  });

  // Cierre (sin \n final extra)
  finalStr += "+" + widths.map(w => "-".repeat(w + 2)).join("+") + "+";

  return finalStr;
}
