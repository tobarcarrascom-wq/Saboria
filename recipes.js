const artPalette = {
  'Comida chilena': ['#dceee8', '#143e36'], 'Económicas': ['#f6c45f', '#143e36'],
  'Rápidas': ['#ffe0d7', '#7c3429'], 'Desayunos': ['#fff0bd', '#665019'],
  'Almuerzos': ['#e2eee7', '#285949'], 'Cenas': ['#d9e6e2', '#173f37'],
  'Postres': ['#f5d6d0', '#713a3a'], 'Vegetarianas': ['#d7ead4', '#315b2e'],
  'Proteicas': ['#dce4ef', '#27466c'], 'Equilibradas': ['#e1eee7', '#26574e'],
  'Estudiantes': ['#eee5d7', '#594633']
};

function recipeArt(title, category, emoji) {
  const [background, ink] = artPalette[category] || ['#dceee8', '#143e36'];
  const safeTitle = title.replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620"><rect width="900" height="620" fill="${background}"/><circle cx="760" cy="-30" r="230" fill="${ink}" opacity=".12"/><circle cx="115" cy="535" r="190" fill="#ef765f" opacity=".18"/><text x="90" y="250" font-size="150">${emoji}</text><text x="90" y="400" font-family="Georgia,serif" font-size="48" font-weight="700" fill="${ink}">${safeTitle.slice(0, 24)}</text><text x="90" y="470" font-family="Arial,sans-serif" font-size="22" letter-spacing="4" fill="${ink}" opacity=".75">${category.toUpperCase()}</text><path d="M700 480c40-50 90-50 130 0" fill="none" stroke="${ink}" stroke-width="8" stroke-linecap="round" opacity=".45"/></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const recipeSpecs = [
  ['Pastel de choclo de olla','Comida chilena','🌽','60 min','Media',4,'pollo;choclo;cebolla;huevo','Dorar la cebolla y el pollo; cubrir con choclo molido y hornear hasta gratinar.','Usa choclo congelado bien escurrido.','Pollo por lentejas cocidas; azúcar por miel.'],
  ['Porotos granados express','Comida chilena','🥣','45 min','Fácil',4,'porotos;zapallo;choclo;albahaca','Cocer los porotos con zapallo; sumar el choclo al final y perfumar con albahaca.','No sobrecocines el choclo para conservar su textura.','Porotos frescos por congelados; albahaca por cilantro.'],
  ['Charquicán de verduras','Comida chilena','🥕','40 min','Fácil',4,'papa;zapallo;zanahoria;choclo','Cocer y moler las verduras; terminar con un sofrito y huevo encima.','Deja algunos cubos enteros para una textura casera.','Carne por champiñones; zapallo por camote.'],
  ['Cazuela de pollo casera','Comida chilena','🍲','55 min','Fácil',4,'pollo;papa;zapallo;choclo;arroz','Hervir el pollo; agregar las verduras por tiempo de cocción y servir con cilantro.','Retira la espuma del caldo para un resultado limpio.','Pollo por pavo; arroz por fideos de sopa.'],
  ['Empanadas de pino al horno','Comida chilena','🥟','75 min','Media',8,'carne;cebolla;huevo;harina','Cocinar el pino; rellenar la masa y hornear hasta dorar.','Enfría el pino antes de rellenar para sellar mejor.','Carne por soya texturizada; mantequilla por aceite.'],
  ['Sopaipillas al horno','Comida chilena','🫓','35 min','Fácil',12,'zapallo;harina;aceite','Mezclar la masa; cortar discos y hornear hasta que estén dorados.','Pincha el centro para que no se inflen demasiado.','Harina blanca por integral; aceite por mantequilla.'],
  ['Tomaticán de verano','Comida chilena','🍅','30 min','Fácil',4,'tomate;choclo;cebolla;carne','Sofreír la cebolla; sumar tomate, carne y choclo hasta espesar.','Un tomate maduro aporta dulzor sin añadir azúcar.','Carne por garbanzos; choclo por arvejas.'],
  ['Papas rellenas de pino','Comida chilena','🥔','65 min','Media',6,'papa;carne;cebolla;huevo','Formar un puré firme; rellenar con pino y dorar en horno o sartén.','Enfría el puré para que sea fácil de moldear.','Carne por lentejas; harina por maicena.'],
  ['Lentejas con zapallo','Económicas','🥣','40 min','Fácil',4,'lentejas;zapallo;zanahoria;arroz','Cocer las lentejas con verduras; agregar arroz y terminar con comino.','Remojar reduce el tiempo de cocción de las lentejas secas.','Arroz por papa; zapallo por camote.'],
  ['Arroz salteado de despensa','Económicas','🍚','20 min','Fácil',2,'arroz;huevo;zanahoria;cebollín','Saltear las verduras; incorporar arroz frío y huevo hasta cuajar.','El arroz del día anterior queda más suelto.','Huevo por tofu; cebollín por cebolla.'],
  ['Arroz con tomate y huevo','Rápidas','🍅','20 min','Fácil',2,'arroz;tomate;huevo;cebolla','Calentar el arroz; preparar un sofrito breve de tomate y cebolla y terminar con huevo revuelto.','Usa arroz cocido frío para que no se vuelva pastoso.','Huevo por tofu; tomate por pimentón asado.'],
  ['Fideos con salsa de atún','Económicas','🍝','20 min','Fácil',2,'pasta;atún;tomate;ajo','Cocer la pasta; reducir la salsa de tomate con ajo y mezclar con atún.','Reserva agua de cocción para ligar la salsa.','Atún por garbanzos; pasta por arroz.'],
  ['Tortilla de papas sencilla','Económicas','🍳','35 min','Fácil',3,'papa;huevo;cebolla','Cocinar las papas; mezclar con huevo y cuajar a fuego bajo por ambos lados.','Usa una sartén antiadherente y paciencia al voltear.','Papa por zapallo; cebolla por puerro.'],
  ['Guiso de garbanzos','Económicas','🍛','35 min','Fácil',4,'garbanzos;tomate;cebolla;espinaca','Sofreír la base; sumar garbanzos y tomate y terminar con espinaca.','Un toque de pimentón ahumado intensifica el sabor.','Garbanzos por porotos; espinaca por acelga.'],
  ['Polenta cremosa con verduras','Económicas','🌽','30 min','Fácil',2,'polenta;tomate;zapallo italiano;queso','Cocer la polenta; saltear las verduras y servir encima con queso.','Agrega el queso fuera del fuego para mayor cremosidad.','Polenta por puré de papa; queso por levadura nutricional.'],
  ['Tostadas de poroto blanco','Económicas','🍞','15 min','Fácil',2,'pan;porotos;limón;tomate','Moler los porotos con limón; tostar el pan y montar con tomate.','Añade aceite de oliva al puré para una textura sedosa.','Poroto blanco por garbanzo; pan por tortilla.'],
  ['Tacos de pollo y palta','Rápidas','🌮','20 min','Fácil',2,'pollo;palta;tortilla;limón','Saltear el pollo sazonado; calentar tortillas y completar con palta y limón.','Corta el pollo en tiras finas para que se cocine rápido.','Pollo por porotos negros; tortilla por hojas de lechuga.'],
  ['Pasta cremosa de tomate','Rápidas','🍝','25 min','Fácil',2,'pasta;tomate;ajo;queso','Cocer la pasta; reducir tomate y ajo; mezclar con queso y agua de cocción.','No enjuagues la pasta: su almidón ayuda a la salsa.','Queso por yogur natural; pasta por legumbres.'],
  ['Quesadillas de porotos negros','Rápidas','🫓','15 min','Fácil',2,'tortilla;porotos;queso;tomate','Rellenar las tortillas; dorar en sartén y cortar en triángulos.','Calienta la tortilla antes de doblar para que no se quiebre.','Queso por palta; porotos negros por lentejas.'],
  ['Omelette de espinaca','Rápidas','🍳','10 min','Fácil',1,'huevo;espinaca;queso;tomate','Saltear la espinaca; agregar huevo batido y doblar con queso.','Bate el huevo justo antes de cocinarlo.','Espinaca por acelga; queso por champiñones.'],
  ['Cuscús con verduras','Rápidas','🥗','15 min','Fácil',2,'cuscús;pepino;tomate;garbanzo','Hidratar el cuscús; mezclar con verduras, garbanzos y limón.','Hidrata con caldo para una base más sabrosa.','Cuscús por quinoa; garbanzo por atún.'],
  ['Pita de atún fresca','Rápidas','🥙','12 min','Fácil',2,'pan pita;atún;lechuga;tomate','Mezclar el atún con limón; rellenar la pita con vegetales crujientes.','Escurre bien el atún para que el pan no se humedezca.','Atún por pollo; pita por pan integral.'],
  ['Avena cremosa con plátano','Desayunos','🍌','10 min','Fácil',1,'avena;plátano;leche;canela','Cocer la avena con leche; terminar con plátano y canela.','Machaca medio plátano dentro de la olla para endulzar.','Leche por bebida vegetal; plátano por manzana.'],
  ['Huevos revueltos con tomate','Desayunos','🍳','12 min','Fácil',1,'huevo;tomate;pan;cebollín','Saltear el tomate; agregar huevo batido y servir sobre pan tostado.','Retira del fuego antes de que el huevo se vea completamente seco.','Pan por papa cocida; cebollín por cilantro.'],
  ['Pancakes de avena','Desayunos','🥞','20 min','Fácil',2,'avena;huevo;plátano;leche','Licuar la mezcla; cocinar porciones pequeñas y dorar por ambos lados.','Deja reposar la mezcla cinco minutos para espesar.','Avena por harina; leche por yogur diluido.'],
  ['Yogur con granola casera','Desayunos','🥣','18 min','Fácil',2,'yogur;avena;frutilla;miel','Tostar la avena con miel; enfriar y servir con yogur y fruta.','Guarda la granola aparte para mantenerla crujiente.','Yogur por kéfir; frutilla por manzana.'],
  ['Tostada de palta y huevo','Desayunos','🥑','15 min','Fácil',1,'pan;palta;huevo;limón','Tostar el pan; moler palta y sumar huevo cocido o pochado.','Agrega el limón a la palta justo después de molerla.','Pan por tortilla; huevo por garbanzos.'],
  ['Chía nocturna con cacao','Desayunos','🍫','8 h','Fácil',1,'chía;leche;cacao;plátano','Mezclar todo salvo el plátano; refrigerar toda la noche y terminar con fruta.','Agita una vez después de diez minutos para evitar grumos.','Leche por bebida vegetal; cacao por canela.'],
  ['Pollo al horno con papas','Almuerzos','🍗','55 min','Fácil',4,'pollo;papa;zanahoria;limón','Sazonar todo; hornear hasta que el pollo esté completamente cocido y las papas tiernas.','Corta las papas del mismo tamaño para que se cocinen parejo.','Pollo por trutro de pavo; papa por camote.'],
  ['Bowl de arroz y huevo','Almuerzos','🍚','25 min','Fácil',2,'arroz;huevo;pepino;zanahoria','Cocer el arroz; montar con verduras y huevo a la plancha.','Un chorrito de limón une todos los sabores.','Arroz por quinoa; huevo por tofu.'],
  ['Lasaña de verduras','Almuerzos','🍆','70 min','Media',6,'pasta;zapallo italiano;tomate;queso','Saltear las verduras; montar capas con salsa y queso y hornear.','Deja reposar diez minutos antes de cortar.','Pasta por berenjena; queso por salsa blanca vegetal.'],
  ['Merluza con ensalada chilena','Almuerzos','🐟','30 min','Fácil',2,'merluza;tomate;cebolla;limón','Cocinar la merluza; mezclar tomate y cebolla con limón y servir juntos.','Seca el pescado antes de dorarlo para evitar que se pegue.','Merluza por reineta; pescado por garbanzos.'],
  ['Ensalada tibia de quinoa','Almuerzos','🥗','30 min','Fácil',3,'quinoa;zapallo;espinaca;queso','Asar el zapallo; mezclar con quinoa cocida, espinaca y queso.','Enjuaga la quinoa para quitar su amargor natural.','Quinoa por arroz integral; queso por semillas.'],
  ['Buddha bowl de garbanzos','Almuerzos','🥗','35 min','Fácil',2,'garbanzos;arroz;zanahoria;pepino','Dorar los garbanzos; combinar con arroz y vegetales y terminar con limón.','Seca los garbanzos antes de saltearlos para dorarlos mejor.','Arroz por cuscús; garbanzos por lentejas.'],
  ['Salmón con miel y sésamo','Cenas','🐟','30 min','Media',2,'salmón;miel;sésamo;limón','Pincelar el salmón; hornear y terminar con sésamo y limón.','No cocines de más: retíralo cuando el centro aún esté jugoso.','Salmón por jurel; miel por jarabe de dátil.'],
  ['Curry de garbanzos','Cenas','🍛','35 min','Fácil',4,'garbanzos;coco;cebolla;espinaca','Sofreír la cebolla; agregar leche de coco y garbanzos; terminar con espinaca.','Añade la espinaca al final para conservar su color.','Coco por tomate triturado; garbanzo por lentejas.'],
  ['Crema de zapallo asado','Cenas','🍲','45 min','Fácil',4,'zapallo;cebolla;zanahoria;caldo','Asar las verduras; licuar con caldo caliente y ajustar la textura.','Asar en vez de hervir concentra el sabor.','Zapallo por camote; caldo por agua con hierbas.'],
  ['Risotto de champiñones','Cenas','🍚','40 min','Media',3,'arroz;champiñón;cebolla;queso','Sofreír el arroz; añadir caldo de a poco y terminar con champiñones y queso.','Remueve con suavidad para liberar el almidón sin romper el grano.','Arroz arborio por carnaroli; queso por levadura nutricional.'],
  ['Shakshuka de tomate','Cenas','🍳','30 min','Fácil',2,'huevo;tomate;cebolla;pimentón','Reducir la salsa; abrir espacios y cocinar los huevos tapados.','Tapa la sartén para cuajar la clara sin secar la yema.','Huevo por tofu; pimentón por zapallo italiano.'],
  ['Brownie de chocolate','Postres','🍫','45 min','Fácil',8,'chocolate;harina;huevo;mantequilla','Derretir chocolate y mantequilla; mezclar con huevo y harina y hornear sin sobrecocer.','Enfría completamente antes de cortar cuadrados limpios.','Mantequilla por aceite neutro; harina por avena molida.'],
  ['Manzanas asadas con canela','Postres','🍎','35 min','Fácil',4,'manzana;canela;avena;miel','Rellenar las manzanas con avena y canela; hornear hasta tiernas.','Elige manzanas firmes para que mantengan su forma.','Miel por azúcar rubia; avena por nueces.'],
  ['Mousse rápida de yogur','Postres','🍓','15 min','Fácil',4,'yogur;frutilla;miel;limón','Triturar la fruta; mezclar con yogur y limón y enfriar antes de servir.','Refrigera al menos una hora para una textura más firme.','Frutilla por mango; miel por plátano maduro.'],
  ['Queque de plátano','Postres','🍌','55 min','Fácil',8,'plátano;harina;huevo;canela','Mezclar los plátanos con huevo; incorporar harina y hornear hasta que un palillo salga seco.','Los plátanos muy maduros aportan dulzor y humedad.','Harina por avena; huevo por puré de manzana.'],
  ['Trufas de avena y cacao','Postres','🍫','20 min','Fácil',12,'avena;cacao;plátano;coco','Moler y mezclar; formar bolitas y refrigerar hasta que estén firmes.','Humedece las manos para formar las trufas sin que se peguen.','Coco por sésamo; plátano por dátiles.'],
  ['Ensalada de quinoa fresca','Vegetarianas','🥗','20 min','Fácil',2,'quinoa;tomate;pepino;limón','Cocer y enfriar la quinoa; mezclar con vegetales y aliñar con limón.','Enfría la quinoa extendida para que no se apelmace.','Quinoa por cuscús; pepino por apio.'],
  ['Berenjenas rellenas','Vegetarianas','🍆','50 min','Media',2,'berenjena;lentejas;tomate;queso','Asar las berenjenas; rellenar con lentejas y tomate y gratinar con queso.','Sala la berenjena diez minutos y sécala antes de hornear.','Queso por nueces; lentejas por garbanzos.'],
  ['Hamburguesas de lentejas','Vegetarianas','🍔','35 min','Fácil',4,'lentejas;avena;zanahoria;cebolla','Moler parte de las lentejas; mezclar y formar hamburguesas para dorar en sartén.','Refrigera la mezcla para que se compacte.','Avena por pan rallado; lentejas por porotos.'],
  ['Papas al romero con huevo','Vegetarianas','🥔','35 min','Fácil',2,'papa;huevo;romero;tomate','Asar papas con romero; servir con huevo y tomate fresco.','Hierve las papas cinco minutos antes de hornear para acelerar el proceso.','Huevo por tofu; romero por orégano.'],
  ['Tofu salteado con verduras','Vegetarianas','🥢','25 min','Fácil',2,'tofu;zanahoria;brócoli;sésamo','Dorar el tofu; añadir verduras y saltear hasta tiernas pero crujientes.','Presiona el tofu antes de cocinar para que dore mejor.','Tofu por pollo; brócoli por coliflor.'],
  ['Pollo con yogur y hierbas','Proteicas','🍗','30 min','Fácil',2,'pollo;yogur;limón;hierbas','Marinar el pollo; cocinar a la plancha y servir con salsa de yogur y limón.','No reutilices la marinada cruda como salsa.','Pollo por pavo; yogur por kéfir.'],
  ['Atún con porotos verdes','Proteicas','🐟','20 min','Fácil',2,'atún;poroto verde;huevo;tomate','Cocer los vegetales; mezclar con atún y huevo y aliñar con limón.','Enfría los porotos inmediatamente para mantener el color.','Atún por jurel; huevo por garbanzos.'],
  ['Bowl de pollo y quinoa','Proteicas','🥗','35 min','Fácil',2,'pollo;quinoa;espinaca;palta','Cocer quinoa; dorar el pollo y montar con espinaca y palta.','Deja reposar la quinoa cinco minutos antes de soltarla.','Pollo por tofu; quinoa por arroz integral.'],
  ['Tortilla de atún y papa','Proteicas','🍳','30 min','Fácil',3,'atún;papa;huevo;cebolla','Cocer la papa; mezclar con atún y huevo y cuajar con cebolla.','Usa fuego bajo para cocinar el centro sin quemar la base.','Atún por pollo desmenuzado; papa por camote.'],
  ['Ensalada equilibrada de garbanzos','Equilibradas','🥗','18 min','Fácil',2,'garbanzos;tomate;pepino;palta','Mezclar todos los ingredientes y aliñar con limón y aceite.','Aliña justo antes de servir para que los vegetales sigan crujientes.','Palta por aceitunas; garbanzos por lentejas.'],
  ['Arroz integral con verduras','Equilibradas','🍚','40 min','Fácil',3,'arroz;zanahoria;brócoli;huevo','Cocer arroz; saltear vegetales y sumar huevo en tiras.','Cocina el arroz con la proporción indicada en el envase.','Arroz integral por quinoa; huevo por tofu.'],
  ['Crepes de avena salados','Estudiantes','🥞','25 min','Fácil',2,'avena;huevo;leche;tomate','Licuar la masa; cocinar crepes finos y rellenar con tomate y queso.','Deja reposar la masa para que la avena se hidrate.','Leche por agua; queso por hummus.'],
  ['Pasta de una olla','Estudiantes','🍝','25 min','Fácil',2,'pasta;tomate;cebolla;espinaca','Cocer todo en una sola olla; remover y terminar con espinaca.','Usa una olla amplia para que la pasta se hidrate parejo.','Espinaca por arvejas; pasta por arroz.'],
  ['Arroz con huevo y verduras','Estudiantes','🍚','20 min','Fácil',2,'arroz;huevo;cebolla;zanahoria','Saltear cebolla y zanahoria; incorporar arroz cocido y huevo.','Un poco de salsa de soya es opcional, no imprescindible.','Arroz por fideos; huevo por garbanzos.'],
  ['Sándwich caliente de pollo','Estudiantes','🥪','15 min','Fácil',1,'pan;pollo;queso;tomate','Calentar el pollo; montar el sándwich y dorar hasta fundir el queso.','Tuesta el pan antes de rellenar para evitar que se ablande.','Pollo por atún; queso por palta.'],
  ['Papas rellenas de atún','Estudiantes','🥔','35 min','Fácil',2,'papa;atún;mayonesa;cebollín','Cocer la papa; mezclar su interior con atún y devolver al horno.','Ajusta la humedad con yogur natural en vez de más mayonesa.','Atún por garbanzos; mayonesa por yogur.']
];

