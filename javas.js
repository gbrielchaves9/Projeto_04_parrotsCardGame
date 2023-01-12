
const cards = document.querySelector("#mesa");
const papagaios = [
    'i1.gif',
    'i2.gif',
    'i3.gif',
    'i4.gif',
    'i5.gif',
    'i6.gif',
    'i7.gif'
];

let carregar = "";

papagaios.forEach(img => {
  carregar += 
  `<div class="card">
    <div class="front-face face">
    <img src="imagem/${img}"/>
    </div>
    <div class="back-face face">
    <img src="imagem/capa.png">
    </div>
  </div>`;
})

cards.innerHTML = carregar

