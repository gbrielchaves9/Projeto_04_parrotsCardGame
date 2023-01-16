let nCards = 0;

w:
while (nCards === 0) {
  let ans = prompt("quantas?");

  if (ans == null) continue;

  let len = ans.length;

  if (len > 2) continue;

  for (let i = 0; i < len; i++) {
    switch (ans[i]) {
      case '0':
        break;
      case '1':
        break;
      case '2':
        break;
      case '3':
        break;
      case '4':
        break;
      case '5':
        break;
      case '6':
        break;
      case '7':
        break;
      case '8':
        break;
      case '9':
        break;
      default:
        continue w;
    };
  };

  if (ans < 4) continue;
  if (ans > 14) continue;
  if (ans % 2 !== 0) continue;

  nCards = ans;
};





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
  `<div class="card" data-cardis="${img}"   >
    <div class="front-face face">
    <img src="imagem/capa.png">
    </div>
    <div class="back-face face" >
    <img src="imagem/${img}"/>
    </div>
  </div>`;
})

cards.innerHTML =  carregar +  carregar

const cartas = document.querySelectorAll(".card");


let virei1,  virei2
let virarsomente2 = false;

function vaivirar(){
  if(virarsomente2) return false 
  this.classList.add('cardtrans')
  if(!virei1){
    virei1=this;
    return false;
  }
  virei2=this


  verificarigualdade()
}

function verificarigualdade(){
  let verificador = virei1.dataset.cardis === virei2.dataset.cardis
  console.log(verificador)
  !verificador ? desvirar():lipartudo(verificador);

}

function desvirar(){
  virarsomente2 = true

  setTimeout(() => {
    virei1.classList.remove('cardtrans')
    virei2.classList.remove('cardtrans')
    lipartudo ();
  }, 600);

}
function lipartudo(verificador=false){
  if(verificador){
    virei1.removeEventListener('click',vaivirar)
   virei2.removeEventListener('click',vaivirar)
  }
  [virei1, virei2,virarsomente2]= [null , null , false]
}


cartas.forEach(clica => clica.addEventListener("click", vaivirar));