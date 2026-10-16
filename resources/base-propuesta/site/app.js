(function(){
'use strict';
var RM=false;try{RM=matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){}
var AN=(!RM&&window.anime&&window.anime.animate)?window.anime:null;
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var money=function(n){return '$ '+Number(n).toLocaleString('es-AR')};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var WA='https://wa.me/5493874683262';

/* ---------- datos ---------- */
var P=[
 {id:'nano',name:'Ñaño v2.0',cat:'sin',liters:20,unit:'totales',price:175000,img:'img/p-nano.jpg',icon:'bolso-lateral',
  spec:['20 L totales','Sin estructura','Protecciones extra'],
  short:'Un equipo sencillo y ligero que no necesita estructura para ir en la moto.',
  ideal:'Enduro más fuerte y salidas del día con poca carga.',
  parts:['2 bolsos de 8 L','Agarre superior para sumar un bolso o un abrigo'],
  tela:'3 capas de tela antes de la lona interior, más parches de goma eva intercambiables.',
  compat:'No requiere portaequipaje.',combo:['cuyi'],
  why:{dia:'Liviano y de agarre fácil, no cambia la posición de manejo.',enduro:'Protecciones extra de tela para resistir caídas y golpes.'}},
 {id:'tiyu40',name:'Tiyu 40',cat:'sin',liters:40,unit:'totales',price:300000,img:'img/p-tiyu40.jpg',icon:'bolso-grande',
  spec:['40 L totales','Sin estructura','Doble refuerzo'],
  short:'El más práctico y versátil de los que no requieren estructura.',
  ideal:'Salidas largas, enduro y viajes de varios días con carga media.',
  parts:['2 laterales de 14 L','Superior de 12 L, convertible en mochila de emergencia','Molle bidireccional para sumar auxiliares'],
  tela:'Estructura en cordura 600 y refuerzos anti roces en cordura 1000.',
  compat:'No requiere portaequipaje. Ampliable con auxiliares de 4 L y superiores de 22, 30, 40 y 50 L.',combo:['auxiliares','cuyi'],
  why:{enduro:'Doble refuerzo en tela para aguantar golpes y caídas.',largo:'Molle bidireccional: sumás auxiliares cuando el viaje se alarga.'}},
 {id:'adobe',name:'Adobe v3',cat:'sin',liters:60,unit:'totales',price:276000,img:'img/p-adobe.jpg',icon:'bolso-grande',
  spec:['60 L totales','Sin estructura','Entrada de gama'],
  short:'El inicio de gama para las alforjas sin estructura: la mayor capacidad al mejor precio.',
  ideal:'Viajes tranquilos que no son solo off road, de vueltas cortas a viajes largos.',
  parts:['3 bolsos de 20 L','Sistema molle para desmontarlo'],
  tela:'Parches de goma eva intercambiables en la base.',
  compat:'No requiere portaequipaje. Se acopla a sistemas de bolsos superiores, sea cual sea su origen.',combo:['cacheuta'],
  why:{largo:'60 L al mejor precio, con molle para desmontar.',pais:'Se acopla a cualquier bolso superior.'}},
 {id:'tiyu80',name:'Tiyu 80',cat:'sin',liters:80,unit:'totales',price:425000,img:'img/p-tiyu80.jpg',icon:'bolso-grande',
  spec:['80 L totales','Sin estructura','Bolsos desmontables'],
  short:'La joya de los viajeros offroad.',
  ideal:'Viajes largos y vueltas al país, con la máxima protección.',
  parts:['Superior de 22 L','2 laterales de 25 L','2 auxiliares de 4 L'],
  tela:'Refuerzos con dos capas de tela para la mayor protección.',
  compat:'No requiere soporte. Podés retirar los bolsos adicionales para llevar una carga mínima.',combo:['cuyi'],
  why:{largo:'Equipado para viajes largos, con bolsos que se sacan.',pais:'80 L y dos capas de tela para semanas de ruta.'}},
 {id:'chulengo',name:'Chulengo v2.0',cat:'con',liters:35,unit:'por lado',price:335000,img:'img/p-chulengo.jpg',icon:'bolso-lateral-alto',pair:true,needsCompat:true,
  spec:['35 L por lado','Requiere portaequipaje','Precio por el par'],
  short:'El modelo para recorrer el país con la mayor capacidad de carga.',
  ideal:'Viajes largos con portaequipaje. Es el único para portaequipaje con el lado del escape inclinado, como CF o QJ.',
  parts:['2 bolsos de 35 L','Solapa para llevar un bidón chato de 5 L','Molle en los laterales para auxiliares de 4 L'],
  tela:'Zonas de roce reforzadas con cordura 1000.',
  compat:'Requiere portaequipaje. El sistema de agarre se adapta a cada modelo, por eso pedimos fotos y medidas antes de comprar.',combo:['bridas','auxiliares','cacheuta'],
  why:{largo:'35 L por lado y solapa para bidón de 5 L.',pais:'La mayor capacidad si tenés portaequipaje.'}},
 {id:'uspallata',name:'Uspallata v2.0',cat:'con',liters:25,unit:'por lado',price:245000,img:'img/p-uspallata.jpg',icon:'bolso-lateral',pair:true,needsCompat:true,
  spec:['25 L por lado','Requiere portaequipaje','Precio por el par'],
  short:'Un equipo ligero y práctico para el día a día o las salidas cortas.',
  ideal:'Uso diario y salidas cortas.',
  parts:['2 bolsos de 25 L'],
  tela:'',
  compat:'Requiere portaequipaje. Pedimos fotos y medidas porque el sistema de agarre se adapta a cada modelo.',combo:['bridas','tuzgle'],
  why:{dia:'25 L por lado, liviano para el día a día.'}},
 {id:'cacheuta',name:'Cacheuta v2.0',cat:'comp',liters:40,unit:'top case',price:127000,img:'img/p-cacheuta.jpg',icon:'bolso-superior',
  spec:['40 L','Top case','Se convierte en mochila'],
  short:'Un top case de mayor capacidad y más funcionalidad.',
  ideal:'Sumar capacidad arriba y poder llevarlo como mochila.',
  parts:['Top case de 40 L convertible en mochila'],tela:'',compat:'Se suma a Chulengo, Adobe y otros equipos.',combo:['tiyu40'],
  why:{dia:'Un top case que se lleva como mochila.'}},
 {id:'tuzgle',name:'Tuzgle',cat:'comp',liters:30,unit:'bolso',price:115000,img:'img/p-tuzgle.jpg',icon:'bolso-plano',
  spec:['30 L','Bolso','Reemplaza al top case'],
  short:'Un bolso práctico y sencillo para reemplazar el top case.',
  ideal:'Quien prefiere un bolso blando arriba.',
  parts:['Bolso de 30 L'],tela:'',compat:'Reemplaza al top case.',combo:['tiyu40'],why:{}},
 {id:'cuyi',name:'Cuyi',cat:'comp',liters:10,unit:'bolso',price:52000,img:'img/p-cuyi.jpg',icon:'bolso-plano',
  spec:['10 L','Bolso para defensas'],
  short:'Un bolso práctico para las defensas.',
  ideal:'Llevar a mano lo que usás en ruta.',
  parts:['Bolso de 10 L'],tela:'',compat:'Va en las defensas.',combo:['tiyu40'],why:{}},
 {id:'auxiliares',name:'Auxiliares',cat:'comp',liters:4,unit:'cada uno',price:29000,img:'img/p-auxiliares.jpg',icon:'bolso-plano',
  spec:['4 L','Sistema molle'],
  short:'Bolsos de 4 L aptos para el sistema molle de las alforjas.',
  ideal:'Cosas de acceso rápido.',
  parts:['Bolso de 4 L'],tela:'',compat:'Se agarran al molle de Tiyu y Chulengo.',combo:['tiyu40'],why:{}},
 {id:'bridas',name:'Bridas de anclaje',cat:'comp',liters:null,unit:'x4',price:11000,img:null,icon:'medir',
  spec:['Pack de 4','Anclajes'],
  short:'Bridas para los anclajes de Chulengo y Uspallata.',
  ideal:'Fijar las alforjas al portaequipaje.',
  parts:['4 bridas'],tela:'',compat:'Para Chulengo y Uspallata.',combo:[],why:{}}
];
var BY={};P.forEach(function(p){BY[p.id]=p});
var CAT={all:'Todos',sin:'Sin estructura',con:'Con portaequipaje',comp:'Complementos'};
var TRIPS=[
 {id:'dia',label:'Salida del día',icon:'bolso-plano',note:'Poca carga, ida y vuelta en el día.',models:['uspallata','nano','cacheuta']},
 {id:'enduro',label:'Enduro',icon:'bolso-lateral',note:'Sin estructura y con protecciones extra.',models:['nano','tiyu40']},
 {id:'largo',label:'Viaje largo',icon:'bolso-lateral-alto',note:'Capacidad, refuerzos y lugar para crecer.',models:['chulengo','tiyu40','adobe','tiyu80']},
 {id:'pais',label:'Vuelta al país',icon:'ruta',note:'Semanas de ruta con la máxima capacidad.',models:['tiyu80','chulengo','adobe']}
];
var QUOTES=[
 {t:'Es todo lo que está bien… Alforjas de Wanaku.',c:'Comentario en Instagram'},
 {t:'Un emprendedor argentino de Salta que hace estos trabajos a un bajo costo comparado con marcas que igualan su calidad.',c:'Reseña en Instagram'},
 {t:'Gracias, están hermosos los bolsos.',c:'Cliente, vía Instagram'}
];
var WALL=[
 {i:'41',a:'Motero en un paisaje rojo de cerros con alforjas Wanaku',c:'Foto de @espinilloangel'},
 {i:'37',a:'KTM blanca con equipo Wanaku de 40 litros en un camino de tierra',c:'Combo de 40 L en una KTM'},
 {i:'52',a:'Motero en ruta de ripio con alforjas Wanaku',c:'Chulengo en el camino'},
 {i:'48',a:'Moto Guzzi roja con alforjas Wanaku frente a una pared de piedra',c:'Chulengo con auxiliares y un Cacheuta de 30 L, en una Guzzi'},
 {i:'40',a:'Moto trail con alforjas oscuras frente a un cartel en la Puna',c:'Parada en la Puna'},
 {i:'44',a:'Moto azul de aventura con equipaje Wanaku sobre el pasto',c:'Wanakero de miércoles de clientes'},
 {i:'57',a:'Bolso coyote Wanaku sobre una piedra frente a una iglesia blanca',c:'La Zanja v1.5: 40 L reales, convertible en mochila'},
 {i:'60',a:'KTM naranja con alforjas laterales en una calle de tierra',c:'Alforjas en una KTM naranja'},
 {i:'62',a:'Moto de enduro azul con alforjas y bolso superior',c:'La misma alforja en distintos modelos'},
 {i:'66',a:'Moto negra Himalayan con alforjas Wanaku',c:'Alforjas en una Himalayan'},
 {i:'56',a:'Parche verde Wanaku Chulengo sobre tela negra',c:'El parche de Chulengo, de cerca'}
];
var EV=[
 {id:'conchas',d:21,m:'Nov',t:'Rodada por la Quebrada de las Conchas',w:'Sábado 21 de noviembre',pt:'Salta capital, 8:00',dif:'Ripio',cup:20,left:12,route:'r-conchas',dd:'Salta a Cafayate por la Quebrada. Ida y vuelta en el día.'},
 {id:'encuentro',d:5,m:'Dic',t:'Encuentro de wanakeros',w:'Sábado 5 de diciembre',pt:'Salta capital, 11:00',dif:'Asfalto',cup:60,left:41,route:'r-salta',dd:'Mate, motos, equipos en mano y sorteo.'},
 {id:'obispo',d:16,m:'Ene',t:'Cuesta del Obispo y Cachi',w:'Sábado 16 de enero',pt:'Salta capital, 7:30',dif:'Ripio y offroad',cup:15,left:9,route:'r-obispo',dd:'Subida por la cuesta y vuelta por la ruta.'}
];
var PAST=[
 {img:'img/c-32.jpg',t:'Travesías por Córdoba',d:'Rodada de 4 días y 3 noches con base en la Motoposada Villa Sueño, en el Valle de Paravachasca. Salidas por San Agustín, Villa General Belgrano y Dique Los Molinos.'},
 {img:'img/c-22.jpg',t:'Sorteo por el aniversario',d:'Dos años de Wanaku y un sorteo para todos los que acompañaron el proyecto.'},
 {img:'img/c-23.jpg',t:'Rumbo a Ushuaia',d:'Un cliente salió hacia el Fin del Mundo con alforjas nuevas de Wanaku.'}
];
var FAQ=[
 ['¿Qué diferencia hay entre con y sin estructura?','Los modelos sin estructura (Ñaño, Adobe, Tiyu) se colocan directo en la moto y no necesitan portaequipaje. Los modelos con estructura (Chulengo, Uspallata) se agarran a un portaequipaje.'],
 ['¿Cómo mido mi portaequipaje?','Escribinos por WhatsApp con fotos del portaequipaje y sus medidas. Hay muchas medidas y modelos distintos, por eso el sistema de agarre de Chulengo y Uspallata se adapta antes de fabricar. En la ficha de cada uno tenés un formulario que arma el mensaje.'],
 ['¿Hacen envíos?','Enviamos a todo el país y el costo del envío se suma al precio. No realizamos envíos internacionales.'],
 ['¿Cuánto tarda la fabricación?','Cada alforja se cose a mano, así que el plazo depende de la demanda. Consultalo por WhatsApp y lo confirmamos al pedir. (A completar con el taller.)'],
 ['¿Cómo cuido mi equipo?','Las indicaciones de limpieza y cuidado las define el taller. (A completar con el taller.)'],
 ['¿Qué moto necesito para Chulengo?','Chulengo es el único modelo para portaequipaje con el lado del escape inclinado, como en CF o QJ. Mandanos fotos y medidas antes de comprar.']
];

/* ---------- estado ---------- */
var cart={};
try{cart=JSON.parse(localStorage.getItem('wk-cart')||'{}')||{}}catch(e){cart={}}
function saveCart(){try{localStorage.setItem('wk-cart',JSON.stringify(cart))}catch(e){}}
function count(){var n=0;for(var k in cart)n+=cart[k];return n}
function renderCount(){$('#cartcount').textContent=count()}
function toast(msg){var t=$('#toast');t.textContent=msg;t.hidden=false;clearTimeout(toast.h);toast.h=setTimeout(function(){t.hidden=true},2600)}
function add(id,q){cart[id]=(cart[id]||0)+(q||1);saveCart();renderCount()}

/* ---------- animación ---------- */
function anim(t,o){if(!AN)return null;try{return AN.animate(t,o)}catch(e){return null}}
var IO=null;
function whenVisible(el,fn){
  if(!('IntersectionObserver' in window)){fn();return}
  if(!IO)IO=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){IO.unobserve(e.target);e.target.__fn&&e.target.__fn()}})},{threshold:.12});
  el.__fn=fn;IO.observe(el);
}
function revealIn(root){
  if(!AN)return;
  $$('[data-rv]',root).forEach(function(box){
    var kids=$$(box.getAttribute('data-rv')||':scope > *',box);
    if(!kids.length)return;
    whenVisible(box,function(){anim(kids,{opacity:[0,1],translateY:[28,0],duration:650,delay:AN.stagger(70),ease:'outQuart'})});
  });
  $$('[data-count]',root).forEach(function(el){
    var n=parseFloat(el.getAttribute('data-count')),dec=parseInt(el.getAttribute('data-dec')||'0',10);
    var fmt=function(v){return v.toFixed(dec).replace('.',',')};
    whenVisible(el,function(){var o={v:0};anim(o,{v:n,duration:1400,ease:'outExpo',onUpdate:function(){el.textContent=fmt(o.v)}})});
  });
}
function tilt(root){
  if(RM||!matchMedia('(hover:hover)').matches)return;
  $$('.card',root).forEach(function(c){
    c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(900px) rotateY('+(x*5).toFixed(2)+'deg) rotateX('+(-y*5).toFixed(2)+'deg)'});
    c.addEventListener('pointerleave',function(){c.style.transform=''});
  });
}