// Grupo 1 auditado localmente: cantidades métricas y pasos específicos.
// Estas cantidades son una base editorial orientativa; no representan una prueba física.
const recipeOverrides = {
  'Pastel de choclo de olla': {
    ingredientText: 'pollo;choclo;cebolla;huevo;leche;aceite',
    quantities: ['500 g', '800 g', '1 unidad grande (200 g)', '2 unidades', '120 ml', '15 ml'],
    method: 'Cocinar el pollo y desmenuzarlo; sofreír la cebolla y mezclarla con el pollo; procesar el choclo con la leche; cubrir el relleno con el choclo y cocinar tapado a fuego bajo hasta que cuaje; dorar brevemente la superficie si usas horno.',
    steps: ['Corta la cebolla, cocina el pollo hasta que no queden partes crudas y desmenúzalo.', 'Sofríe la cebolla con el aceite hasta que esté transparente y mézclala con el pollo.', 'Procesa el choclo con la leche hasta obtener una mezcla gruesa, no completamente líquida.', 'Distribuye el relleno en una olla o fuente apta para horno y cubre con el choclo.', 'Cocina tapado a fuego bajo hasta que el centro cuaje; para dorar, termina unos minutos en horno fuerte.', 'Deja reposar 5 minutos antes de servir. Mantén separado el pollo crudo de los alimentos listos.']
  },
  'Porotos granados express': {
    ingredientText: 'porotos;zapallo;choclo;albahaca;cebolla;aceite',
    quantities: ['800 g cocidos', '500 g', '300 g', '10 hojas', '1 unidad mediana', '15 ml'],
    method: 'Sofreír la cebolla; agregar el zapallo y agua suficiente para cubrir; sumar los porotos y el choclo; cocinar hasta que el zapallo esté tierno y terminar con albahaca.',
    steps: ['Pica la cebolla y el zapallo en cubos parejos; escurre los porotos cocidos.', 'Sofríe la cebolla con el aceite hasta ablandarla.', 'Agrega el zapallo y agua apenas suficiente para cubrirlo; cocina hasta que comience a ablandarse.', 'Incorpora los porotos y el choclo y cocina hasta que el zapallo esté tierno y el caldo espese.', 'Apaga el fuego, añade la albahaca y prueba antes de ajustar la sal.', 'Refrigera las sobras dentro de 2 horas y caliéntalas completamente antes de servir.']
  },
  'Charquicán de verduras': {
    ingredientText: 'papa;zapallo;zanahoria;choclo;cebolla;huevo;aceite',
    quantities: ['700 g', '400 g', '2 unidades medianas', '250 g', '1 unidad mediana', '4 unidades', '15 ml'],
    method: 'Cocer la papa, el zapallo y la zanahoria; sofreír la cebolla; incorporar el choclo y las verduras cocidas; moler dejando algunos trozos y servir con huevo cocido o a la plancha.',
    steps: ['Pela y corta la papa, el zapallo y la zanahoria en trozos similares.', 'Cuece las verduras hasta que estén blandas y reserva parte del agua de cocción.', 'Sofríe la cebolla con el aceite y agrega el choclo hasta que esté tierno.', 'Incorpora las verduras cocidas y muele parcialmente; agrega agua reservada si queda seco.', 'Cocina los huevos hasta la consistencia deseada y sirve uno por porción.', 'Evita mezclar utensilios que hayan tocado huevo crudo con el plato terminado.']
  },
  'Cazuela de pollo casera': {
    ingredientText: 'pollo;papa;zapallo;choclo;arroz;cebolla;cilantro',
    quantities: ['600 g', '4 unidades medianas', '400 g', '2 unidades', '60 g', '1 unidad', '10 g'],
    method: 'Hervir el pollo con la cebolla; agregar las papas, el zapallo y el choclo según su tiempo de cocción; sumar el arroz al final y servir con cilantro.',
    steps: ['Lava y corta las verduras; usa una tabla separada para el pollo crudo.', 'Hierve el pollo con la cebolla en agua suficiente para formar el caldo y retira la espuma.', 'Agrega las papas y, después de unos minutos, el zapallo y el choclo.', 'Incorpora el arroz cuando las verduras estén a medio cocer y continúa hasta que todo esté tierno.', 'Comprueba que el pollo esté completamente cocido antes de servir.', 'Termina con cilantro picado y sirve caliente.']
  },
  'Empanadas de pino al horno': {
    ingredientText: 'carne;cebolla;huevo;harina;mantequilla;agua;aceite',
    quantities: ['500 g molida', '700 g', '2 unidades', '500 g', '100 g', '200 ml', '15 ml'],
    method: 'Cocinar el pino de carne y cebolla; preparar una masa con harina, mantequilla y agua; enfriar el pino; rellenar, cerrar y hornear hasta dorar.',
    steps: ['Pica la cebolla y cocínala con el aceite hasta que esté transparente; agrega la carne y cocina completamente.', 'Deja enfriar el pino antes de rellenar para que la masa no se humedezca.', 'Mezcla la harina con la mantequilla y el agua hasta formar una masa suave; deja reposar 15 minutos.', 'Divide la masa, estira discos y coloca una porción de pino en el centro.', 'Cierra los bordes, pinta con huevo batido y hornea hasta que estén doradas.', 'Lávate las manos y limpia las superficies después de manipular carne cruda.']
  },
  'Sopaipillas al horno': {
    ingredientText: 'zapallo;harina;aceite',
    quantities: ['400 g cocido', '500 g', '30 ml'],
    method: 'Mezclar el zapallo cocido con la harina y el aceite; formar una masa; cortar discos y hornear hasta que estén dorados.',
    steps: ['Muele el zapallo cocido y deja que pierda el exceso de vapor.', 'Mezcla con la harina y el aceite hasta formar una masa que no se pegue demasiado.', 'Estira la masa de aproximadamente 8 mm y corta discos.', 'Pincha el centro de cada disco para que no se infle en exceso.', 'Hornea hasta que estén cocidas y ligeramente doradas; deja entibiar antes de servir.']
  },
  'Tomaticán de verano': {
    ingredientText: 'tomate;choclo;cebolla;carne;aceite',
    quantities: ['700 g maduros', '300 g', '1 unidad grande', '400 g en tiras', '15 ml'],
    method: 'Sofreír la cebolla; cocinar la carne; sumar el tomate y el choclo; reducir hasta obtener un guiso espeso.',
    steps: ['Pica la cebolla y los tomates; corta la carne en tiras delgadas.', 'Sofríe la cebolla con el aceite y agrega la carne hasta que esté completamente cocida.', 'Añade el tomate y cocina hasta que libere sus jugos.', 'Incorpora el choclo y reduce a fuego medio hasta que el guiso espese.', 'Prueba y ajusta los condimentos; sirve caliente.', 'Limpia la tabla y los utensilios usados con carne cruda antes de reutilizarlos.']
  },
  'Papas rellenas de pino': {
    ingredientText: 'papa;carne;cebolla;huevo;harina;aceite',
    quantities: ['1,2 kg', '400 g molida', '300 g', '2 unidades', '80 g', '30 ml'],
    method: 'Cocer las papas y preparar un puré firme; cocinar el pino de carne y cebolla; rellenar, cerrar y dorar en horno o sartén.',
    steps: ['Cuece las papas hasta que estén blandas, pélalas calientes y forma un puré firme.', 'Cocina la cebolla con parte del aceite y agrega la carne hasta que no queden partes crudas; deja enfriar.', 'Toma una porción de puré, forma un hueco y agrega el pino en el centro.', 'Cierra con cuidado, pasa por harina y sella la superficie.', 'Dora en sartén con el aceite restante o termina en horno hasta que la cubierta esté firme.', 'Deja reposar unos minutos antes de servir para evitar quemaduras con el relleno.']
  },
  'Lentejas con zapallo': {
    ingredientText: 'lentejas;zapallo;zanahoria;arroz;cebolla;comino',
    quantities: ['300 g secas', '400 g', '2 unidades medianas', '80 g', '1 unidad', '2 g'],
    method: 'Cocer las lentejas con la cebolla y la zanahoria; agregar el zapallo; incorporar el arroz y terminar con comino.',
    steps: ['Enjuaga las lentejas y revisa que no tengan impurezas.', 'Cocínalas con la cebolla y la zanahoria en agua hasta que comiencen a ablandarse.', 'Agrega el zapallo en cubos y continúa la cocción hasta que esté tierno.', 'Incorpora el arroz y cocina hasta que esté listo; añade agua si el guiso se espesa demasiado.', 'Termina con comino, prueba y ajusta la sal.', 'Enfría las sobras rápidamente en recipientes bajos antes de refrigerar.']
  },
  'Arroz salteado de despensa': {
    ingredientText: 'arroz;huevo;zanahoria;cebollín;aceite',
    quantities: ['400 g cocido y frío', '2 unidades', '2 unidades medianas', '2 unidades', '15 ml'],
    method: 'Saltear la zanahoria y el cebollín; incorporar el arroz frío; añadir el huevo batido y cocinar hasta que cuaje.',
    steps: ['Usa arroz cocido y frío; separa los granos con un tenedor.', 'Corta la zanahoria y el cebollín en trozos pequeños.', 'Calienta el aceite y saltea la zanahoria hasta que se ablande ligeramente.', 'Agrega el arroz y el cebollín y saltea hasta que todo esté caliente.', 'Haz un espacio en el centro, añade el huevo batido y remueve hasta que cuaje.', 'Recalienta solo la porción que comerás y refrigera el resto dentro de 2 horas.']
  }
};

