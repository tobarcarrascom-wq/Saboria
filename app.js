const state = { query: '', category: 'Todas', pantry: new Set(), favorites: new Set(JSON.parse(localStorage.getItem('saboria-favorites') || '[]')), theme: localStorage.getItem('saboria-theme') || 'light' };
const pantry = [...new Map(recipes.flatMap(r => r.ingredients).map(i => [i.name, i])).values()].slice(0, 22);
const $ = selector => document.querySelector(selector);
const ingredientEmoji = { pollo:'🍗', arroz:'🍚', tomate:'🍅', huevo:'🥚', papa:'🥔', cebolla:'🧅', queso:'🧀', garbanzos:'🫘', lentejas:'🫘', pasta:'🍝', pan:'🍞', palta:'🥑', limón:'🍋', espinaca:'🥬', zapallo:'🎃', zanahoria:'🥕', atún:'🐟', chocolate:'🍫', avena:'🌾', leche:'🥛', yogur:'🥣', quinoa:'🌾', tofu:'🥢' };
const categoryClass = category => category.toLowerCase().replaceAll(' ', '-').replaceAll('ó','o');

function cardTemplate(recipe) {
  const saved = state.favorites.has(recipe.id);
  return `<article class="recipe-card" data-id="${recipe.id}"><div class="recipe-image" style="background-image:url('${recipe.photo}')"><button class="heart-button ${saved ? 'saved' : ''}" data-favorite="${recipe.id}" aria-label="${saved ? 'Quitar de favoritas' : 'Guardar en favoritas'}">${saved ? '♥' : '♡'}</button></div><div class="recipe-body"><span class="tag">${recipe.category}</span><h3>${recipe.title}</h3><div class="recipe-meta"><span>◷ ${recipe.time}</span><span>♢ ${recipe.difficulty}</span><span>🍽 ${recipe.servings}</span></div></div></article>`;
}

function visibleRecipes() {
  return recipes.filter(recipe => {
    const searchable = `${recipe.title} ${recipe.category} ${recipe.tags.join(' ')}`.toLowerCase();
    const categoryMatch = state.category === 'Todas' || (state.category === 'Favoritas' ? state.favorites.has(recipe.id) : recipe.category === state.category);
    return categoryMatch && searchable.includes(state.query.toLowerCase());
  });
}

function renderRecipes() {
  const visible = visibleRecipes();
  $('#resultCount').textContent = `${visible.length} ${visible.length === 1 ? 'receta' : 'recetas'}`;
  $('#recipeGrid').innerHTML = visible.map(cardTemplate).join('');
  $('#recipeGrid').classList.toggle('hidden', visible.length === 0);
  $('#emptyState').classList.toggle('hidden', visible.length > 0);
}

function renderFeatured() {
  $('#featuredGrid').innerHTML = recipes.slice(15, 20).map(cardTemplate).join('');
}

function renderPantry() {
  $('#pantryGrid').innerHTML = pantry.map(item => `<button class="pantry-item ${state.pantry.has(item.name) ? 'active' : ''}" data-pantry="${item.name}" type="button"><span>${ingredientEmoji[item.name] || '✦'}</span>${item.name}</button>`).join('');
}

function updateFinder() {
  const selected = [...state.pantry];
  if (!selected.length) { $('#finderTitle').textContent = 'Selecciona ingredientes para empezar'; $('#finderText').textContent = 'Te diremos qué puedes cocinar de inmediato.'; return; }
  const matches = recipes.map(recipe => ({ recipe, have: selected.filter(i => recipe.tags.includes(i)), missing: recipe.ingredients.map(i => i.name).filter(i => !state.pantry.has(i)) })).sort((a,b) => a.missing.length - b.missing.length);
  const ready = matches.filter(m => m.missing.length === 0);
  $('#finderTitle').textContent = ready.length ? `${ready.length} receta${ready.length === 1 ? '' : 's'} lista${ready.length === 1 ? '' : 's'} para cocinar` : `Encontramos ${matches.slice(0,3).length} ideas para ti`;
  const first = matches[0];
  $('#finderText').textContent = first ? `${first.recipe.title} · ${first.missing.length ? `te falta: ${first.missing.slice(0, 3).join(', ')}` : 'no te falta nada'}.` : 'Prueba con otros ingredientes.';
}

function renderDialog(recipe) {
  let portions = recipe.servings;
  const paint = () => {
    const factor = portions / recipe.servings;
    const amount = ingredient => `${Number.isInteger(ingredient.quantity.match(/\d+/)?.[0] * factor) ? ingredient.quantity.match(/\d+/)[0] * factor : (ingredient.quantity.match(/\d+/)?.[0] * factor || ingredient.quantity)} ${ingredient.name}`;
    $('#dialogContent').innerHTML = `<div class="dialog-image" style="background-image:url('${recipe.photo}')"></div><div class="dialog-copy"><span class="tag">${recipe.category} · ${recipe.time}</span><h2>${recipe.title}</h2><p>Una preparación pensada para la cocina cotidiana. Ajusta las cantidades, sigue los pasos y adapta el sazón a tu mesa.</p><div class="portion-control"><strong>Porciones</strong><button id="minus" type="button">−</button><b>${portions}</b><button id="plus" type="button">+</button></div><div class="dialog-columns"><div><h4>Ingredientes</h4><ul>${recipe.ingredients.map(i => `<li>${amount(i)}</li>`).join('')}</ul></div><div><h4>Pasos</h4><ol>${recipe.steps.map(step => `<li>${step}</li>`).join('')}</ol></div></div><div class="dialog-tip"><strong>Consejo:</strong> ${recipe.tip}<br /><strong>Sustituciones:</strong> ${recipe.substitutions}</div><div class="dialog-actions"><button class="button button-dark" id="shareRecipe" type="button">Compartir ↗</button><button class="button button-secondary" id="shoppingList" type="button">Añadir ingredientes</button></div></div>`;
    $('#minus').onclick = () => { if (portions > 1) { portions--; paint(); } };
    $('#plus').onclick = () => { if (portions < 20) { portions++; paint(); } };
    $('#shareRecipe').onclick = () => shareRecipe(recipe);
    $('#shoppingList').onclick = () => { localStorage.setItem('saboria-shopping', JSON.stringify(recipe.ingredients)); toast('Ingredientes guardados como lista de compras.'); };
  };
  paint(); $('#recipeDialog').showModal();
}

