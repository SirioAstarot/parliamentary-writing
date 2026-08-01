---
name: parliamentary-writing
description: "Redacta un proyecto de ley con articulado normativo y una sección separada de Fundamentos o Exposición de Motivos, usando convenciones generales internacionales. Use when el usuario pide “proyecto de ley”, “bill”, “ley”, “armame los fundamentos”, “redactá una ley”, “exposición de motivos”, “fundamentos”, “convertí esto en un proyecto de ley”, o “turn this into a bill”. También dispara si pide transformar una discusión de política, investigación, datos o argumentos en lenguaje legislativo formal. No trigger cuando el usuario solo pide un resumen, opiniones generales sin formato de ley, o solo desea un esquema sin artículos ni fundamentos. Use lectura de referencias para reglas de redacción y estructura, y entrega un .docx con Tabla de Contenido nativa de Word, Proyecto de Ley y Fundamentos (y Anexos si aplica), separados con salto de página."
license: MIT license
compatibility: Claude, Gemini, ChatGPT, Gemma, Grok, Elicit, Perplexity, Llama, Muse Spark, OpenRouter, Kimi-K3, DeepSeek, GLM.
metadata:
    skill-author: Sirio Astarot
---


# Workflow

## Antes de redactar

### Analizar el impacto y razonamiento, redactar y clasificar
1) Leer [razonamiento legislativo](references/legislative-reasoning.md) (interno, sin dependencias externas) para el análisis de impacto, población afectada, mecanismo de implementación y resultados esperados del proyecto de ley.

2) Leer [redacción parlamentaria](references/parliamentary-writing.md) para redacción tecnica legislativa y estructura del documento.

3) Leer [limitaciones en la redacción de textos parlamentarios](references/parlamentary-writing-drafting-constraints.md) para Restricciones en la redacción de textos parlamentarios:
   - Prohibiciones en el contenido.
   - Adaptarse a las convenciones legales y de estructura de palabras del español, inglés, francés, alemán, polaco, italiano, portugués o japonés, cuando corresponda el idioma.
   - Cumplir con el articulado con valor normativo, título no explicativo,  Art. 1 objeto, dos artículos de cierre obligatorios y no introducir materias ajenas.
   - Presente indicativo, una norma por artículo, **Sujeto → Verbo → Objeto** sin justificación en el articulado.

4) Leer [estilo de escritura](references/writing-style.md) para el flujo de trabajo de Word: estilos de fuente/párrafo por nivel (Book/Title/Sanción/Chapter/Topic/Article Number/Article Title/Articulado), saltos de página y de línea en estructura jerárquica, y la Tabla de Contenido nativa de Word (único mecanismo de navegación del documento).

5) Minar la conversación. (Mandatory)

6) Si falta información clave, pregunta antes de redactar (máximo 3 preguntas): (a) tema y objeto exacto, (b) a quién obliga y cómo se implementa, (c) qué tipo de ley es (Ordinaria/Derogatoria/Reforma/Orgánica) y cuántos artículos aproximados (para decidir estructura jerárquica si aplica).

7) Clasifica el tipo de proyecto y estructura:
   - Si es Ordinaria: usa estructura plana.
   - Si es Derogatoria: articulado corto con identificación precisa de lo que se deroga, sin restar el texto derogado.
   - Si es Reforma: redacta “Sustitúyese el artículo X...” referenciando por número.
   - Si es Orgánica y >100 artículos: aplica jerarquía **(Libro → Título → Capítulo → Sección → Artículo)** solo si la referencia lo habilita.


## Redactar el Proyecto

8) Redacta el Título (no explicativo) y la fórmula de sanción (estilo Sanción) con el ente que el usuario indique; si no, usa marcador genérico.

9) Redacta el articulado (Proyecto de Ley) con Artículo 1 Objeto y artículos subsiguientes solo con normas relacionadas al Art. 1.

