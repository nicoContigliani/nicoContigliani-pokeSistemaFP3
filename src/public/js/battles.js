// (()=>{alert()})();
const url = `https://pokeapi.co/api/v2/pokemon/`;
const capturas1 = [];
const name1 = [];
const capturas2 = [];
const name2 = [];

const capturas3 = [];
const name3 = [];

const battle = [];
const vsss = [];



const BtnBotones = document.querySelector("#BtnBotones");
const botones = document.querySelector("#botones");
const cap1 = document.querySelector('.oponentOne');
const cap2 = document.querySelector('.oponentTwo');
const cap3 = document.querySelector('.oponentTwoo');
const cap4 = document.querySelector('.oponentOnee');


const warss = document.querySelector('.wars');
const usS = document.querySelector('.usuarioS');


// const col = document.querySelector('#col')





//  const labelWin = document.querySelector('.Win')



// const cap1 = document.querySelector("#botoness");






(() => {
  BtnBotones.addEventListener("click", agregarBotones);
  botones.addEventListener("click", delegacion)
  cap1.addEventListener("click", captura1);
  cap2.addEventListener("click", captura2);
  cap3.addEventListener("click", captura3);
  cap4.addEventListener("click",captura4);


  warss.addEventListener("click", battles);
  // col.addEventListener("click", change);



  //document.getElementById('Win').style.visibility='hidden';
  document.querySelector('.oponentOne').style.visibility = 'hidden';
  document.querySelector('.oponentOnee').style.visibility = 'hidden';

  document.querySelector('.oponentTwo').style.visibility = 'hidden';
  document.querySelector('.oponentTwoo').style.visibility = 'hidden';

  document.querySelector('.usuarioS').style.visibility = 'hidden';
  document.querySelector('#Win').style.visibility = 'hidden';
  document.querySelector('.magic').style.visibility = 'hidden';
  document.querySelector('.magic2').style.visibility = 'hidden';




})();

(() => {
  usS.addEventListener("click", vs);

})();



function agregarBotones(e) {

  e.preventDefault();
  botones.innerHTML = `<div class="paralelogramo">
    <div class="btn-group" role="group" aria-label="Basic example">

    <button class="btn btn-primary btn-lg btn-block mt-5" onclick="href="/signin"> 1 Vs PC  
 
    </button>
<button class="btn btn-secondary  btn-lg btn-block mt-5">1 Vs 1 </button>
<button class="btn btn-danger  btn-lg btn-block mt-5">PC VS PC </button>
</div>

</div>

`
}

function delegacion(e) {
  e.preventDefault();
  //console.log(e.target.classList[1] );
  const colorBoton = e.target.classList[1];
  switch (colorBoton) {
    case "btn-primary":
      unoContraPc()
      break;
    case "btn-secondary":
      unoContraUno()
      break;
    case "btn-danger":
      pcContraPc()
      break;

  }
}

const unoContraPc = async (url) => {



  document.querySelector('.oponentOne').style.visibility = 'visible';
  document.querySelector('.oponentOnee').style.visibility = 'hidden';

  document.querySelector('.oponentTwo').style.visibility = 'visible';
  document.querySelector('.oponentTwoo').style.visibility = 'hidden';

  document.querySelector('#Win').style.visibility = 'visible';
  document.querySelector('.usuarioS').style.visibility = 'hidden';
  document.querySelector('.magic').style.visibility = 'hidden';



}
const unoContraUno = () => {

  alert(' Uno Contra Uno')
  document.querySelector('.oponentOne').style.visibility = 'visible';
  document.querySelector('#Win').style.visibility = 'visible';
  document.querySelector('.usuarioS').style.visibility = 'visible';
  document.querySelector('.usuarioS').style.visibility = 'hidden';
  document.querySelector('.magic').style.visibility = 'visible';
  document.querySelector('.oponentTwo').style.visibility = 'hidden';

  document.querySelector('.oponentTwoo').style.visibility = 'visible';



  // document.querySelector('.oponentTwoo').style.visibility = 'visible';
  // document.querySelector('.oponentTwo').style.visibility = 'visible';


}
// function change (e){
//   e.preventDefault();


// }

async function vs(e) {
  alert('vs')
  const vss = e.target.id;
  console.log(vss)
  const vss2 = e.target.name;
  vsss.push(vss)
  console.log(...vsss)
  alert({ ...vsss })
  //const consulta = await axios.post(`http://localhost:4000/pokemons/battles/`,{...vsss})

}


const pcContraPc = () => {
  alert('pc vs pc ')
  document.querySelector('.oponentTwo').style.visibility = 'hidden';
  document.querySelector('.oponentOne').style.visibility = 'hidden';

  document.querySelector('.magic').style.visibility = 'visible';
  document.querySelector('.magic2').style.visibility = 'visible';
  document.querySelector('.oponentTwoo').style.visibility = 'visible';
  document.querySelector('.oponentOnee').style.visibility = 'visible';
  document.querySelector('#Win').style.visibility = 'visible';

}



function captura1(e) {
  const uno = e.target.id
  const unoX = e.target.value
  console.log(uno)
  console.log(unoX)
  capturas1.push(uno)
  name1.push(unoX)
  console.log(capturas1 + name1)
}

function captura2(e) {
  const dos = e.target.id
  const dosX = e.target.value
  console.log(dos)
  console.log(dosX)
  capturas2.push(dos)
  name2.push(dosX)
  console.log(capturas2 + name2)
}
function captura3(e) {
  const tres = e.target.id
  const tresX = e.target.value
  console.log(tres)
  console.log(tresX)
  capturas2.push(tres)
  name2.push(tresX)
  console.log(capturas2 + name2+"esta viene por la captura en 3" )
}
function captura4(e){
 
  const cuatro = e.target.id
  const cuatroX = e.target.value
  console.log(cuatro)
  console.log(cuatroX)
  capturas1.push(cuatro)
  name1.push(cuatroX)
  console.log(capturas1 + name1+"esta viene por la captura en 1" )

}




function battles(e) {

 e.preventDefault();
  alert("hola desde wars")
  const x = name1[0].toUpperCase()
  const y = name2[0].toUpperCase()


  capturas1.forEach(a1 => {
    capturas2.forEach(a2 => {
      if (parseInt(a1) > parseInt(a2)) {
        alert("player1 win" + " " + (a1) + "  " + (a2))
        const a = "PLAYER 1  WIN";
        Winer(a, x)
      } else {
        alert("player2 win" + (a1) + "  " + (a2))
        const b = "PLAYER 2  WIN";
        Winer(b, y)
      }
    })
  });
}

function Winer(n, m) {
  alert(`desde winer: ${n}`)
  var divModal = document.createElement("div");
  divModal.innerHTML = `
  <div  class="flotante">  
  <div class="container">
  <br><br><br><br><br><br><br><br><br><br>
<div class="paralelogramo2b ">
<h1>${n} -- ${m}</h1>

</div>

 </div>
  `

  document.body.appendChild(divModal);


}



// var btnAceptar = document.getElementById("listar");
// var disableButton = function () { this.disabled = true; };
// btnAceptar.addEventListener('click', disableButton, false);