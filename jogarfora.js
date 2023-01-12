
/*
const pegarncartas =funcao();
//const qtde = Number(prompt("Qual a qtde de cartas?"));
function funcao(){

let notas1ao10=parseInt(prompt("quantas cartas quer?"));

while(isNaN(notas1ao10)||notas1ao10 < 14 ||notas1ao10 > 4 || (notas1ao10 % 2) ===1)//i % 2 == 0 )
{
notas1ao10=parseInt(prompt("quantas cartas quer?"));

}
return notas1ao10;

}




const cards = document.querySelector("mesadecartas");
const papagaios = [
    'i1.gif',
    'i2.gif',
    'i3.gif',
    'i4.gif',
    'i5.gif',
    'i6.gif',
    'i7.gif'
];

papagaios.forEach(imagem =>{
    cartas += ``
});

while(isNaN(notas1ao10) < 14 ||isNaN(notas1ao10)> 4 || (isNaN(notas1ao10) % 2) ===1)//i % 2 == 0 )*/




const cards = document.querySelector("mesadecartas");
const papagaios = [
    'i1.gif',
    'i2.gif',
    'i3.gif',
    'i4.gif',
    'i5.gif',
    'i6.gif',
    'i7.gif'
];

let carregar = '';


papagaios.forEach(imagem =>{
    carregar += `<div class="card">
    <div class="front-face face">
    <img class="front-traseira" src="imagem/${papagaios}"/>
    </div>
    <div class="back-face face">
    <img class="frente" src="imagem/capa.png">
    </div>
  </div>`
});

cards.innerHTML = carregar + carregar




`<div class="memory-card" data-card="${img}">
    <img class="front-face2" src="imagem/${img}"/>
    <img class="back-face2" src="imagem/capa.png">
  </div>`;