/* ---------- piezas ---------- */
function card(p){
  var ph=p.img?'<img src="'+p.img+'" alt="'+esc(p.name)+'" loading="lazy">':'<div class="placeholder">Foto pendiente · '+esc(p.name)+'</div>';
  return '<article class="card"><a class="ov ph" href="#producto-'+p.id+'" aria-label="Ver '+esc(p.name)+'">'+ph+'</a><div class="bd"><span class="sign" style="justify-self:start">'+esc(p.name)+'</span><p class="spec">'+p.spec.join(' · ')+'</p><p>'+esc(p.short)+'</p><div class="row"><span class="price">'+money(p.price)+'</span><button class="btn" type="button" data-add="'+p.id+'">Agregar</button></div></div></article>';
}
function bindAdd(root){
  $$('[data-add]',root).forEach(function(b){b.addEventListener('click',function(){add(b.getAttribute('data-add'),1);toast(BY[b.getAttribute('data-add')].name+' en el carrito')})});
}

/* ---------- vistas ---------- */
var R={};
R.inicio=function(){
  var root=$('#v-inicio');
  if(!root.__done){
    root.__done=true;
    var tr=$('#trips');
    tr.innerHTML=TRIPS.map(function(t,i){return '<button class="chip" role="radio" aria-checked="'+(i===0)+'" data-trip="'+t.id+'" type="button"><img src="img/icons/icon-'+t.icon+'.svg" alt="" width="36" height="36">'+t.label+'</button>'}).join('');
    var pick=function(id){
      var t=TRIPS.filter(function(x){return x.id===id})[0];
      $$('[data-trip]',tr).forEach(function(b){b.setAttribute('aria-checked',String(b.getAttribute('data-trip')===id))});
      $('#tripnote').textContent=t.note;
      var rc=$('#recs');
      rc.innerHTML=t.models.map(function(m){var p=BY[m];return '<a class="rec" href="#producto-'+p.id+'"><img src="'+p.img+'" alt="" loading="lazy"><div><span class="sign" style="font-size:17px;padding:4px 10px">'+esc(p.name)+'</span><p class="spec" style="margin-top:6px">'+p.spec[0]+'</p><p style="font-size:14px;margin-top:4px">'+esc(p.why[id]||p.short)+'</p></div></a>'}).join('');
      if(AN)anim($$('.rec',rc),{opacity:[0,1],translateY:[16,0],duration:450,delay:AN.stagger(70),ease:'outQuart'});
    };
    tr.addEventListener('click',function(e){var b=e.target.closest('[data-trip]');if(b)pick(b.getAttribute('data-trip'))});
    pick('largo');
    $('#featured').innerHTML=['tiyu40','chulengo','adobe','tiyu80'].map(function(i){return card(BY[i])}).join('');
    $('#featured').setAttribute('data-rv','.card');
    bindAdd(root);tilt(root);
    $('#quotesHome').innerHTML=QUOTES.map(function(q){return '<blockquote><p>“'+esc(q.t)+'”</p><cite>'+esc(q.c)+'</cite></blockquote>'}).join('');
    $('#quotesHome').setAttribute('data-rv','blockquote');
    $('#bannerHome').innerHTML=WALL.slice(0,6).map(function(w){return '<img src="img/c-'+w.i+'.jpg" alt="'+esc(w.a)+'" loading="lazy">'}).join('');
    $('#bannerHome').setAttribute('data-rv','img');
    var e=EV[0];
    $('#nextev').innerHTML='<div class="sh"><span class="eyebrow">Próxima salida</span><h2>'+esc(e.t)+'</h2></div><div class="ev"><div class="date"><small>'+e.m+'</small>'+e.d+'</div><div style="display:grid;gap:10px"><p>'+esc(e.dd)+'</p><div class="meta"><span class="diff-pill">'+e.dif+'</span><span class="spec">'+esc(e.pt)+'</span></div><p><a class="btn" href="#eventos">Ver rutas y sumarme</a></p></div></div>';
    $$('[data-scroll]',root).forEach(function(a){a.addEventListener('click',function(ev){ev.preventDefault();$('#inicio-elegi').scrollIntoView({behavior:RM?'auto':'smooth'})})});
    revealIn(root);
    initHero();
  }
};
var shopState={cat:'all',cap:'all'};
R.tienda=function(){
  var root=$('#v-tienda');
  var caps=[['all','Toda capacidad'],['s','Hasta 20 L'],['m','21 a 40 L'],['l','41 L o más']];
  var draw=function(){
    $('#fcat').innerHTML=Object.keys(CAT).map(function(k){return '<button class="chip" type="button" aria-pressed="'+(shopState.cat===k)+'" data-cat="'+k+'">'+CAT[k]+'</button>'}).join('');
    $('#fcap').innerHTML='<span class="spec">Litros</span>'+caps.map(function(c){return '<button class="chip" type="button" aria-pressed="'+(shopState.cap===c[0])+'" data-cap="'+c[0]+'">'+c[1]+'</button>'}).join('');
    var list=P.filter(function(p){
      if(shopState.cat!=='all'&&p.cat!==shopState.cat)return false;
      var c=shopState.cap,l=p.liters;
      if(c==='all')return true;
      if(l==null)return false;
      return c==='s'?l<=20:c==='m'?(l>20&&l<=40):l>40;
    });
    $('#shopcount').textContent=list.length+' '+(list.length===1?'producto':'productos');
    $('#shop').innerHTML=list.length?list.map(card).join(''):'<p>No hay productos con ese filtro. Probá con otra capacidad.</p>';
    bindAdd($('#shop'));tilt($('#shop'));
    if(AN)anim($$('#shop .card'),{opacity:[0,1],translateY:[24,0],duration:520,delay:AN.stagger(50),ease:'outQuart'});
  };
  if(!root.__done){root.__done=true;
    $('#fcat').addEventListener('click',function(e){var b=e.target.closest('[data-cat]');if(b){shopState.cat=b.getAttribute('data-cat');draw()}});
    $('#fcap').addEventListener('click',function(e){var b=e.target.closest('[data-cap]');if(b){shopState.cap=b.getAttribute('data-cap');draw()}});
  }
  draw();
};
function bagSvg(id){return '<svg viewBox="0 0 92 120" aria-hidden="true"><defs><clipPath id="'+id+'"><rect id="'+id+'r" x="0" y="120" width="92" height="120"/></clipPath></defs><path d="M12 30 Q12 14 28 14 H64 Q80 14 80 30 V104 Q80 112 72 112 H20 Q12 112 12 104Z" fill="none" stroke="var(--line)" stroke-width="3"/><g clip-path="url(#'+id+')"><path d="M12 30 Q12 14 28 14 H64 Q80 14 80 30 V104 Q80 112 72 112 H20 Q12 112 12 104Z" fill="var(--coyote)"/></g><path d="M34 6 H58" stroke="var(--line)" stroke-width="3" stroke-linecap="round"/></svg>'}
R.producto=function(id){
  var p=BY[id];var box=$('#pdp');
  if(!p){box.innerHTML='<section class="s"><h2>No encontramos ese producto</h2><p><a class="btn" href="#tienda">Volver a la tienda</a></p></section>';return}
  var thumbs='';
  if(p.id==='chulengo')thumbs='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px"><img src="img/c-56.jpg" alt="Parche verde Wanaku Chulengo sobre tela negra" style="border-radius:var(--r-md);aspect-ratio:1;object-fit:cover"><img src="img/icons/icon-bolso-lateral-alto.svg" alt="" style="border-radius:var(--r-md);aspect-ratio:1;width:100%"><div class="placeholder" style="border-radius:var(--r-md);aspect-ratio:1">Más fotos<br>pendientes</div></div>';
  var main=p.img?'<img src="'+p.img+'" alt="'+esc(p.name)+'">':'<div class="placeholder">Foto pendiente</div>';
  var kv=[['Capacidad',p.liters?p.liters+' L '+p.unit:p.unit],['Estructura',p.cat==='con'?'Requiere portaequipaje':p.cat==='sin'?'No requiere':'No aplica'],['Compatibilidad',p.compat]];
  if(p.tela)kv.push(['Tela y refuerzos',p.tela]);
  var combo='';
  if(p.combo.length){var items=[p].concat(p.combo.map(function(c){return BY[c]})),tot=items.reduce(function(a,b){return a+b.price},0);
    combo='<div class="combo"><h3>Combo sugerido</h3><ul>'+items.map(function(i){return '<li><span>'+esc(i.name)+'</span><span class="price" style="font-size:16px">'+money(i.price)+'</span></li>'}).join('')+'</ul><div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap"><span class="price">'+money(tot)+'</span><button class="btn sec" type="button" id="addCombo">Agregar combo</button></div></div>'}
  var compat='';
  if(p.needsCompat)compat='<form class="compat" id="compatForm"><h3>Antes de comprar: verificá tu portaequipaje</h3><p>El sistema de agarre se adapta a cada portaequipaje. Contanos tu moto y sus medidas y armamos el mensaje para WhatsApp.</p><div class="field"><label for="cm">Moto (marca, modelo y año)</label><input id="cm" required placeholder="Ej.: CF Moto 450 MT, 2024"></div><div class="two"><div class="field"><label for="cl">Largo (mm)</label><input id="cl" inputmode="numeric" placeholder="400"></div><div class="field"><label for="ca">Ancho (mm)</label><input id="ca" inputmode="numeric" placeholder="350"></div></div><div class="field"><label for="cf">Fotos del portaequipaje</label><input id="cf" type="file" accept="image/*" multiple></div><div class="thumbs" id="cthumbs"></div><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" type="submit">Armar mensaje</button></div><div id="cout" hidden style="display:grid;gap:10px"></div></form>';
  box.innerHTML='<div class="crumbs"><a href="#tienda">Tienda</a> / '+esc(p.name)+'</div><section class="s" style="padding-top:24px"><div class="pdp"><div class="gal"><div class="main">'+main+'</div>'+thumbs+'</div><div class="info"><div><span class="eyebrow">'+CAT[p.cat]+'</span><h1>'+esc(p.name)+'</h1></div><p class="spec">'+p.spec.join(' · ')+'</p><p style="font-size:18px">'+esc(p.short)+'</p><div class="price" style="font-size:34px">'+money(p.price)+(p.pair?' <span class="spec">el par</span>':'')+'</div><p class="spec" style="margin-top:-10px">+ envío · solo Argentina</p>'+(p.liters?'<div class="litros">'+bagSvg('cp')+'<div><div class="n" id="litn">'+p.liters+'</div><p class="spec">litros '+p.unit+'</p></div></div>':'')+'<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center"><div class="qty"><button type="button" id="qm" aria-label="Menos">−</button><span id="qn">1</span><button type="button" id="qp" aria-label="Más">+</button></div><button class="btn addbtn" id="addMain" type="button" style="flex:1;min-width:200px"><span class="fill"></span><span class="lbl">Agregar al carrito</span></button></div><dl class="kv">'+kv.map(function(r){return '<div><dt>'+r[0]+'</dt><dd>'+esc(r[1])+'</dd></div>'}).join('')+'</dl><div><h3>Ideal para</h3><p>'+esc(p.ideal)+'</p></div>'+(p.parts.length>1||p.parts[0]?'<div><h3>Qué incluye</h3><ul style="margin:6px 0 0;padding-left:20px">'+p.parts.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul></div>':'')+compat+combo+'</div></div></section>';
  // litros animados
  if(p.liters){var maxL=80,h=Math.max(6,Math.min(1,p.liters/maxL)*100);
    var rect=$('#cpr'),ln=$('#litn');
    rect.setAttribute('y',String(112-h));rect.setAttribute('height',String(h+8));
    whenVisible($('.litros'),function(){var o={y:120,v:0};anim(o,{y:112-h,v:p.liters,duration:1100,ease:'outExpo',onUpdate:function(){rect.setAttribute('y',o.y.toFixed(1));ln.textContent=Math.round(o.v)}})});
  }
  var q=1;$('#qm').addEventListener('click',function(){q=Math.max(1,q-1);$('#qn').textContent=q});$('#qp').addEventListener('click',function(){q=Math.min(20,q+1);$('#qn').textContent=q});
  $('#addMain').addEventListener('click',function(){
    var b=this,f=$('.fill',b),l=$('.lbl',b);add(p.id,q);
    f.style.opacity='.45';f.style.background='var(--route)';
    if(AN){f.style.height='0%';anim(f,{height:['0%','100%'],duration:520,ease:'outQuad',onComplete:function(){l.textContent='Agregado';setTimeout(function(){l.textContent='Agregar al carrito';f.style.height='0';f.style.opacity='0'},1100)}})}
    else{l.textContent='Agregado';setTimeout(function(){l.textContent='Agregar al carrito'},1100)}
    toast(q+' × '+p.name+' en el carrito');
  });
  var ac=$('#addCombo');if(ac)ac.addEventListener('click',function(){add(p.id,1);p.combo.forEach(function(c){add(c,1)});toast('Combo en el carrito')});
  var cf=$('#compatForm');
  if(cf){
    $('#cf').addEventListener('change',function(){var t=$('#cthumbs');t.innerHTML='';Array.prototype.slice.call(this.files).slice(0,6).forEach(function(f){var u=URL.createObjectURL(f);var im=document.createElement('img');im.src=u;im.alt='Foto del portaequipaje';t.appendChild(im)})});
    cf.addEventListener('submit',function(e){e.preventDefault();
      var n=$('#cf').files.length;
      var msg='Hola Wanaku! Quiero consultar por '+p.name+'. Mi moto: '+$('#cm').value+'. Portaequipaje: largo '+($('#cl').value||'?')+' mm, ancho '+($('#ca').value||'?')+' mm. '+(n?'Te paso '+n+' foto(s) por acá.':'Te paso fotos por acá.');
      var o=$('#cout');o.hidden=false;o.style.display='grid';
      o.innerHTML='<p class="spec">Mensaje listo</p><p id="cmsg" style="background:var(--surface);border:1px solid var(--line-soft);border-radius:var(--r-md);padding:12px">'+esc(msg)+'</p><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn sec" type="button" id="ccopy">Copiar mensaje</button><a class="btn" target="_blank" rel="noopener" href="'+WA+'?text='+encodeURIComponent(msg)+'">Abrir WhatsApp</a></div><p class="spec">Las fotos se adjuntan en el chat de WhatsApp.</p>';
      $('#ccopy').addEventListener('click',function(){try{navigator.clipboard.writeText(msg).then(function(){toast('Mensaje copiado')},function(){toast('Seleccioná el texto para copiarlo')})}catch(x){toast('Seleccioná el texto para copiarlo')}});
    });
  }
  bindAdd(box);
};
R.carrito=function(){
  var ids=Object.keys(cart).filter(function(k){return cart[k]>0&&BY[k]});
  var L=$('#cartlines'),S=$('#cartsum');
  if(!ids.length){L.innerHTML='<div class="compat"><h3>Tu carrito está vacío</h3><p>Elegí un equipo para tu próximo viaje.</p><p><a class="btn" href="#tienda">Ir a la tienda</a></p></div>';S.hidden=true;return}
  S.hidden=false;
  var sub=0;
  L.innerHTML=ids.map(function(k){var p=BY[k],q=cart[k];sub+=p.price*q;return '<div class="line"><div>'+(p.img?'<img src="'+p.img+'" alt="">':'<div class="placeholder" style="width:84px;height:84px;font-size:11px;padding:4px">Sin foto</div>')+'</div><div style="display:grid;gap:6px"><a href="#producto-'+k+'" style="color:inherit;font:600 22px var(--f-display);text-decoration:none">'+esc(p.name)+'</a><p class="spec">'+p.spec[0]+'</p><div class="qty" style="justify-self:start"><button type="button" data-q="-1" data-id="'+k+'" aria-label="Menos '+esc(p.name)+'">−</button><span>'+q+'</span><button type="button" data-q="1" data-id="'+k+'" aria-label="Más '+esc(p.name)+'">+</button></div></div><div style="text-align:right;display:grid;gap:8px"><span class="price">'+money(p.price*q)+'</span><button class="chip" type="button" data-rm="'+k+'" style="min-height:36px;padding:4px 12px;font-size:14px">Quitar</button></div></div>'}).join('');
  S.innerHTML='<h3>Resumen</h3><div style="display:flex;justify-content:space-between"><span>Subtotal</span><span class="price" style="font-size:18px">'+money(sub)+'</span></div><div class="field"><label for="cp">Código postal</label><div style="display:flex;gap:8px"><input id="cp" inputmode="numeric" maxlength="4" placeholder="4400" style="flex:1;background:var(--surface);border:2px solid var(--line);border-radius:var(--r-md);padding:10px 12px;min-height:46px"><button class="btn sec" type="button" id="calc">Calcular envío</button></div></div><p class="spec" id="shipout">Envío a calcular</p><div class="tot"><span>Total</span><span id="tot">'+money(sub)+'</span></div><div class="notice">No realizamos envíos internacionales.</div><button class="btn mp" type="button" id="pay">Pagar con Mercado Pago</button><p class="spec">Maqueta: el pago y el envío no están conectados.</p>';
  $('#calc').addEventListener('click',function(){var v=$('#cp').value.trim();$('#shipout').textContent=/^\d{4}$/.test(v)?'Envío a CP '+v+': se calcula con el transporte al conectar el sitio.':'Ingresá un código postal de 4 dígitos.'});
  $('#pay').addEventListener('click',function(){toast('Maqueta: acá se abre Mercado Pago')});
  $$('[data-q]',L).forEach(function(b){b.addEventListener('click',function(){var id=b.getAttribute('data-id');cart[id]=Math.max(0,cart[id]+parseInt(b.getAttribute('data-q'),10));if(!cart[id])delete cart[id];saveCart();renderCount();R.carrito()})});
  $$('[data-rm]',L).forEach(function(b){b.addEventListener('click',function(){delete cart[b.getAttribute('data-rm')];saveCart();renderCount();R.carrito()})});
};
R.eventos=function(){
  var root=$('#v-eventos');
  if(root.__done)return;root.__done=true;
  var left={};EV.forEach(function(e){left[e.id]=e.left});
  var sel=null;
  var draw=function(){
    $('#evlist').innerHTML=EV.map(function(e){return '<article class="ev" data-ev="'+e.id+'" aria-selected="'+(sel===e.id)+'"><div class="date"><small>'+e.m+'</small>'+e.d+'</div><div style="display:grid;gap:10px;min-width:0"><div><span class="tag">Ejemplo</span><h3 style="margin-top:6px">'+esc(e.t)+'</h3></div><p>'+esc(e.dd)+'</p><div class="meta"><span class="diff-pill">'+e.dif+'</span><span class="spec">'+esc(e.pt)+'</span><span class="spec">Cupos: '+left[e.id]+' de '+e.cup+'</span></div><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn sec" type="button" data-route="'+e.id+'">Ver ruta</button><button class="btn" type="button" data-join="'+e.id+'">Me sumo</button></div><form class="joinform" id="jf-'+e.id+'" hidden><div class="field"><label for="jn-'+e.id+'">Nombre</label><input id="jn-'+e.id+'" required></div><div class="two"><div class="field"><label for="jm-'+e.id+'">Moto</label><input id="jm-'+e.id+'" required></div><div class="field"><label for="jw-'+e.id+'">WhatsApp</label><input id="jw-'+e.id+'" inputmode="tel" required></div></div><button class="btn" type="submit">Enviar inscripción</button><p class="spec" id="jo-'+e.id+'"></p></form></div></article>'}).join('');
    $$('[data-route]').forEach(function(b){b.addEventListener('click',function(){show(b.getAttribute('data-route'))})});
    $$('[data-join]').forEach(function(b){b.addEventListener('click',function(){var f=$('#jf-'+b.getAttribute('data-join'));f.hidden=!f.hidden;show(b.getAttribute('data-join'),true)})});
    EV.forEach(function(e){$('#jf-'+e.id).addEventListener('submit',function(ev){ev.preventDefault();if(left[e.id]>0)left[e.id]--;$('#jo-'+e.id).textContent='Anotado en la maqueta. En el sitio real tu inscripción le llega a Wanaku.';$$('.ev [class="spec"]');draw2(e.id)})});
  };
  var draw2=function(id){var el=$('[data-ev="'+id+'"] .meta .spec:last-child');if(el)el.textContent='Cupos: '+left[id]+' de '+EV.filter(function(x){return x.id===id})[0].cup};
  var show=function(id,keep){
    sel=id;$$('[data-ev]').forEach(function(a){a.setAttribute('aria-selected',String(a.getAttribute('data-ev')===id))});
    var e=EV.filter(function(x){return x.id===id})[0];
    ['r-conchas','r-obispo','r-salta'].forEach(function(r){var p=document.getElementById(r);p.style.opacity=r===e.route?'1':'.25'});
    var path=document.getElementById(e.route);var len=path.getTotalLength();
    path.style.strokeDasharray=len;path.style.strokeDashoffset=len;
    if(AN)anim(path,{strokeDashoffset:[len,0],duration:1200,ease:'inOutQuad'});else path.style.strokeDashoffset=0;
  };
  draw();show('conchas');
  $('#evpast').innerHTML=PAST.map(function(p){return '<article class="card"><div class="ph" style="aspect-ratio:4/3"><img src="'+p.img+'" alt="'+esc(p.t)+'" loading="lazy"></div><div class="bd"><h3>'+esc(p.t)+'</h3><p>'+esc(p.d)+'</p></div></article>'}).join('');
  $('#evpast').setAttribute('data-rv','.card');revealIn(root);
};
R.comunidad=function(){
  var root=$('#v-comunidad');if(root.__done)return;root.__done=true;
  $('#mason').innerHTML=WALL.map(function(w){return '<figure><img src="img/c-'+w.i+'.jpg" alt="'+esc(w.a)+'" loading="lazy" style="width:100%"><figcaption>'+esc(w.c)+'</figcaption></figure>'}).join('');
  $('#mason').setAttribute('data-rv','figure');
  $('#quotesCom').innerHTML=QUOTES.map(function(q){return '<blockquote><p>“'+esc(q.t)+'”</p><cite>'+esc(q.c)+'</cite></blockquote>'}).join('');
  $('#quotesCom').setAttribute('data-rv','blockquote');
  revealIn(root);
};
R.nosotros=function(){var r=$('#v-nosotros');if(!r.__done){r.__done=true;$$('.diffs',r).forEach(function(d){d.setAttribute('data-rv','.diff')});revealIn(r)}};
R.faq=function(){var r=$('#v-faq');if(r.__done)return;r.__done=true;$('#faqlist').innerHTML=FAQ.map(function(f,i){return '<details'+(i===0?' open':'')+'><summary>'+esc(f[0])+'</summary><p>'+esc(f[1])+'</p></details>'}).join('')};

/* ---------- router ---------- */
var cur='inicio';
function route(){
  var h=(location.hash||'#inicio').slice(1),id=null,name=h;
  if(h.indexOf('producto-')===0){name='producto';id=h.slice(9)}
  if(h==='inicio-elegi')name='inicio';
  if(!R[name])name='inicio';
  $$('.view').forEach(function(v){v.classList.toggle('on',v.getAttribute('data-view')===name)});
  $$('[data-nav]').forEach(function(a){a.setAttribute('aria-current',a.getAttribute('data-nav')===(name==='producto'?'tienda':name)?'page':'false')});
  cur=name;
  R[name](id);
  if(h==='inicio-elegi'){var t=$('#inicio-elegi');setTimeout(function(){t.scrollIntoView()},30)}else window.scrollTo(0,0);
  onScroll();
}
window.addEventListener('hashchange',route);
$('#cartbtn').addEventListener('click',function(){location.hash='#carrito'});

/* ---------- hero, cielo y línea de ruta ---------- */
function hex(h){return [parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)]}
function mix(a,b,t){var A=hex(a),B=hex(b);return 'rgb('+A.map(function(v,i){return Math.round(v+(B[i]-v)*t)}).join(',')+')'}
var heroDone=false;
function initHero(){
  if(heroDone)return;heroDone=true;
  var h1=$('#claim'),txt=h1.textContent;
  h1.innerHTML=txt.split(' ').map(function(w){return '<span class="w" style="display:inline-block;white-space:nowrap">'+w.split('').map(function(c){return '<span class="ch">'+c+'</span>'}).join('')+'</span>'}).join(' ');
  if(AN){
    var tl=AN.createTimeline({defaults:{ease:'outExpo'}});
    tl.add($$('.ch',h1),{opacity:[0,1],translateY:[48,0],duration:900,delay:AN.stagger(28)},0)
      .add('.hero .lead, .hero .cta, .hero .kicker',{opacity:[0,1],translateY:[18,0],duration:700,delay:AN.stagger(120)},500);
    anim('#herobg',{scale:[1,1.07],duration:22000,alternate:true,loop:true,ease:'inOutSine'});
  }
}
var ticking=false;
function onScroll(){
  if(ticking)return;ticking=true;
  requestAnimationFrame(function(){ticking=false;
    var doc=document.documentElement,max=Math.max(1,doc.scrollHeight-innerHeight),sy=window.pageYOffset;
    if(cur==='inicio'){
      var p=Math.min(1,Math.max(0,sy/max));
      var sc=mix('#1c3a5a','#b0432a',p);
      doc.style.setProperty('--scene',sc);
      if(!RM){var y=Math.min(sy,700);$('#herobg').style.backgroundPositionY='calc(28% + '+(y*.18).toFixed(1)+'px)'}
      drawRoute(sy);
    }
  });
}
var routeLen=0;
function buildRoute(){
  var w=$('#routeLine').parentNode,H=w.offsetHeight;if(!H)return;
  var W=32,pts='M16 0',y=0,dir=1;
  while(y<H){var ny=Math.min(H,y+260);pts+=' C '+(16+dir*13)+' '+(y+90)+', '+(16-dir*13)+' '+(y+170)+', 16 '+ny;dir=-dir;y=ny}
  var svg=$('#routeLine');svg.setAttribute('viewBox','0 0 '+W+' '+H);
  $('#routePath').setAttribute('d',pts);$('#routeDone').setAttribute('d',pts);
  routeLen=$('#routeDone').getTotalLength();
  $('#routeDone').style.strokeDasharray=routeLen+' '+routeLen;
}
function drawRoute(sy){
  var w=$('#routeLine').parentNode;if(!w||!w.offsetHeight)return;
  if(!routeLen)buildRoute();
  var r=w.getBoundingClientRect(),prog=Math.min(1,Math.max(0,(innerHeight*.6-r.top)/r.height));
  $('#routeDone').style.strokeDashoffset=String(routeLen*(1-prog));
}
window.addEventListener('scroll',onScroll,{passive:true});
window.addEventListener('resize',function(){routeLen=0;onScroll()});

/* ---------- iniciar ---------- */
renderCount();
$('#faqlist');
route();
setTimeout(function(){routeLen=0;onScroll()},400);
})();
