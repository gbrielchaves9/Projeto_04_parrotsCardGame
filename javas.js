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
  `<div class="card" onclick="escolhe(this)" >
    <div class="front-face face">
    <img src="imagem/capa.png">
    </div>
    <div class="back-face face">
    <img src="imagem/${img}"/>
    </div>
  </div>`;
})

cards.innerHTML = carregar




