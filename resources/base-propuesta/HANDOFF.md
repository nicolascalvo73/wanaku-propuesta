# Wanaku Moto: base para la propuesta web

Material de partida para la skill /mondi-proposal. Todo sale de la carpeta `resources` y de la maqueta aprobada en esta sesión.

## Qué hay
- `site/index.html` + `site/app.js`: sitio estático de una sola página con router por hash (`#inicio`, `#tienda`, `#producto-<id>`, `#carrito`, `#eventos`, `#comunidad`, `#nosotros`, `#faq`). Sin build: se sube tal cual.
- `site/img/`: fotos de producto (`p-*.jpg`), fotos de clientes (`c-*.jpg`), `fondo.jpg` (hero) e íconos propios (`icons/*.svg`).
- `brand/tokens.json`: tokens del brand system (colores Día/Noche, tipografía, espaciado, radios). `brand/brand-README.md`: reglas de uso. `brand/wanaku-logo.svg`: logo vectorizado.

## Decisiones de marca
- La identidad es señalética vial argentina, no la paleta terracota del brief: rombo amarillo `#f5e945`, negro `#111111`, verde de cartel de ruta `#0b6e2e`, tela coyote `#8c5e37`. Puna `#1c3a5a` y Quebrada `#b0432a` son los extremos del cielo del hero, que cambia con el scroll.
- Tipografía: Barlow Condensed (títulos), Barlow (texto), JetBrains Mono (specs y precios), vía Google Fonts.
- Animación: Anime.js v4.3.6 por CDN (jsdelivr). Sin la librería o con `prefers-reduced-motion`, todo queda visible y sin animar.
- Tema claro y oscuro con tokens CSS en `:root`.

## Datos
- Los productos están en el array `P` al inicio de `app.js`: precio, litros, specs, compatibilidad, combos. Precios en ARS de referencia, más envío. Fuente: `datos-wanaku.json`.
- Eventos (`EV`), archivo (`PAST`), citas (`QUOTES`) y preguntas (`FAQ`) también están en `app.js`.

## Pendiente o maqueta
- Las 3 fechas de próximos eventos son ejemplos inventados (llevan la etiqueta "Ejemplo"). Los eventos del archivo son reales.
- FAQ: "tiempos de fabricación" y "cuidado del equipo" dicen "A completar con el taller".
- Sin foto: Bridas de anclaje. La ficha de Chulengo tiene solo 1 foto de producto más el parche.
- Logo vectorizado desde un JPG de 150 px; la cola del guanaco se perdió y hay que redibujarla.
- Íconos de Cuyi, Ñaño y sorteo: no estaban en `iconografia`.
- Carrito en `localStorage`. Mercado Pago, cálculo de envío (CP) e inscripción "Me sumo" son simulados: hay que conectarlos al backend real.
- Las fotos de producto son gráficos de Instagram con textos incrustados ("Lee la descripción"): conviene pedir fotos limpias.
- Aviso obligatorio en carrito y footer: no se realizan envíos internacionales. Contacto: WhatsApp +54 9 387 468-3262, Instagram @wanakumoto.

## Para deployar
- Es HTML, JS e imágenes estáticos: sirven `index.html`, `app.js` e `img/` desde la misma carpeta (ejemplo: `labs.mondistudio.com.ar/wanaku`, como las otras propuestas).
- Antes de publicar: revisar `<title>` y la meta description, y agregar Open Graph con una foto del hero.
- Sitio demo en producción: comprimir `img/` a WebP si hace falta; hoy pesan ~2 MB en total.
