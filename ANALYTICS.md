# Analítica privada y gratuita — propuesta

No se instaló analítica de terceros en esta etapa. La web no transmite datos personales.

## Opción recomendada para validar interés

Empezar con métricas agregadas del propio backend cuando exista: visitas, ruta, receta abierta, uso del buscador, ingrediente seleccionado y campaña UTM. Guardar solo totales diarios y no IP completa, correo, nombre ni contenido libre del Chef.

## Antes de integrar

- Definir una política de retención corta.
- Mostrar aviso de privacidad y, si corresponde, consentimiento antes de cookies no esenciales.
- Medir primero eventos anónimos y esenciales: `recipe_open`, `search_used`, `pantry_match`, `share_click`.
- Aceptar parámetros UTM (`utm_source`, `utm_medium`, `utm_campaign`) sin guardar identificadores personales.

Mientras Saboria no tenga backend, se puede validar el interés con enlaces UTM y métricas de GitHub Pages, sin prometer precisión de visitantes únicos.
