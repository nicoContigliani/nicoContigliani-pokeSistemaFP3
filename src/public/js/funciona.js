const url = "https://pokeapi.co/api/v2/pokemon/";

const idPokemons = [];
const capturados = [];
const contadorr = [];
const insertAbilitiess = []
const insertNamess = [];
const insertTypess = [];
const insertImagen = [];
const listaHabilidades = "";
const ids = [];
const fUrl = [];

(async (req, res) => {



    // const n = document.querySelectorAll('#si')

    // n.forEach(algo=> algo = ()=>contadorr.push(1))







})();



var btnAceptar = document.getElementById("listar");
var disableButton = function () { this.disabled = true; };
btnAceptar.addEventListener('click', disableButton, false);


(() => {

    const searchBoxContainer = document.createElement("div");
    searchBoxContainer.setAttribute("class", "search-box-container");

    searchBoxContainer.innerHTML = `
    <strong><input type="text" class="search-box" placeholder= "Buscar" id="formulario"</strong></b>
    <i class="fas fa-search"></i>
    <button class="btn btn-outline-dark mb-2" id="boton"> Buscar</button>
    
    `;

    document.getElementById("main").appendChild(searchBoxContainer);

    const formulario = document.querySelector('#formulario');
    const boton = document.querySelector('#boton');
    const resultado = document.querySelector('#resultado');

    const filtrar = () => {
        resultado.innerHTML = '';
        //console.log(formulario.value);

        const textoo = formulario.value.toLowerCase();
        const texto = textoo.trim();
        //alert(typeof(texto))

        for (let poke of idPokemons) {
            let nombre = poke.nombre.toLowerCase();
            let id = poke.id.toLowerCase();
            // console.log(typeof (id))
            if (nombre.indexOf(texto) !== -1) {
                resultado.innerHTML += ` <li>${poke.nombre}- id: ${poke.id}</li>`
            }



            if (resultado.innerHTML === '') {
                resultado.innerHTML += `<span> Pokemon no encontrado. Desea buscar en la red???</span> `
                resultado.innerHTML += `<button type="button" class="btn btn-outline-primary" onclick="buscarRed(${texto});">Buscar</button>
                `

            }
        }

    }
    boton.addEventListener('click', filtrar);
    formulario.addEventListener('keyup', filtrar);
    /// filtrar()

})();



const buscarRed = async (texto) => {
    // alert(texto)
    const response = await axios.get(url + texto);
    console.log(response.data.forms[0].name);

    resultado.innerHTML = `${response.data.forms[0].name}  Desdea agregarlo a las opciones ?         
    <button type="button" class="btn btn-outline-primary" onclick="agregar(${texto});">Agregar</button>
 `;

}

const agregar = async (texto) => {
    // alert(texto);
    const response = await axios.get(`${url}${texto}`);
    console.log(response.data.forms[0].name + response.data.id);

    const nombre = response.data.forms[0].name;
    const id = response.data.id;

    console.log({ id: `${id}`, nombre: `${nombre}` })
    n = idPokemons.push({ id: `${id}`, nombre: `${nombre}` });
    mostrar(id, nombre);
}
const mostrar = async (id, nombre) => {
    idPokemons.forEach(element => {
        if (id == element.id && nombre == element.nombre) {
            // alert("esta insertado");
            //   console.log(`id :${element.id}, nombre: ${element.nombre}`)  ;
            resultado.innerHTML = `Esta insertado  id :${element.id}, nombre: ${element.nombre}   <button type="button" class="btn btn-outline-primary" onclick="capturar(${element.id})" >Seleccionar</button>  `

        } else {
            // alert(`${id} y ${element.id} ---   ${nombre} y ${element.nombre}     `);       
        }
    }
    )
};

