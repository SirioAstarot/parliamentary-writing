# Formato, Estilos y Salida (Format, Styles, and Output)

## Estilos (writing-style)
### Book
- Font: Roboto Black 26 pt., lowercase; primera letra con mayúscula
- Paragraph: centered; line spacing 1.5 pt; 12 pt spacing before; 8 pt spacing after
- Color: Automatic

### Title
- Font: Roboto 20 pt., bold; lowercase; primera letra con mayúscula
- Paragraph: centered; line spacing 1.5 pt; 12 pt spacing before
- Color: Automatic

### Chapter
- Font: Roboto 16 pt., bold; lowercase; primera letra con mayúscula
- Paragraph: centered; line spacing 1.5 pt; 2 pt spacing before; 8 pt spacing after
- Color: Automatic

### Topic
- Font: Roboto 14 pt., bold; lowercase; primera letra con mayúscula
- Paragraph: centered; line spacing 1.5 pt; 2 pt spacing before; 8 pt spacing after
- Color: Automatic

### Article Number
- Font: Roboto 10 pt., bold, lowercase, con “–”; UPPERCASE
- Paragraph: left alignment; line spacing 1.5 pt; 2 pt spacing before; 8 pt spacing after
- Color: Automatic

### Article Title
- Font: Roboto 10 pt., bold; primera letra con mayúscula
- Paragraph: left alignment; line spacing 1.5 pt; 2 pt spacing before; 8 pt spacing after
- Color: Automatic

### Articulado
- Font: Roboto 10 pt., normal
- Paragraph: left alignment; line spacing 1.5 pt; 2 pt spacing before; 8 pt spacing after
- Color: Automatic


## Párrafos (párrafos)
- Mantener los párrafos consecutivos como subdivisiones decimales del mismo artículo, por ejemplo: ARTÍCULO 50.1, ARTÍCULO 50.2, ARTÍCULO 50.3.
- Evitar dispersarlos en artículos no relacionados o comprimirlos en un solo párrafo denso.
- Primera letra de los Parrafos siempre uppercase.

## Listas multinivel
Usar cascada de 4 niveles cuando se necesiten sub-ítems dentro de items:
```
  1.
    A.
      I)
        a)
```
  Level 1: Arabic numeral + period.
  Level 2: uppercase letter + period.
  Level 3: uppercase Roman numeral + parenthesis.
  Level 4: lowercase letter + parenthesis.
- No saltar niveles.
- No inventar estilos distintos a mitad de la misma lista.



# Estilo Word + Workflow para entregar `.docx`

## Dependencia obligatoria
- Para los detalles estructurales del archivo Word (.docx), usar la skill **docx** ya instalada en este entorno (`/mnt/skills/public/docx/SKILL.md` o equivalente local).
- **Revisar esa skill antes de escribir el archivo** cada vez. No hace falta (ni conviene) buscarla en una URL externa: usar siempre la versión local instalada, que está garantizada disponible y sincronizada con las herramientas de este entorno.

## Workflow (contenido → documento)
1. **Minar la conversación**: antes de redactar, extraer del diálogo investigación, datos, estadísticas, mecanismos, responsabilidades, alcance, estudios y argumentos ya discutidos. No inventes evidencia, cifras ni fuentes. Es la **base evidenciaria** de los Fundamentos.
   - No inventar datos ni citas no discutidas/verificadas.
2. **Confirmar objetivo de política** si no es obvio: una sola frase puede anclar el proyecto. Si no queda claro, preguntar.
3. **Clasificar el tipo de proyecto** (Reforma/Derogatoria/Ordinaria/Orgánica). Si no es obvio, preguntar (porque cambia estructura y límites).
4. **Elegir plantilla estructural**:
   - Hasta 100 artículos: estructura plana.
   - Ley orgánica con más de 100 artículos: estructura jerárquica **(Libro → Título → Capítulo → Sección → ARTÍCULO)**.
   - Salto de página para Libro (Título ya no lleva salto de página propio).
   - Tres saltos de linea antes de Libro, Título, Capítulo, Sección.
5. **Redactar articulado** y luego **Fundamentos**, siguiendo las convenciones (técnica legislativa para articulado; estructura argumentativa para fundamentos).
6. **Construir el Word** con la skill docx y aplicar el estilo descrito abajo.
7. **Mostrar el borrador** al usuario antes de finalizar: resaltar placeholders/supuestos.