async function shareRecipe(recipe) {
  const data = { title: `${recipe.title} · Saboria`, text: `Mira esta receta en Saboria: ${recipe.title}`, url: `${location.href.split('#')[0]}#${recipe.id}` };
  try { if (navigator.share) await navigator.share(data); else { await navigator.clipboard.writeText(data.url); toast('Enlace copiado para compartir.'); } } catch { toast('Puedes compartir el enlace de esta página.'); }
}

function toast(message) { const element = $('#toast'); element.textContent = message; element.classList.add('show'); window.clearTimeout(window.saboriaToast); window.saboriaToast = window.setTimeout(() => element.classList.remove('show'), 2800); }
function saveFavorites() { localStorage.setItem('saboria-favorites', JSON.stringify([...state.favorites])); }

document.addEventListener('click', event => {
  const favorite = event.target.closest('[data-favorite]');
  if (favorite) { const id = favorite.dataset.favorite; state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id); saveFavorites(); renderRecipes(); renderFeatured(); return; }
  const card = event.target.closest('[data-id]');
  if (card) { const recipe = recipes.find(item => item.id === card.dataset.id); if (recipe) renderDialog(recipe); }
  const pantryButton = event.target.closest('[data-pantry]');
  if (pantryButton) { const name = pantryButton.dataset.pantry; state.pantry.has(name) ? state.pantry.delete(name) : state.pantry.add(name); renderPantry(); updateFinder(); }
});

$('#searchInput').addEventListener('input', event => { state.query = event.target.value; renderRecipes(); });
$('#categoryFilters').addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (!button) return; state.category = button.dataset.category; document.querySelectorAll('[data-category]').forEach(item => item.classList.toggle('active', item === button)); renderRecipes(); });
$('#clearIngredients').onclick = () => { state.pantry.clear(); renderPantry(); updateFinder(); };
$('#showMatches').onclick = () => { const selected = [...state.pantry]; if (!selected.length) { toast('Selecciona al menos un ingrediente.'); return; } const best = recipes.filter(r => selected.some(i => r.tags.includes(i))); $('#searchInput').value = ''; state.query = ''; state.category = 'Todas'; document.querySelectorAll('[data-category]').forEach((item, i) => item.classList.toggle('active', i === 0)); renderRecipes(); document.querySelector('#todas').scrollIntoView({ behavior: 'smooth' }); toast(`${best.length} ideas encontradas con tu despensa.`); };
$('#clearFilters').onclick = () => { state.query = ''; state.category = 'Todas'; $('#searchInput').value = ''; document.querySelectorAll('[data-category]').forEach((item, i) => item.classList.toggle('active', i === 0)); renderRecipes(); };
$('#dialogClose').onclick = () => $('#recipeDialog').close(); $('#recipeDialog').addEventListener('click', event => { if (event.target === $('#recipeDialog')) $('#recipeDialog').close(); });
$('#themeToggle').onclick = () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; document.body.classList.toggle('dark', state.theme === 'dark'); localStorage.setItem('saboria-theme', state.theme); $('#themeToggle').textContent = state.theme === 'dark' ? '☀' : '☾'; };
$('#menuButton').onclick = event => { const open = $('#mainNav').classList.toggle('open'); event.currentTarget.setAttribute('aria-expanded', open); };
$('#askChef').onclick = () => { const input = $('#chefIngredients').value.toLowerCase(); const found = recipes.find(recipe => recipe.ingredients.filter(i => input.includes(i.name)).length >= 2) || recipes.find(recipe => recipe.category === 'Rápidas'); if (!input.trim()) { $('#chefAnswer').textContent = 'Cuéntame al menos dos ingredientes para empezar.'; return; } const matched = found.ingredients.filter(i => input.includes(i.name)).map(i => i.name); $('#chefAnswer').textContent = `Te propongo ${found.title}. Usa ${matched.join(' y ')} que ya tienes; ${found.missing?.length ? 'revisa los ingredientes restantes en la ficha.' : 'abre la ficha para ver el paso a paso.'}`; };
$('#proButton').onclick = () => toast('Saboria PRO todavía no cobra. Te avisaremos cuando abramos el acceso.');
document.body.classList.toggle('dark', state.theme === 'dark'); $('#themeToggle').textContent = state.theme === 'dark' ? '☀' : '☾'; $('#recipeTotal').textContent = recipes.length; renderPantry(); updateFinder(); renderFeatured(); renderRecipes();
