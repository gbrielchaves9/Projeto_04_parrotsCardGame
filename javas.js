
const papagaios = [
    'i1.gif',
    'i2.gif',
    'i3.gif',
    'i4.gif',
    'i5.gif',
    'i6.gif',
    'i7.gif'
];

const vazio= [];


function pegacartas(){
  const cards = document.querySelector("#mesa");
  for(let i = 0; i < vazio.length; i++){
    let carregar=
    `<div class="card" data-cardis="${vazio[i]}" data-test="card"  >
    <div class="front-face face" >
    <img src="imagem/capa.png" data-test="face-down-image">
    </div>
    <div class="back-face face" >
    <img src="imagem/${vazio[i]}"/ data-test="face-up-image">
    </div>
  </div>`;

cards.innerHTML += carregar  
}
}
let carregar;

function comparador() { 
	return Math.random() - 0.5; 
}

function carrega(){

    for(let i = 0; i < (ncards/2) ; i++ ){
        let card = papagaios[i];
        vazio.push(card);
        vazio.push(card);
    }
    vazio.sort(comparador);

    pegacartas()
}




function condicao(){
  if ( (ncards% 2 !== 0) ||ncards < 4 || ncards > 14 || isNaN(ncards)) {
      return true;
  }else{
      return false;
  }
}

function seleciona(){
  ncards = Number( prompt('quantas cartas voce precisa?') );
  while( condicao() ){
    ncards = Number( prompt('quantas cartas voce precisa?') );
  }12
  carrega();
}
seleciona()


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
  !verificador ? desvirar():lipartudo(verificador);
  console.log(verificador)
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



