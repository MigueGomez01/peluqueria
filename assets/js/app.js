/* ==========================================================
CONFIGURACIÓN GENERAL
CAMBIAR TODO LO RELACIONADO CON EL NEGOCIO AQUÍ
========================================================== */
 
const CONFIG = {
 
business:{
 
name:"Tu negocio",
 
tagline:"Tu mejor versión comienza aquí",
 
description:"Cortes, coloración, manicure, pedicure y tratamientos profesionales.",
 
whatsappNumber:"573233670402",
 
whatsappMessage:"Hola, quiero agendar una cita.",
 
mapsQuery:"Tu Negocio"
 
},
 
socials:[
 
{
platform:"Instagram",
url:"https://instagram.com/tunegocio"
},
 
{
platform:"Facebook",
url:"https://facebook.com/tunegocio"
},
 
{
platform:"TikTok",
url:"https://tiktok.com/@tunegocio"
}
 
],
 
services:[
 
{
category:"Uñas",
 
items:[
 
{
name:"Manicure Clásica",
desc:"Limpieza y esmaltado",
price:"$18.000",
img:"img/unas/1.png"
},
 
{
name:"Semipermanente",
desc:"Duración hasta 3 semanas",
price:"$28.000",
img:"img/unas/2.png"
}
 
]
},
 
{
category:"Peinados",
 
items:[
 
{
name:"Corte Profesional",
desc:"Lavado y peinado",
price:"$35.000",
img:"img/peinados/1.png"
},
 
{
name:"Peinado Evento",
desc:"Bodas y graduaciones",
price:"$60.000",
img:"img/peinados/2.png"
}
 
]
},
 
{
category:"Manos y pies",
 
items:[
 
{
name:"Pedicure Spa",
desc:"Exfoliación profunda",
price:"$30.000",
img:"img/manos-pies/1.png"
},
 
{
name:"Combo Completo",
desc:"Manicure + Pedicure",
price:"$42.000",
img:"img/manos-pies/2.png"
}
 
]
},
 
{
category:"Pintura",
 
items:[
 
{
name:"Color Completo",
desc:"Coloración profesional",
price:"$120.000",
img:"img/pintura/1.png"
},
 
{
name:"Balayage",
desc:"Técnica personalizada",
price:"$180.000",
img:"img/pintura/2.png"
}
 
]
},
 
{
category:"Productos",
 
items:[
 
{
name:"Shampoo Profesional",
desc:"Uso diario",
price:"$45.000",
img:"img/productos/1.png"
},
 

{
name:"Tratamiento Capilar",
desc:"Hidratación intensiva",
price:"$60.000",
img:"img/productos/2.png"
}
 
]
}
 
],
 
recommendations:[
 
{
name:"Balayage",
blurb:"El favorito del mes",
img:"img/lo-mas-pedido/1.png"
},
 
{
name:"Semipermanente",
blurb:"Hasta 3 semanas",
img:"img/lo-mas-pedido/2.png"
},
 
{
name:"Peinado Evento",
blurb:"Ideal para ocasiones especiales",
img:"img/lo-mas-pedido/3.png"
}
 
],
 
reviews:[
 
{
text:"Excelente atención y resultados.",
author:"Cliente verificada"
},
 
{
text:"El mejor servicio que he recibido.",
author:"Cliente verificada"
}
 
]
};
 
 
/* ==========================================================
UTILIDADES
========================================================== */
 
function createElement(html){
 
const template =
document.createElement("template");
 
template.innerHTML =
html.trim();
 
return template.content.firstElementChild;
}
 
 
/* ==========================================================
IMÁGENES
SI NO EXISTE UNA FOTO SE USA PLACEHOLDER
========================================================== */
 
function imageFallback(img){
 
img.src =
"https://placehold.co/600x800/F2EBE1/241F1A?text=Sin+Foto";
}
 
 
/* ==========================================================
URLS PRINCIPALES
========================================================== */
 
const whatsappUrl =
`https://wa.me/${CONFIG.business.whatsappNumber}?text=${encodeURIComponent(CONFIG.business.whatsappMessage)}`;
 
const mapsUrl =
`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.business.mapsQuery)}`;
 
 
/* ==========================================================
SERVICIOS
========================================================== */
 
function renderServices(categoryIndex){
 
const serviceList =
document.getElementById("serviceList");
 
serviceList.innerHTML = "";
 
CONFIG.services[categoryIndex]
.items
.forEach(service => {
 
serviceList.appendChild(
 
createElement(
 
`
<div class="service-card">
 
${service.img} >
 
<div class="service-name">
${service.name}
</div>
 
<div class="service-desc">
${service.desc}
</div>
 
<div class="service-price">
${service.price}
</div>
 
</div>
`
)
);
});
}
 
 
/* ==========================================================
TABS
========================================================== */
 
function initializeTabs(){
 
const serviceTabs =
document.getElementById("serviceTabs");
 
CONFIG.services.forEach((category,index)=>{
 
const button =
createElement(
`
<button
class="tab-btn ${index === 0 ? "active" : ""}"
>
${category.category}
</button>
`
);
 
button.addEventListener("click",()=>{
 
document
.querySelectorAll(".tab-btn")
.forEach(tab=>tab.classList.remove("active"));
 
button.classList.add("active");
 
renderServices(index);
 
});
 
serviceTabs.appendChild(button);
 
});
 
renderServices(0);
}
 
 
/* ==========================================================
RECOMENDACIONES
========================================================== */
 
function renderRecommendations(){
 
const recList =
document.getElementById("recList");
 
if(!recList) return;
 
CONFIG.recommendations.forEach(item=>{
 
recList.appendChild(
 
createElement(
 
`
<div class="rec-card">
 
${item.img} >
 
<div class="rec-name">
${item.name}
</div>
 
<div class="rec-blurb">
${item.blurb}
</div>
 
</div>
`
)
);
 
});
 
}
 
 
/* ==========================================================
RESEÑAS
========================================================== */
 
function renderReviews(){
 
const reviewsContainer =
document.getElementById("reviewsList");
 
if(!reviewsContainer) return;
 
CONFIG.reviews.forEach(review=>{
 
reviewsContainer.appendChild(
 
createElement(
 
`
<div class="quote">
 
<div>
"${review.text}"
</div>
 
<div class="quote-by">
${review.author}
</div>
 
</div>
`
)
 
);
 
});
 
}
 
 
/* ==========================================================
BOTONES WHATSAPP
========================================================== */
 
function initializeButtons(){
 
document
.querySelectorAll(".cta-primary")
.forEach(button=>{
 
button.href =
whatsappUrl;
 
});
 
}
 
 
/* ==========================================================
REVEAL ANIMATION
========================================================== */
 
function initializeReveal(){
 
const observer =
new IntersectionObserver(
 
entries=>{
 
entries.forEach(entry=>{
 
if(entry.isIntersecting){
 
entry.target.classList.add("show");
 
}
 
});
 
},
 
{
threshold:.15
}
 
);
 
document
.querySelectorAll(".reveal")
.forEach(section=>observer.observe(section));
 
}
 
 
/* ==========================================================
INICIO
========================================================== */
 
document.addEventListener(
 
"DOMContentLoaded",
 
()=>{
 
initializeTabs();
 
renderRecommendations();
 
renderReviews();
 
initializeButtons();
 
initializeReveal();
 
}
 
);