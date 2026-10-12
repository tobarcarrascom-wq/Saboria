# Auditoría Fase 2 — Saboria

Fecha: 2026-10-12

## Alcance revisado

- 60 recetas cargadas desde `recipes.js`.
- IDs únicos.
- Ilustraciones SVG locales, generadas por receta y sin duplicados.
- Campos básicos presentes: nombre, categoría, tiempo, dificultad, porciones, ingredientes, método, consejo, sustituciones y pasos.

## Cambios preparados localmente

- Los pasos ahora se separan desde el método de cada receta y se complementan con mise en place, acabado y seguridad alimentaria.
- Se añaden indicaciones específicas para carnes, pescados, huevos, lácteos y conservación de sobras cuando corresponde.
- Modo cocinar con progreso, avance/retroceso, persistencia local del paso actual y consulta de ingredientes sin abandonar la vista.
- Ajustes responsive para controles táctiles, tarjetas, modal y desbordamiento horizontal.

## Bloqueo antes de publicar

La fuente actual genera las cantidades mediante una plantilla genérica basada en el índice del ingrediente. Esas cantidades no están verificadas receta por receta y no deben presentarse como cantidades culinarias exactas.

Por esta razón, esta fase no se publica todavía. Para cerrar la auditoría se necesita una de estas opciones:

1. incorporar cantidades verificadas para cada receta desde una fuente autorizada o revisión manual;
2. marcar explícitamente las cantidades como orientativas y revisar que no se interpreten como exactas.

No se han activado pagos, analítica externa, cuentas ni servicios con costo.