//console.log(idPokemons)
const getPokemons = async () => {
    for (let x = 0; x < 11; x++) {

        const id = await Math.floor((Math.random() * (151 - 5)) + 1);
        const response = await axios.get(`${url}${id}`);
        // console.log(response.data.forms[0].name)


        n = idPokemons.push({ id: `${id}`, nombre: `${response.data.forms[0].name}` });
        console.log({ id: `${id}`, nombre: `${response.data.forms[0].name}` })
        pAbilities(response.data, id);

    }
}

const pAbilities = async (data, id) => {
    let name = document.createElement("h2");
    let experiencia = document.createElement("li");

    let listarA = document.createElement("li");
    let listarB = document.createElement("li");
    let imagen = document.createElement("div");
    let boton = document.createElement("button")

    let cardd = document.createElement("div")
    var att = document.createAttribute("class");
    att.value = 'card';
    cardd.setAttributeNode(att);
    var identidad = document.createAttribute("id");
    identidad.value = "card";
    cardd.setAttributeNode(identidad);

    cardd.value = `${id}`
    document.body.appendChild(cardd);

    // console.log(`experiencia:  ${data.base_experience}`)


    name.innerHTML = `<strong>${id} --  ${(data.forms[0].name).toUpperCase()}  </strong> `;
    // document.body.appendChild(name);
    cardd.appendChild(name)


    imagen.innerHTML = ` <img src="${data.sprites.front_default}" alt="MDN"></img>`;
    // document.body.appendChild(imagen);
    cardd.appendChild(imagen)


    experiencia.innerHTML = `<strong> Experiencia:</strong>  ${data.base_experience}  `;
    // document.body.appendChild(experiencia);
    cardd.appendChild(experiencia)


    listarB.innerHTML = `<strong> Type: </strong>`;
    data.types.forEach(types => listarB.innerHTML += ` ${(types.type.name)} ` + "  ")
    // document.body.appendChild(listarB);
    cardd.appendChild(listarB)


    listarA.innerHTML = (`<strong> Ability: </strong>`);
    data.abilities.forEach(ability => listarA.innerHTML += (ability.ability.name) + `  `)
    // document.body.appendChild(listarA);
    cardd.appendChild(listarA);

    var att = document.createAttribute("class");
    var attr = document.createAttribute("onclick");
    var identidad = document.createAttribute("id");
    // var desabilitar = document.createAttribute("disabled")
    var nameatt = document.createAttribute("name");



    att.value = `btn btn-outline-secondary `;
    boton.setAttributeNode(att);


    attr.value = `capturar(value); ((att) => {
        var att = document.createAttribute("class");
       att.value =  this.disabled = true ;
    })();
   `;

    boton.setAttributeNode(attr);


    identidad.value = `id`;
    boton.setAttributeNode(identidad)



    nameatt.innerHTML = "name";
    nameatt.value = "capturar"
    boton.setAttributeNode(nameatt)


    identidad.innerHTML = `id`;
    identidad.value = `${id}`

    boton.innerHTML = "Seleccionar";
    boton.value = `${id}`




    // document.body.appendChild(boton);
    cardd.appendChild(boton)
    // formulario.appendChild(cardd)  
    // document.body.appendChild(formulario);


}


const tm = async (req, res) => {
    await getPokemons();
}