## Navegación y salto de página
- **Salto de página: solo antes de cada nuevo Libro.** Título, Capítulo, Sección y Artículo no llevan salto de página propio.
- La navegación interna del documento se resuelve con la **Tabla de Contenido nativa de Word** (ver sección propia más abajo) — no hay Índice manual ni hipervínculos internos armados a mano. Sección y Artículo no tienen entrada de navegación propia (la Tabla de Contenido nativa solo llega a Libro/Título/Capítulo); si en el futuro se necesita saltar directo a un Artículo o Sección puntual, hay que agregar ese mecanismo de nuevo explícitamente.

### Mapeo de estilos → elementos estructurales
- **Book** → Libro (jerárquico).
- **Title** → Título: se usa tanto para el **Título de la ley** (nombre corto de la ley, ej. "Ley de Ventanilla Única...") como para cada **Título I/II/...** jerárquico dentro de un Libro — es el mismo estilo en ambos casos.
- **Chapter** → Capítulo, **Fundamentos** y **Anexo** — los tres usan exactamente el mismo estilo y el mismo tratamiento de párrafo (Roboto 16pt bold, centrado, 2pt antes/8pt después, Color Automatic). Fundamentos y Anexo no tenían estilo propio definido, así que reutilizan Chapter íntegramente: mismo tamaño, mismo peso, misma alineación, mismo espaciado — no un estilo distinto para cada uno.
- **Topic** → Sección.
- **Article Number** + **Article Title** → encabezado de cada Artículo (ej. "ARTÍCULO 1 – Objeto"): en la práctica es un solo run de texto, ya que ambos estilos comparten fuente/tamaño/alineación/espaciado — solo difieren en que el número va en mayúsculas y el título en minúscula con inicial mayúscula.
- **Articulado** → cuerpo de texto de cada artículo, de Fundamentos y de cada Anexo (mismo estilo de cuerpo en los tres).

### Patrón técnico (docx-js / npm `docx`) — verificado en este entorno
No usar `HeadingLevel` de Word (sus estilos por defecto fuerzan color de tema, no "Automatic"). Usar formato de texto explícito para cada estilo, más `outlineLevel` (para que la Tabla de Contenido nativa los reconozca sin necesidad del estilo Heading):

```javascript
const { Paragraph, TextRun, PageBreak, AlignmentType, LineRuleType } = require("docx");

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

// Salto de página — SOLO antes de un nuevo Libro
function saltoDePagina() { return new Paragraph({ children: [new PageBreak()] }); }
```

- No fijar `color` en ningún `TextRun` de estos encabezados: dejarlo sin especificar mantiene "Color: Automatic".
- Tamaños en `size` van en medios-puntos (26pt → 52, 20pt → 40, 16pt → 32, 14pt → 28, 10pt → 20). Espaciados en `spacing.before/after` van en veinteavos de punto (12pt → 240, 8pt → 160, 2pt → 40). `line: 360` con `lineRule: "auto"` da interlineado 1.5.

## Tabla de Contenido nativa (Referencias → Tabla de Contenido → Automático 1)
Agregar la Tabla de Contenido nativa de Word — el mismo resultado que da el botón **Referencias → Tabla de Contenido → Automático 1** del programa. Es el único mecanismo de navegación del documento (no hay Índice manual). Va después de la fórmula de sanción y antes del articulado, con el título "Contenido" (así lo genera Word con ese botón).

```javascript
const { Document, Paragraph, TextRun, TableOfContents } = require("docx");

const doc = new Document({
  features: { updateFields: true }, // fuerza a Word a recalcular la TOC al abrir el archivo
  sections: [{
    children: [
      // ... Título de la ley, fórmula de sanción, salto de página ...

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
```

- Esto genera el campo `TOC \h \o "1-3" \u \z` — exactamente el código de campo que produce el botón "Automático 1" de Word.
- **Importante**: como cualquier campo de Word generado por fuera de la aplicación, el contenido de la tabla no se ve hasta que Word lo calcula. Con `features.updateFields: true` (arriba) Word lo recalcula solo al abrir el archivo; si no ocurre automáticamente, se actualiza manualmente con **Ctrl+A** y luego **F9**, o clic derecho sobre la tabla → "Actualizar campos". Esto es una limitación estándar de generar Word por fuera de la aplicación, no un error del documento.
- La Tabla de Contenido nativa solo llega a Libro/Título/Capítulo (Niveles 1-3, como "Automático 1" por defecto). Sección y Artículo no aparecen ahí ni en ningún otro lado del documento — no tienen mecanismo de navegación propio.
- Fundamentos y Anexo reciben `outlineLevel: 0` (mismo nivel que Libro) para que también aparezcan como entradas de primer nivel en esta Tabla de Contenido nativa.
