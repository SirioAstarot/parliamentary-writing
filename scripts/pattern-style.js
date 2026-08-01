// Patrones de estilo tecnico
const { Document, Paragraph, TextRun, PageBreak, AlignmentType, LineRuleType, TableOfContents } = require("docx");

const LINE_150 = { line: 360, lineRule: LineRuleType.AUTO }; // interlineado 1.5

// Book (Libro) — Roboto Black 26pt, centrado, 12pt antes / 8pt después. outlineLevel 0 = Nivel 1 para la TOC nativa.
function libro(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    outlineLevel: 0,
    spacing: { before: 240, after: 160, ...LINE_150 },
    children: [new TextRun({ text, font: "Roboto Black", size: 52 })]
  });
}

// Title (Título de la ley O Título I/II jerárquico) — Roboto 20pt bold, centrado, 12pt antes.
// outline: no pasar nada cuando es el Título de la ley (no debe aparecer en la TOC nativa, como cualquier título de documento);
// pasar outline=1 (Nivel 2) cuando es un Título I/II jerárquico dentro de un Libro.
function titulo(text, outline) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    outlineLevel: outline,
    spacing: { before: 240, ...LINE_150 },
    children: [new TextRun({ text, font: "Roboto", bold: true, size: 40 })]
  });
}

// Sanción (fórmula de sanción/promulgación) — Roboto 12pt italic, centrado, 8pt antes / 16pt después.
// Va inmediatamente después del Título de la ley. Sin outlineLevel: no es un encabezado navegable.
function sancion(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 160, after: 320, ...LINE_150 },
    children: [new TextRun({ text, font: "Roboto", italics: true, size: 24 })]
  });
}

// Chapter (Capítulo / Fundamentos / Anexo) — Roboto 16pt bold, centrado, 2pt antes / 8pt después.
// outline: 2 para Capítulo (Nivel 3, dentro de un Libro/Título); 0 para Fundamentos y Anexo (Nivel 1, son secciones de primer nivel).
function capitulo(text, outline) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    outlineLevel: outline,
    spacing: { before: 40, after: 160, ...LINE_150 },
    children: [new TextRun({ text, font: "Roboto", bold: true, size: 32 })]
  });
}

// Topic (Sección) — Roboto 14pt bold, centrado, 2pt antes / 8pt después. Sin outlineLevel: la TOC nativa no llega a este nivel.
function seccion(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 40, after: 160, ...LINE_150 },
    children: [new TextRun({ text, font: "Roboto", bold: true, size: 28 })]
  });
}

// Article Number + Article Title combinados — Roboto 10pt bold, izquierda, 2pt antes / 8pt después
function articuloHeading(text) { // ej. "ARTÍCULO 1 – Objeto"
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 40, after: 160, ...LINE_150 },
    children: [new TextRun({ text, font: "Roboto", bold: true, size: 20 })]
  });
}

// Articulado (cuerpo del artículo, de Fundamentos y de cada Anexo) — Roboto 10pt normal, izquierda, 2pt antes / 8pt después
function articulado(text) {
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 40, after: 160, ...LINE_150 },
    children: [new TextRun({ text, font: "Roboto", size: 20 })]
  });
}

// Salto de página — antes de cada Libro, y antes de cada Título EXCEPTO el primer Título de cada Libro
// (ese ya arranca en página nueva por el salto del Libro). Capítulo, Sección y Artículo no llevan salto propio.
function saltoDePagina() { return new Paragraph({ children: [new PageBreak()] }); }

// Saltos de línea — n párrafos vacíos antes (o después) de un encabezado de Libro/Título/Capítulo/Sección.
// Uso: ninguno antes de Libro (arranca al principio de la página). Ninguno antes de Título (va justo
// después de Libro o del salto de página) ni antes del primer Capítulo de cada Título (va justo
// después de este); 2 antes de cualquier otro Capítulo. Ninguno antes de la primera Sección de cada
// Capítulo (va justo después de este); 2 antes de cualquier otra Sección. 1 salto de línea DESPUÉS de
// cada Capítulo, antes de su contenido — EXCEPTO si ese contenido es una Sección, en cuyo caso no va
// (la Sección ya se encarga de su propio espaciado). 1 salto de línea DESPUÉS de cada Sección, siempre,
// antes de su Artículo.
// Bug fix: cada párrafo lleva un TextRun vacío con fuente Roboto 10 (igual que Articulado) — un
// párrafo sin ningún TextRun hereda la fuente Normal de Word para calcular su alto de línea, no
// Roboto, así que el salto de línea no medía lo mismo que una línea real del documento.
function saltosDeLinea(n) {
  return Array.from({ length: n }, () => new Paragraph({
    children: [new TextRun({ text: "", font: "Roboto", size: 20 })],
  }));
}


// Tabla de Contenido nativa
const doc = new Document({
  features: { updateFields: true }, // fuerza a Word a recalcular la TOC al abrir el archivo
  sections: [{
    children: [
      // ... Título de la ley, fórmula de sanción ...

      saltoDePagina(), // bug fix: faltaba en el código (el comentario ya lo indicaba) — Título/Sanción quedan en su propia página, separados del Contenido
      new Paragraph({ children: [new TextRun({ text: "Contenido", font: "Roboto", bold: true, size: 40 })] }),
      new TableOfContents("Índice automático", {
        hyperlink: true,
        headingStyleRange: "1-3",           // Libro, Título, Capítulo (Niveles 1-3, igual que "Automático 1")
        useAppliedParagraphOutlineLevel: true, // \u — reconoce el outlineLevel de párrafos con estilo propio (sin usar HeadingLevel de Word)
        hideTabAndPageNumbersInWebView: true,  // \z
      }),

      // ... salto de página, luego el articulado ...
    ]
  }]
});