const capturar = async (value) => {

    // await alert(value)
    const response = await axios.get(`${url}${value}`);
    const name = response.data.forms[0].name;
    const experience = response.data.base_experience;

    response.data.types.forEach(types => insertTypess.push(`${types.type.name}`))
    const type = insertTypess.join(",")
    console.log(type)

    response.data.abilities.forEach(ability => insertAbilitiess.push`${ability.ability.name}`)
    const abilities = insertAbilitiess.join("");
    console.log(abilities)


    const id = response.data.id;
    const img = response.data.sprites.front_default;
    console.log(img)

    /// aca se pincha la base ..... 
    console.log(`${id} /// ${name} /// ${experience} /// ${type} ///${abilities}///${img}`)
    capturados.push({ id: `${id}`, name: `${name}`, experience: `${experience}`, type: `${type}`, abilities: `${abilities}`, imagen: `${img}` });

    n = ids.push({ id: `${id}` });
    console.log(n)
    contador(value)

}
//divModal.innerHTML="";
const contador = (value) => {
    // alert("1")
    contadorr.push(1)


    const x = document.querySelectorAll('#si').length
    // alert (`${x } esto es lo que sale y ${typeof(x)}`)
    const n = 6 - x
    alert(n)

    if (contadorr.length == n) {
        //alert(contadorr.length)
        var i = 0;
        while (capturados[i]) {

            alert("Id: " + capturados[i].id + "   " + "nombre: " + capturados[i].name + "    capturados totales: " + capturados.length)
            i++;
        }

        alert("guardar")

        var divModal = document.createElement("div");
        document.body.appendChild(divModal);
        divModal.innerHTML == ""

        // const divmodall = document.createElement("div");
        const divFlotante = document.createElement("div");
        const claseFlotante = document.createAttribute("class");
        claseFlotante.value = "flotante";
        const iddd = document.createAttribute('id');
        iddd.value = "flotante"
        divFlotante.setAttributeNode(claseFlotante);
        divFlotante.setAttributeNode(iddd);
        document.body.appendChild(divFlotante);

        const botonCapturar = document.createElement("button");
        const clase = document.createAttribute("class")
        clase.value = "btn btn-danger"
        const idd = document.createAttribute('id');
        idd.value = "enviando"
        const presion = document.createAttribute("onclick");
        presion.value = "enviar()"
        botonCapturar.innerHTML = "Enviar"
        botonCapturar.setAttributeNode(presion)
        botonCapturar.setAttributeNode(clase)
        botonCapturar.setAttributeNode(idd)
        document.body.appendChild(botonCapturar);


        divModal.innerHTML = `
        <div  class="flotante">  
        <h1>let's capture your pokemons</h1>
        
        <button type="submit"  id="fin" class="btn btn-outline-dark btn-lg btn-block"onclick="((e) => {enviar(value)
  

        })()"  >        <a href="#sol" class="btn btn-outline-dark btn-lg btn-block" data-toggle="collapse">capture Going to </a>
        </button>





        <div class="container">
        <div id="sol" class="collapse">
        <h2>whath you like doing?</h2>

        <button type="submit" class="btn btn-outline-dark btn-lg btn-block" > <a class="dropdown-item" href="/pokemons/list">Capture then  go to Listing</a></button>
        <div class="dropdown-divider"></div>
        <button type="submit" class="btn btn-outline-dark btn-lg btn-block" > <a class="dropdown-item" href="/pokemons/counts">Add A Pokemons</a></button>
        </div>
      </div>


        </div>
        `


        var btnAceptar = document.getElementById("fin");
        var disableButton = function () { this.disabled = true; };
        btnAceptar.addEventListener('click', disableButton, false);


        //  setTimeout(()=>{ alert("Hello"); }, 3000);




        document.body.appendChild(divModal);

    } else {
        // alert('entre en else GAtooooooooooooooooooooooooooooooooooooooooooooooooooooo')
        var i = 0;
        while (capturados[i]) {
            alert("Id: " + capturados[i].id + "   " + "nombre: " + capturados[i].name + "    capturados totales: " + capturados.length)
            i++;

        }
    }
}


const enviar = async (req, res) => {
    alert(capturados.length)
    const x = document.querySelectorAll('#si').length
    const n = 6 - x


    console.log(capturados.map(cap => `id: ` + `${cap.id}` + ` name: ` + `${cap.name}` + ` experience: ` + `${cap.experience}` + ` type: ` + `${cap.type}` + ` abilities: ` + `${cap.abilities}` + ` imagen: ` + `${cap.imagen}`))
    // console.log(capturados[0].name)
    // const enviando = await axios.post(`http://localhost:4000/pokemons/add`, { ...capturados})
    const enviando = await axios.post(`http://localhost:4000/pokemons/add${n}/`, { ...capturados })

    console.log(enviando)

    console.log("si lo estoy enviando")
}