function safetyNotes(ingredientText) {
  const notes = [];
  const names = ingredientText.split(';');
  if (names.some(name => ['pollo', 'carne', 'pavo', 'merluza', 'salmón', 'atún'].includes(name))) {
    notes.push('Cocina completamente las carnes y pescados; usa utensilios limpios para manipular los alimentos ya cocidos.');
  }
  if (names.includes('huevo')) {
    notes.push('Cocina el huevo hasta la consistencia deseada y evita el contacto entre huevo crudo y alimentos listos para servir.');
  }
  if (names.some(name => ['leche', 'yogur', 'queso', 'mayonesa'].includes(name))) {
    notes.push('Mantén los lácteos y preparaciones con mayonesa refrigerados y no los dejes fuera por periodos prolongados.');
  }
  notes.push('Refrigera las sobras dentro de 2 horas, en un recipiente limpio, y consúmelas dentro de 2 días si se mantuvieron bien refrigeradas.');
  return notes;
}

function recipeSlug(title) {
  return title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function approximateQuantity(name, servings, index) {
  const n = name.toLowerCase();
  const people = Math.max(1, Number(servings) || 2);
  if (n === 'huevo') return `aprox. ${people} unidades`;
  if (n.includes('pollo') || n === 'carne' || n === 'merluza' || n === 'salmón' || n === 'tofu') return `aprox. ${people * 125} g`;
  if (n === 'atún') return `aprox. ${people * 80} g escurrido`;
  if (n === 'papa') return `aprox. ${people * 200} g`;
  if (n === 'zapallo') return `aprox. ${people * 150} g`;
  if (n === 'tomate' || n === 'pepino' || n === 'berenjena' || n === 'manzana' || n === 'plátano' || n === 'zanahoria') return `aprox. ${people} unidades`;
  if (n === 'cebolla' || n === 'cebollín') return `aprox. ${Math.max(1, Math.ceil(people / 2))} unidades`;
  if (n === 'choclo' || n === 'poroto verde' || n === 'brócoli') return `aprox. ${people * 100} g`;
  if (n === 'arroz' || n === 'quinoa' || n === 'cuscús' || n === 'polenta' || n === 'pasta' || n === 'lentejas' || n === 'garbanzos' || n === 'porotos') return `aprox. ${people * 75} g secos`;
  if (n === 'avena' || n === 'harina') return `aprox. ${people * 60} g`;
  if (n === 'queso' || n === 'chocolate' || n === 'mantequilla') return `aprox. ${people * 30} g`;
  if (n === 'leche' || n === 'yogur' || n === 'coco' || n === 'caldo') return `aprox. ${people * 120} ml`;
  if (n === 'pan' || n === 'tortilla' || n === 'pan pita') return `aprox. ${people} unidades`;
  if (n === 'aceite' || n === 'miel' || n === 'mayonesa') return `aprox. ${people * 10} ml`;
  if (n === 'limón') return `aprox. ${Math.max(1, Math.ceil(people / 2))} unidades`;
  return index === 0 ? 'aprox. 1 unidad' : 'aprox. 1 cucharadita';
}

function buildSteps(method, ingredientText) {
  const ingredients = ingredientText.split(';').join(', ');
  const methodSteps = method.split(';').map(step => step.trim()).filter(Boolean);
  return [
    `Antes de comenzar, reúne ${ingredients}, lava los vegetales y deja lista el área de trabajo.`,
    ...methodSteps,
    'Prueba la preparación, ajusta sal o condimentos si corresponde y sirve según la receta.',
    ...safetyNotes(ingredientText)
  ];
}

function buildRecipe(spec, index) {
  const [title, category, emoji, time, difficulty, servings, ingredientText, method, tip, substitutions] = spec;
  const override = recipeOverrides[title] || {};
  const finalIngredientText = override.ingredientText || ingredientText;
  const finalMethod = override.method || method;
  const ingredientNames = finalIngredientText.split(';');
  const quantities = override.quantities || ingredientNames.map((name, i) => approximateQuantity(name, servings, i));
  const ingredients = ingredientNames.map((name, i) => ({name, quantity: quantities[i] || 'cantidad por verificar'}));
  return { id: `saboria-${index + 1}`, slug: recipeSlug(title), title, category, emoji, time, difficulty, servings, ingredients, method: finalMethod, tip, substitutions, quantityStatus: override.quantities ? 'revisión editorial; requiere validación humana' : 'cantidad orientativa generada; requiere validación humana', steps: override.steps || buildSteps(finalMethod, finalIngredientText), photo: recipeArt(title, category, emoji), tags: [category, ...ingredientNames]};
}

const recipes = recipeSpecs.map(buildRecipe);
