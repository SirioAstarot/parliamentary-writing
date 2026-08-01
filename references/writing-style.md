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

### Sanción
- Uso: fórmula de sanción/promulgación (e.g. "[Cuerpo Legislativo / Parlamento] sanciona con fuerza de Ley:"), inmediatamente después del Título de la ley. No es un encabezado navegable: no lleva outlineLevel ni aparece en la Tabla de Contenido nativa.
- Font: Roboto 12 pt., italic; lowercase; primera letra con mayúscula (los marcadores entre corchetes se dejan tal cual)
- Paragraph: centered; line spacing 1.5 pt; 8 pt spacing before; 16 pt spacing after
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
   - Salto de página antes de cada Libro y antes de cada Título, excepto el primer Título de cada Libro (ya arranca en página nueva por el salto del Libro).
   - Sin saltos de línea antes de Libro (arranca al principio de la página). Ninguno antes de Título (va inmediatamente después de Libro o del salto de página) ni antes del primer Capítulo de cada Título (va inmediatamente después de este); los demás Capítulos llevan dos. Ninguno antes de la primera Sección de cada Capítulo (va inmediatamente después de este); las demás Secciones llevan dos.
   - Un salto de línea después de cada Capítulo, antes de su contenido — excepto si ese contenido es una Sección: en ese caso no hay salto después del Capítulo. Un salto de línea después de cada Sección, siempre, antes de su Artículo.
5. **Redactar articulado** y luego **Fundamentos**, siguiendo las convenciones (técnica legislativa para articulado; estructura argumentativa para fundamentos).
6. **Construir el Word** con la skill docx y aplicar el estilo descrito abajo.
7. **Mostrar el borrador** al usuario antes de finalizar: resaltar placeholders/supuestos.

## Navegación y salto de página
- **Salto de página: antes de cada nuevo Libro y antes de cada nuevo Título, excepto el primer Título de cada Libro** (ya queda en página nueva por el salto del Libro). Capítulo, Sección y Artículo no llevan salto de página propio.
- La navegación interna del documento se resuelve con la **Tabla de Contenido nativa de Word** (ver sección propia más abajo) — no hay Índice manual ni hipervínculos internos armados a mano. Sección y Artículo no tienen entrada de navegación propia (la Tabla de Contenido nativa solo llega a Libro/Título/Capítulo); si en el futuro se necesita saltar directo a un Artículo o Sección puntual, hay que agregar ese mecanismo de nuevo explícitamente.

## Saltos de línea
- **Sin saltos de línea antes de Libro**: arranca al principio de la página (ya tiene su propio salto de página).
- **Sin saltos de línea antes de Título**: va inmediatamente después de Libro, o inmediatamente después del salto de página si no es el primer Título de su Libro.
- **Sin saltos de línea antes del primer Capítulo de cada Título**: va inmediatamente después del encabezado del Título.
- **Dos saltos de línea antes de cualquier otro Capítulo** (uno que no sea el primero de su Título).
- **Sin saltos de línea antes de la primera Sección de cada Capítulo**: va inmediatamente después del encabezado del Capítulo.
- **Dos saltos de línea antes de cualquier otra Sección** (una que no sea la primera de su Capítulo).
- **Un salto de línea después de cada Capítulo, antes de su contenido — excepto si ese contenido es una Sección.** Cuando el Capítulo abre con una Sección, no hay salto después del Capítulo: la primera Sección ya va pegada a él.
- **Un salto de línea después de cada Sección, siempre**, antes de su Artículo.
- Un "salto de línea" es un párrafo vacío propio (no `spacing.before`): ver `saltosDeLinea(n)` en [Patrones de estilo](scripts/pattern-style.js).

Ejemplo de aplicación (Título con dos Capítulos):
```
Título I
Capítulo 1

Artículo 1


Capítulo 2

Artículo 2
```

Ejemplo de aplicación (Capítulo que abre con Secciones):
```
Título I
Capítulo 1
Sección 1

Artículo 1


Sección 2

Artículo 2
```

