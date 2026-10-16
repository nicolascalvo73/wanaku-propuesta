Wanaku Moto es la marca salteña de alforjas y bolsos para motos trail y adventure, cosidos a mano por su fundador en Salta. Wanaku es "guanaco" en quechua: la marca es territorio, polvo, altura y ruta de ripio. El sistema sale de lo que la marca ya muestra hoy: la señalética vial argentina. Rombo amarillo de "cuidado guanacos", carteles verdes de ruta con letra condensada y tela color coyote.

## Concepto

- Idea madre: "Equipaje nacido en la Puna". Cada pieza tiene que sentirse hecha para la ruta, no para una vidriera.
- Los modelos llevan nombres del NOA y Cuyo: Chulengo, Tuzgle, Ñaño, Uspallata, Cacheuta, Adobe, Tiyu, Cuyi. Escribilos siempre con su mayúscula inicial y la tilde o la ñ que tienen.
- Mapa de viaje: las secciones se unen con una línea de ruta; el fondo puede llevar curvas de nivel muy sutiles.

## Contenido

- Hablá de motero a motero, en voseo rioplatense: "Elegí tu equipo", "Sumate a la rodada", "Medí tu portaequipaje antes de pedir". Nunca "usted" ni español neutro.
- Sé honesto y técnico cuando hace falta: capacidad en litros, tela, qué modelo lleva estructura y cuál no. Una promesa se respalda con un dato.
- Los datos de producto van en `spec`, en mayúsculas y separados por " · ": "35 L POR LADO · REQUIERE PORTAEQUIPAJE".
- Los precios van en `price` con punto de miles y el signo antes: "$ 335.000". Aclará siempre "+ envío" y "solo Argentina".
- Sin emoji ni signos de exclamación en títulos. Mayúsculas solo en `display-xl` y `sign-label`.

## Color

- Fondo `surface` (blanco salino) de día y `surface` oscuro (asfalto) de noche; tarjetas en `surface-raised`; texto en `ink`, secundario en `ink-muted`.
- `signal` es el único color de acción: un CTA primario por vista, siempre con `on-signal` encima, como una señal de ruta. No lo uses como texto sobre `surface` en el tema Día.
- `route` marca los carteles de modelo, la disponibilidad y los enlaces. `coyote`, `cardon`, `puna` y `quebrada` son los colores del paisaje: bloques, fondos de sección e ilustraciones.
- El home baja del mediodía al atardecer: el cielo del hero pasa de `puna` a `quebrada` a medida que se scrollea. Mantené el texto sobre fondos que lo tengan a 4.5:1.
- Estados (stock, error, aviso) con palabra o ícono además del color; `danger` y `route` no se distinguen solo por tono. El foco usa `focus-ring` a 2px con 2px de offset.

## Tipografía y forma

- Títulos en `display-xl`, `display-lg` y `display-md` (Barlow Condensed, de la familia de la cartelería vial). Texto en `body`, `title` y `button`. Datos en `spec` y `price`. Las fuentes son de Google Fonts: cargá Barlow Condensed, Barlow y JetBrains Mono.
- La etiqueta de modelo imita el cartel de ruta: `sign-label` sobre relleno `route` con `on-route`, esquinas `radius-lg` y un borde interior fino. Ejemplo: "TIYU 80L".
- El rombo de señal usa esquinas `radius-md`: relleno `signal`, borde `on-signal`, pictograma `on-signal`.
- Espaciado en escala de 4 px: `space-4` en tarjetas, `space-8` entre tarjetas, `space-12` entre secciones en móvil, `space-16` en escritorio. Tarjetas y paneles en `radius-lg`; botones e inputs en `radius-md`.
- Patrones andinos (textil de rombos escalonados) y curvas de nivel solo como textura de fondo, con `line-soft` o un 6% de `ink`, nunca detrás de texto largo. Sombra única: `shadow-raised` en hover.

## Fotografía e ilustración

- Producto en uso: moto cargada en ruta, polvo, luz natural. Los fondos recortados de las fotos actuales conviven con el cartel de modelo.
- Donde falte foto real, usá paisajes vectoriales en `puna`, `quebrada`, `cardon` y `coyote`, o un placeholder rotulado como tal: nunca una foto de stock que parezca de la marca.
- Fotos de clientes (wanakeros): siempre con nombre o usuario y el viaje ("rumbo a Ushuaia").

## Íconos

- El set propio está en `assets/Icons/`: rombo `signal` con borde y pictograma `on-signal`, redibujado a partir de las destacadas de Instagram. Usalo para equipos, filtros, eventos, envíos y carrito.
- Para íconos chicos dentro de texto o botones (menos de 32 px), usá el pictograma solo, en `ink`, con trazo parejo y esquinas redondeadas; el rombo se reserva para tamaños de 48 px o más.

## Logo

- Usá `assets/Logos/wanaku-logo.svg`: el rombo `signal` con borde `on-signal` y la silueta de guanaco, vectorizado desde el logo de perfil. La cola del guanaco se simplificó; hay que redibujarla a mano antes del uso final.
- Sobre fondo oscuro mantené el rombo completo, sin recolorearlo. Zona de respeto: la mitad del alto de la silueta alrededor.
- El original en baja resolución está en `assets/Logos/wanaku-logo-perfil.jpg`; no lo uses a más de 150 px.

## Movimiento

- Animá con Anime.js v4 (`animate`, `createTimeline`, `stagger`, `onScroll`). Interfaz: 200–400 ms con ease-out; hero y líneas de ruta: 600–1200 ms.
- Líneas de ruta con `stroke-dashoffset` ligadas al scroll, contadores de litros al entrar en pantalla y tarjetas con `stagger`. El polvo y las partículas son sutiles y pocos.
- Respetá `prefers-reduced-motion`: sin parallax ni partículas, solo cambios de opacidad.
