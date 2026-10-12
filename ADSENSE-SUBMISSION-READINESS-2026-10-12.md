# Saboria — estado de preparación para AdSense

## Estado actual

**Preparación parcial.** La candidatura local incorpora mejoras técnicas, pero todavía no debe considerarse lista para solicitar revisión.

## Trabajo realizado en esta candidatura

- Se incorporó el contacto autorizado `tobarcarrascom@gmail.com` en `contact.html`.
- Se conservaron los respaldos existentes, incluido `backup-saboria-phase1-2026-10-12` y el respaldo previo a esta tanda.
- Se generaron 60 páginas individuales bajo `recetas/<slug>/` y 60 ilustraciones SVG locales.
- Se actualizó el sitemap con 64 URLs: páginas institucionales y las 60 recetas.
- Se eliminó la referencia pública a Unsplash del CSS y se mantuvieron ilustraciones locales.
- Se dejó el sitio sin scripts de anuncios, `ads.txt`, identificadores de editor, pagos ni cuentas externas.
- Se corrigió el cálculo de `totalTime` del marcado Recipe para no convertir horas en minutos incorrectamente.

## Verificación de recetas

- 60 recetas presentes.
- 60 rutas coincidentes con sus slugs.
- Las 50 recetas posteriores al primer grupo tienen campos, ingredientes, pasos y cantidades estructuralmente completos.
- Las 50 permanecen marcadas como **cantidad orientativa; requiere validación humana**. Esto no equivale a una verificación culinaria o nutricional independiente.

## Pruebas automáticas ejecutadas

- `node --check app.js`
- `node --check recipes.js`
- `node --check recipe-page.js`
- Auditoría de 60 recetas, slugs, imágenes y rutas: sin faltantes estructurales.
- Sitemap: 64 URLs, incluidas 60 recetas.
- Búsqueda de claves privadas: sin coincidencias en el código revisado.
- Búsqueda de scripts AdSense, `doubleclick`, `ca-pub-` y `adsbygoogle`: sin coincidencias en el sitio.
- Búsqueda de Unsplash en CSS: sin coincidencias.

## Limitaciones pendientes

- No se pudo completar una prueba visual final del candidato local porque el navegador de pruebas no pudo conectarse al servidor local (`ERR_CONNECTION_REFUSED`). Por tanto, no se declara superada la revisión visual en 320–768 px.
- La versión candidata todavía no está publicada; el correo nuevo tampoco está visible públicamente.
- Las cantidades de 50 recetas necesitan revisión editorial humana antes de presentar el contenido como completamente validado.
- El marcado Recipe se genera con JavaScript y usa SVG; su elegibilidad para resultados enriquecidos debe confirmarse con la herramienta oficial de Google después de publicar.
- No se abrió una cuenta de AdSense ni se inició una solicitud.

## AdSense y GitHub Pages

Google exige controlar el HTML del sitio para insertar el código de conexión y revisar el sitio completo. La documentación de Google indica que la revisión puede tardar desde algunos días hasta entre dos y cuatro semanas, y que el rastreador debe poder acceder al sitio y a `robots.txt`.

GitHub Pages permite publicar contenido estático, pero GitHub advierte que Pages no está pensado para alojar sitios principalmente comerciales o de comercio electrónico. Esto no permite afirmar que Google vaya a aceptar esta URL ni que el alojamiento sea adecuado para una operación publicitaria sostenida. Debe comprobarse durante el alta, sin inventar un publisher ID.

## Para iniciar una solicitud real

1. El titular elegible debe iniciar sesión personalmente en AdSense.
2. Debe añadir la URL pública y completar identidad, país, edad y datos de pago directamente en Google.
3. Si el titular es menor de 18 años, la cuenta debe gestionarla un padre, madre o tutor adulto conforme a Google.
4. Google entregará el método de verificación y, si corresponde, el publisher ID.
5. Solo después de recibir un identificador real y autorización expresa se puede integrar código o `ads.txt`.
6. La solicitud se envía desde la cuenta del titular; no se puede declarar enviada desde este entorno sin confirmación oficial.

## Publicación

La publicación está pendiente de autorización explícita del propietario. La versión pública estable no fue modificada en esta etapa.

Costo de esta etapa: **$0 CLP**.