### Mapeo de estilos → elementos estructurales
- **Book** → Libro (jerárquico).
- **Title** → Título: se usa tanto para el **Título de la ley** (nombre corto de la ley, ej. "Ley de Ventanilla Única...") como para cada **Título I/II/...** jerárquico dentro de un Libro — es el mismo estilo en ambos casos.
- **Sanción** → Fórmula de sanción/promulgación, el párrafo que sigue inmediatamente al Título de la ley.
- **Chapter** → Capítulo, **Fundamentos** y **Anexo** — los tres usan exactamente el mismo estilo y el mismo tratamiento de párrafo (Roboto 16pt bold, centrado, 2pt antes/8pt después, Color Automatic). Fundamentos y Anexo no tenían estilo propio definido, así que reutilizan Chapter íntegramente: mismo tamaño, mismo peso, misma alineación, mismo espaciado — no un estilo distinto para cada uno.
- **Topic** → Sección.
- **Article Number** + **Article Title** → encabezado de cada Artículo (ej. "ARTÍCULO 1 – Objeto"): en la práctica es un solo run de texto, ya que ambos estilos comparten fuente/tamaño/alineación/espaciado — solo difieren en que el número va en mayúsculas y el título en minúscula con inicial mayúscula.
- **Articulado** → cuerpo de texto de cada artículo, de Fundamentos y de cada Anexo (mismo estilo de cuerpo en los tres).

### Patrón técnico (docx-js / npm `docx`) — verificado en este entorno
No usar `HeadingLevel` de Word (sus estilos por defecto fuerzan color de tema, no "Automatic"). Usar formato de texto explícito para cada estilo, más `outlineLevel` (para que la Tabla de Contenido nativa los reconozca sin necesidad del estilo Heading):

Leer y ejecutar [Patrones de estilo](scripts/pattern-style.js)
- No fijar `color` en ningún `TextRun` de estos encabezados: dejarlo sin especificar mantiene "Color: Automatic".
- Tamaños en `size` van en medios-puntos (26pt → 52, 20pt → 40, 16pt → 32, 14pt → 28, 12pt → 24, 10pt → 20). Espaciados en `spacing.before/after` van en veinteavos de punto (16pt → 320, 12pt → 240, 8pt → 160, 2pt → 40). `line: 360` con `lineRule: "auto"` da interlineado 1.5.

## Tabla de Contenido nativa (Referencias → Tabla de Contenido → Automático 1)
Agregar la Tabla de Contenido nativa de Word — el mismo resultado que da el botón **Referencias → Tabla de Contenido → Automático 1** del programa. Es el único mecanismo de navegación del documento (no hay Índice manual). Va en su propia página — salto de página después de la fórmula de sanción — con el título "Contenido" (así lo genera Word con ese botón), y otro salto de página antes del articulado.
Leer y ejecutar [Patrones de estilo](scripts/pattern-style.js)

- Esto genera el campo `TOC \h \o "1-3" \u \z` — exactamente el código de campo que produce el botón "Automático 1" de Word.
- **Importante**: como cualquier campo de Word generado por fuera de la aplicación, el contenido de la tabla no se ve hasta que Word lo calcula. Con `features.updateFields: true` (arriba) Word lo recalcula solo al abrir el archivo; si no ocurre automáticamente, se actualiza manualmente con **Ctrl+A** y luego **F9**, o clic derecho sobre la tabla → "Actualizar campos". Esto es una limitación estándar de generar Word por fuera de la aplicación, no un error del documento.
- La Tabla de Contenido nativa solo llega a Libro/Título/Capítulo (Niveles 1-3, como "Automático 1" por defecto). Sección y Artículo no aparecen ahí ni en ningún otro lado del documento — no tienen mecanismo de navegación propio.
- Fundamentos y Anexo reciben `outlineLevel: 0` (mismo nivel que Libro) para que también aparezcan como entradas de primer nivel en esta Tabla de Contenido nativa.
