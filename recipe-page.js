const slug = window.SABORIA_RECIPE_SLUG;
const recipe = recipes.find(item => item.slug === slug);
const root = document.querySelector('#recipePage');
const siteRoot = `${location.origin}${location.pathname.split('/recetas/')[0]}`;

function esc(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function scaledQuantity(ingredient, portions) {
  const match = ingredient.quantity.match(/(\d+(?:[.,]\d+)?)/);
  if (!match) return `${ingredient.quantity} ${ingredient.name}`;
  const value = Number(match[1].replace(',', '.')) * portions;
  const formatted = Number.isInteger(value) ? value : value.toFixed(1).replace('.0', '');
  return `${formatted} ${ingredient.quantity.replace(match[1], '').trim()} ${ingredient.name}`.trim();
}
function relatedRecipes(current) { return recipes.filter(item => item.id !== current.id && (item.category === current.category || item.tags.some(tag => current.tags.includes(tag)))).slice(0, 3); }
function injectRecipeSchema(current) {
  const existing = document.querySelector('#recipe-schema');
  if (existing) existing.remove();

  const rawTime = String(current.time);
  const hours = rawTime.match(/(\d+)\s*h/i);
  const minutes = rawTime.match(/(\d+)\s*min/i);
  const totalTime = hours
    ? `PT${Number(hours[1]) * 60}M`
    : minutes
      ? `PT${Number(minutes[1])}M`
      : null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: current.title,
    description: `${current.title}: receta de Saboria con preparación paso a paso.`,
    image: [`${siteRoot}/assets/recipes/${current.slug}.svg`],
    recipeCategory: current.category,
    recipeYield: `${current.servings} porciones`,
    recipeIngredient: current.ingredients.map(item => `${item.quantity} ${item.name}`),
    recipeInstructions: current.steps.map(text => ({ '@type': 'HowToStep', text }))
  };
  if (totalTime) data.totalTime = totalTime;

  const script = document.createElement('script');
  script.id = 'recipe-schema';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function render() {
  if (!recipe) { root.innerHTML = '<h1>Receta no encontrada</h1><p>Vuelve a la biblioteca de Saboria para elegir otra receta.</p><a class="button button-primary" href="../../#todas">Ver recetas</a>'; return; }
  injectRecipeSchema(recipe);
  let portions = recipe.servings;
  let step = 0;
  let cooking = false;
  const paint = () => {
    const related = relatedRecipes(recipe);
    const ingredients = recipe.ingredients.map(item => `<li>${esc(scaledQuantity(item, portions / recipe.servings))}</li>`).join('');
    const instructions = recipe.steps.map(item => `<li>${esc(item)}</li>`).join('');
    const mode = cooking ? `<section class="page-cook" aria-live="polite"><span class="tag">Modo cocinar · Paso ${step + 1} de ${recipe.steps.length}</span><div class="cook-progress" role="progressbar" aria-valuemin="1" aria-valuemax="${recipe.steps.length}" aria-valuenow="${step + 1}"><span style="width:${((step + 1) / recipe.steps.length) * 100}%"></span></div><p class="cook-step">${esc(recipe.steps[step])}</p><div class="dialog-actions"><button class="button button-secondary" id="pagePrev" type="button" ${step === 0 ? 'disabled' : ''}>← Anterior</button><button class="button button-primary" id="pageNext" type="button">${step === recipe.steps.length - 1 ? 'Terminar' : 'Siguiente →'}</button><button class="button button-light" id="pageExitCook" type="button">Ver receta</button></div></section>` : '';
    root.innerHTML = `<a class="back-link" href="../../#todas">← Volver a todas las recetas</a><article class="recipe-page-card"><img class="recipe-page-image" src="../../assets/recipes/${recipe.slug}.svg" width="900" height="620" alt="Ilustración original de ${esc(recipe.title)}" /><div class="recipe-page-copy"><span class="tag">${esc(recipe.category)} · ${esc(recipe.time)} · ${esc(recipe.difficulty)}</span><h1>${esc(recipe.title)}</h1><p class="recipe-lead">Una preparación de Saboria para aprovechar ingredientes cotidianos con instrucciones claras y ajustes sencillos.</p><div class="recipe-page-meta"><span>⏱ ${esc(recipe.time)}</span><span>🍽 ${recipe.servings} porciones base</span></div><p class="recipe-disclaimer">Cantidades ${esc(recipe.quantityStatus)}. Ajusta según el tamaño de los ingredientes y tu experiencia.</p><div class="portion-control"><strong>Porciones</strong><button id="pageMinus" type="button" aria-label="Disminuir porciones">−</button><b>${portions}</b><button id="pagePlus" type="button" aria-label="Aumentar porciones">+</button></div><div class="recipe-page-columns"><section><h2>Ingredientes</h2><ul>${ingredients}</ul></section><section><h2>Preparación</h2><ol>${instructions}</ol></section></div><div class="dialog-tip"><strong>Consejo:</strong> ${esc(recipe.tip)}<br><strong>Sustituciones:</strong> ${esc(recipe.substitutions)}</div><div class="dialog-actions"><button class="button button-primary" id="pageCook" type="button">Modo cocinar</button><button class="button button-secondary" id="pageFavorite" type="button">${localStorage.getItem('saboria-favorites')?.includes(recipe.id) ? '♥ Guardada' : '♡ Guardar favorita'}</button><button class="button button-light" id="pageShare" type="button">Compartir ↗</button></div>${mode}</div></article><section class="related-section"><h2>También podría interesarte</h2><div class="related-grid">${related.map(item => `<a class="recipe-card" href="../${item.slug}/"><div class="recipe-image" style="background-image:url('../../assets/recipes/${item.slug}.svg')"></div><div class="recipe-body"><span class="tag">${esc(item.category)}</span><h3>${esc(item.title)}</h3><div class="recipe-meta"><span>◷ ${esc(item.time)}</span><span>♢ ${esc(item.difficulty)}</span></div></div></a>`).join('')}</div></section>`;
    document.querySelector('#pageMinus').onclick = () => { if (portions > 1) { portions--; paint(); } };
    document.querySelector('#pagePlus').onclick = () => { if (portions < 20) { portions++; paint(); } };
    document.querySelector('#pageCook').onclick = () => { cooking = true; paint(); window.scrollTo({top: document.querySelector('.page-cook').offsetTop - 20, behavior: 'smooth'}); };
    document.querySelector('#pageFavorite').onclick = () => { const saved = new Set(JSON.parse(localStorage.getItem('saboria-favorites') || '[]')); saved.has(recipe.id) ? saved.delete(recipe.id) : saved.add(recipe.id); localStorage.setItem('saboria-favorites', JSON.stringify([...saved])); paint(); };
    document.querySelector('#pageShare').onclick = async () => { try { await navigator.share({title: `${recipe.title} · Saboria`, text: `Mira esta receta en Saboria: ${recipe.title}`, url: location.href}); } catch { await navigator.clipboard?.writeText(location.href); } };
    if (cooking) { document.querySelector('#pagePrev').onclick = () => { if (step > 0) { step--; paint(); } }; document.querySelector('#pageNext').onclick = () => { if (step < recipe.steps.length - 1) { step++; paint(); } else { cooking = false; step = 0; paint(); } }; document.querySelector('#pageExitCook').onclick = () => { cooking = false; paint(); }; }
  };
  paint();
}
render();