10) Cierra el articulado con exactamente dos artículos.

11) Redacta Fundamentos/Exposición de Motivos como sección separada, en primera persona (ajustada a si el usuario habla como legislador o bloque):
   - Apertura: propuesta.
   - Contextualización del problema con lo aportado en la conversación.
   - Antecedentes (si se discutieron).
   - Fundamentación de la solución conectando problema→mecanismo.
   - Impacto esperado SOLO si hay base en la conversación.
   - Cierre solicitando acompañamiento.

12) Construye el .docx usando la skill docx (lee su SKILL.md antes de crear el archivo). Archivo: proyecto_de_ley_[tema-corto].docx.

13) Aplica estructura de navegación, salto de página y salto de línea (detalle técnico en [estilo de escritura](references/writing-style.md)):
   - Salto de página entre el Título/Sanción, "Contenido", "Proyecto de Ley", "Fundamentos" y "Anexos" (si aplica).
   - Si el proyecto usa jerarquía (Orgánica >100 artículos): salto de página adicional antes de cada nuevo Libro y antes de cada nuevo Título, excepto el primer Título de cada Libro (ya arranca en página nueva por el salto del Libro). Capítulo, Sección y Artículo no llevan salto de página propio.
   - Si el proyecto usa jerarquía: sin saltos de línea antes de Libro (arranca al principio de la página); ninguno antes de Título ni antes del primer Capítulo de cada Título; dos antes de cualquier otro Capítulo; ninguno antes de la primera Sección de cada Capítulo; dos antes de cualquier otra Sección; un salto de línea después de cada Capítulo antes de su contenido, excepto si ese contenido es una Sección; un salto de línea después de cada Sección, siempre.
   - Aplica los estilos de fuente y párrafo definidos en [estilo de escritura](references/writing-style.md) a cada nivel (Book/Title/Sanción/Chapter/Topic/Article Number/Article Title/Articulado) — no usar los estilos de encabezado por defecto de Word, que fuerzan un color de tema en vez de "Automatic". Fundamentos y Anexo usan exactamente el estilo Chapter (encabezado) y Articulado (cuerpo), igual que Capítulo.
   - No hay Índice manual: la navegación se resuelve solo con la Tabla de Contenido nativa de Word (**Referencias → Tabla de Contenido → Automático 1**, campo `TOC \h \o "1-3" \u \z`), cubriendo Libro/Título/Capítulo y, como entradas de primer nivel, Fundamentos/Anexo. Requiere `outlineLevel` en esos párrafos y `features.updateFields` en el documento para que Word la calcule al abrir el archivo. Sección y Artículo no tienen mecanismo de navegación propio.

14) Renderiza/verifica el .docx y revisa el contenido antes de entregarlo. Si quedaron marcadores (ente de publicación, cuerpo legislativo, etc.), entrégalos explícitos al usuario.



# Salida (Output)

## Generar el documento
- Usar la skill interna **docx** (ya instalada en este entorno, ver paso 12) para construir el archivo. No instalar servidores MCP ni dependencias de terceros: la generación corre localmente con las herramientas ya disponibles.


## Producir archivo (file)
- Entregar como **.docx**.
- Nombre de archivo: `proyecto_de_ley_[tema-corto].docx`
- Estructura con **salto de página** entre secciones:
  0) Título de la ley y fórmula de sanción (estilos Title y Sanción)
  1) Contenido — Tabla de Contenido nativa de Word (Automático 1, Niveles 1-3: Libro/Título/Capítulo, más Fundamentos/Anexo)
  2) Proyecto de Ley (si aplica jerarquía: salto de página adicional antes de cada Libro y antes de cada Título salvo el primero de cada Libro; ver saltos de línea en estilo de escritura)
  3) Fundamentos (mismo estilo Chapter/Articulado que Capítulo/Anexo)
  4) Anexos (si se aplica; mismo estilo Chapter/Articulado que Fundamentos)
