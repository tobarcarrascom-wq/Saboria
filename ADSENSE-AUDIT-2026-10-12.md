# Auditoría de preparación para Google AdSense — Saboria

Fecha: 2026-10-12  
Estado: solo lectura; no se instalaron anuncios ni se publicaron cambios.

## Veredicto

Saboria tiene una base funcional y visualmente clara, pero todavía no está lista para solicitar una revisión de AdSense con buenas probabilidades. El bloqueo principal es de calidad editorial y transparencia: las cantidades de las recetas no están verificadas receta por receta, el contacto es un placeholder y la política de privacidad aún describe una versión sin publicidad.

Google exige contenido propio, útil y de calidad, navegación clara y cumplimiento de sus políticas; esto no equivale a una garantía de aprobación.

## Hallazgos prioritarios

### P0 — Resolver antes de solicitar revisión

1. Revisar manualmente las 60 recetas, especialmente las 219 cantidades generadas por plantilla. No deben presentarse como exactas hasta verificar ingredientes, cantidades, pasos, tiempos y porciones.
2. Sustituir `hola@saboria.example` por un canal de contacto real y controlado por el propietario. El correo actual está explícitamente marcado como placeholder.
3. Reescribir la política de privacidad cuando se decida monetizar: explicar cookies, almacenamiento local, proveedores publicitarios, personalización, derechos y contacto. Si se sirve publicidad a usuarios del EEE/Reino Unido/Suiza, preparar consentimiento conforme a la política de consentimiento de Google.
4. Documentar la procedencia de la fotografía externa del hero y reemplazarla por un recurso propio o con licencia verificable. Las ilustraciones SVG locales parecen originales, pero no sustituyen una política de licencias documentada.
5. Eliminar la discrepancia de interfaz donde el HTML inicial muestra `59` y el código carga `60` recetas.

### P1 — Mejorar antes de solicitar revisión

1. Crear páginas o rutas indexables por receta, con contenido visible, URL canónica e imagen JPG/PNG/WebP crawlable. Actualmente las recetas se abren en un modal y se comparten con hash en una sola página.
2. Añadir datos estructurados `Recipe` solo cuando cada receta tenga cantidades y contenido final verificado. Las imágenes `data:image/svg+xml` no son una base adecuada para el requisito de imagen crawlable/indexable de Google Recipe.
3. Añadir autoría editorial, fecha de actualización, notas de sustitución y fuentes cuando corresponda.
4. Generar un `ads.txt` únicamente después de crear una cuenta y recibir el publisher ID; antes no se debe inventar ni publicar ese archivo.
5. Validar Core Web Vitals con PageSpeed Insights/Search Console. En esta auditoría estática no se inventan métricas: el CSS/JS local es pequeño, pero Google Fonts y la fotografía remota del hero añaden dependencias externas.

### P2 — Preparación de experiencia publicitaria

1. Mantener la navegación y la función de ingredientes libres de anuncios intrusivos.
2. No colocar anuncios dentro del modal, junto a botones de favoritos, filtros, selector de ingredientes, controles de porciones o Chef Saboria IA.
3. Posibles ubicaciones futuras: un bloque horizontal entre la sección destacada y la biblioteca de recetas; un bloque al final de una receta; y un bloque discreto al final de la página. Siempre etiquetado como publicidad y separado de controles interactivos.
4. Evitar anuncios flotantes, pop-ups, anuncios que parezcan tarjetas de receta o anuncios próximos a botones táctiles.

## Estado técnico observado

- Sitio público: `https://tobarcarrascom-wq.github.io/Saboria/`.
- HTTPS de GitHub Pages: compatible con el dominio `github.io`.
- No se encontró código de AdSense, Google Analytics, cookies de publicidad, CMP ni `ads.txt`.
- Existe `robots.txt` y `sitemap.xml`, pero el sitemap solo declara inicio, privacidad y contacto.
- Existe una política de privacidad básica y una página de contacto, pero ambas necesitan preparación específica para monetización.
- El workflow de Pages funciona como despliegue estático; su nombre todavía dice CocinaClick, un detalle menor de mantenimiento.
- GitHub Pages es técnicamente capaz de servir HTML y verificaciones de AdSense, pero GitHub advierte que Pages no está destinado a alojar principalmente un negocio comercial, transacciones o SaaS. Si Saboria evoluciona hacia pagos o un servicio comercial principal, conviene evaluar otro hosting estático gratuito o un plan de hosting compatible.

## Lista mínima antes de solicitar revisión

- 60 recetas revisadas con cantidades reales y coherencia editorial.
- Contacto real y política de privacidad actualizada.
- Licencias de imágenes registradas y recursos reemplazados cuando no sean verificables.
- Navegación y páginas de recetas individuales indexables.
- Search Console y sitemap revisados por el propietario.
- Cuenta de AdSense del propietario, identidad y pagos configurados directamente por él; no se realizó ninguna de estas acciones.
- Código de conexión y `ads.txt` generados desde AdSense, nunca inventados.
- Consentimiento para usuarios aplicable a las regiones correspondientes.
- Pruebas móviles, accesibilidad y rendimiento repetidas después de cualquier cambio.

## Límites de esta auditoría

No se pudo medir tráfico real, Core Web Vitals históricos, estado de indexación, cuenta AdSense, Search Console, licencias contractuales de Unsplash ni disponibilidad de un correo real sin acceso autorizado a esas cuentas o documentos. Google decide cada revisión individualmente.
