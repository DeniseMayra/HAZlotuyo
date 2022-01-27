// ----------------------- ARRAY DE PRODUCTOS------------------
let cupList = [
    {id:"cup1",
        name:"Taza de Dragon Ball Z",
        img: "../assets/tazas/dragon1.1.jpeg", 
        img2: "../assets/tazas/dragon1.2.png",
    },
    {id:"cup2",
        name:"Taza de Dragon Ball Z",
        img: "../assets/tazas/dragon2.2.png",
        img2: "../assets/tazas/dragon2.1.png",
    },
    {id:"cup3",
        name:"Taza de Velez Sarsfield",
        img: "../assets/tazas/velez1.1.png",
        img2: "../assets/tazas/velez1.3.png",
    },
    {id:"cup4",
        name:"Diseño ojo de Horus",
        img: "../assets/tazas/taza3.1.jpg",
        img2: "../assets/tazas/taza3.2.jpg",
    },
]

let personal_cupList = [
    {id:"pcup1",
        name:"Diseño de taza para Enamorado/a",
        img: "../assets/tazas/pareja.1.1.jpg", 
        img2: "../assets/tazas/pareja1.2.jpg",
    },
    {id:"pcup2",
        name:"Diseño de taza para Mamá",
        img: "../assets/tazas/mama1.2.png",
        img2: "../assets/tazas/mama1.3.png",
    },
    {id:"pcup3",
        name:"Diseño de taza de River",
        img: "../assets/tazas/river1.1.png",
        img2: "../assets/tazas/river1.2.png",
    }
]

let designList = [
    {id:"cupDe1",
        name:"Diseño de Chanchito tierno",
        img: "../assets/tazas/diseno2.jpg", 
    },
    {id:"cupDe2",
        name:"Diseño de Pareja de Paltas",
        img: "../assets/tazas/diseno1.jpg",
    },
    {id:"cupDe3",
        name:"Diseño de Harry Potter",
        img: "../assets/tazas/diHP1.jpg",
    },
    {id:"cupDe4",
        name:"Diseño de los Simpsons ",
        img: "../assets/tazas/diSimpsons1.jpg",
    },
    {id:"cupDe5",
        name:"Diseño de Star Wars",
        img: "../assets/tazas/diStarW1.jpg",
    },
    {id:"cupDe6",
        name:"Diseño para Papá",
        img: "../assets/tazas/diPapa1.jpg",
    },
    {id:"cupDe7",
        name:"Diseño auto para Papá",
        img: "../assets/tazas/diPapa2.jpg",
    },
    {id:"cupDe8",
        name:"Diseño de Dragon Ball Z",
        img: "../assets/tazas/diDragonBall1.jpg",
    }
]

let tshirtsList = [
    {id:"tshi1",
        name: 'Musculosa diseño HazLoTuyo',
        img:"../assets/indumentaria/musc1.1.png",
        img2:"../assets/indumentaria/musc1.2.png",
        price: 700,
    },
    {id:"tshi2",
        name:"Musculosa diseño HazLoTuyo",
        img:"../assets/indumentaria/musc2.1.png",
        img2:"../assets/indumentaria/musc2.2.png",
        price: 700,
    },
    {id:"tshi3",
        name:"Remera Fluo diseño HazLoTuyo",
        img:"../assets/indumentaria/remera1.1.png",
        img2:"../assets/indumentaria/remera1.2.png",
        price: 800,
    },
]

let sweaterList =[
    {id:"swea1",
        name:"Buzo de Naruto",
        img: "../assets/indumentaria/buzo2.1.png",
        img2: "../assets/indumentaria/buzo2.2.png",
        price: 1300,
    },
    {id:"swea2",
        name:"Buzo Dibujo de nena",
        img: "../assets/indumentaria/buzo1.1.png",
        img2: "../assets/indumentaria/buzo1.2.png",
        price: 1200,
    }
]

let clothesDesignList = [
    {id:"clothDe1",
        name:"Diseño de Mujer Japonesa",
        img: "../assets/indumentaria/diInduMujerJapon.jpg", 
    },
    {id:"clothDe2",
        name:"Diseño de Samurai",
        img: "../assets/indumentaria/diInduSamurai1.jpg", 
    },
    {id:"clothDe3",
        name:"Diseño de Samurai con frase",
        img: "../assets/indumentaria/diInduSamurai2.jpg", 
    }
]

let cart=[]; 

// --------------------------- AGREGAR CATALOGO EN HTML---------------------------


for(let product of cupList){
    
    $("#prod_cup").append(`
        <div class="card item__description" style="width: 18rem;">

            <div id="${product.id}" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${product.img}" class="d-block w-100" alt="Imagen del Producto">
                    </div>
                    <div class="carousel-item">
                        <img src="${product.img2}" class="d-block w-100" alt="Imagen del Producto">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${product.id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${product.id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <select name="" class="selectBoton">
                    <option value="">Seleccione un Material</option>
                    <option value="Ceramica">Ceramica</option>
                    <option value="Plastico">Plastico</option>
                    <option value="Termica">Termica</option>
                </select>
                <p class="card-text item-price"></p>
                <a href="#" class="btn btn-primary addToCart">Agregar al Carrito</a>
            </div>
        </div>
    `)
}

for(let product of personal_cupList){
    
    $("#prod_personalCup").append(`
        <div class="card item__description" style="width: 18rem;">

            <div id="${product.id}" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${product.img}" class="d-block w-100" alt="Imagen del Producto">
                    </div>
                    <div class="carousel-item">
                        <img src="${product.img2}" class="d-block w-100" alt="Imagen del Producto">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${product.id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${product.id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <select name="" class="selectBoton2">
                    <option value="">Seleccione un Material</option>
                    <option value="Ceramica">Ceramica</option>
                    <option value="Plastico">Plastico</option>
                    <option value="Termica">Termica</option>
                </select>
                <p class="card-text item-price2"></p>
                <a href="#" class="btn btn-primary addToCart">Agregar al Carrito</a>
            </div>
        </div>
    `)
}

for(let product of designList){
    $("#prod_cupDesign").append(`
        <div class="card item__description" style="width: 25rem;">
            <img src="${product.img}" class="card-img-top" alt="Imagen del Producto">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <select name="" class="selectBoton2">
                    <option value="">Seleccione un Material</option>
                    <option value="Ceramica">Ceramica</option>
                    <option value="Plastico">Plastico</option>
                    <option value="Termica">Termica</option>
                </select>
                <p class="card-text item-price2"></p>
                <a href="#" class="btn btn-primary addToCart">Agregar al Carrito</a>
            </div>
        </div>

    `)
}

for(let product of tshirtsList){
    
    $("#prod_tshirts").append(`
        <div class="card item__description" style="width: 18rem;">

            <div id="${product.id}" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${product.img}" class="d-block w-100" alt="Imagen del Producto">
                    </div>
                    <div class="carousel-item">
                        <img src="${product.img2}" class="d-block w-100" alt="Imagen del Producto">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${product.id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${product.id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <select name="" >
                    <option value="">Seleccione un talle</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                </select>
                <p class="card-text">$ ${product.price}</p>
                <a href="#" class="btn btn-primary addToCart">Agregar al Carrito</a>
            </div>
        </div>
    `)
}

for(let product of sweaterList){
    
    $("#prod_sweater").append(`
        <div class="card item__description" style="width: 18rem;">

            <div id="${product.id}" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${product.img}" class="d-block w-100" alt="Imagen del Producto">
                    </div>
                    <div class="carousel-item">
                        <img src="${product.img2}" class="d-block w-100" alt="Imagen del Producto">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${product.id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${product.id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <select name="" >
                    <option value="">Seleccione un Talle</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                </select>   
                <p class="card-text">$ ${product.price}</p>
                <a href="#" class="btn btn-primary addToCart">Agregar al Carrito</a>
            </div>
        </div>
    `)
}

for(let product of clothesDesignList){
    $("#prod_clothDesign").append(`
        <div class="card item__description" style="width: 25rem;">
            <img src="${product.img}" class="card-img-top" alt="Imagen del Producto">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <select name="" class="selectBoton3">
                    <option value="">Seleccione Prenda</option>
                    <option value="Musculosa">Musculosa</option>
                    <option value="Remera">Remera</option>
                    <option value="Buzo">Buzo</option>
                </select>
                <select name="" >
                    <option value="">Seleccione un Talle</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                </select> 
                <p class="card-text item-price3"></p>
                <a href="#" class="btn btn-primary addToCart">Agregar al Carrito</a>
            </div>
        </div>

    `)
}

$(".selectBoton").change(function(e){
    let child = e.target;
    let father = child.parentNode;

    let message = father.querySelector(".item-price");
    
    // en realidad quiero traer la info de ese objeto para obtener el precio y ahi hacer las cuentas que comente. 
    // lo intente poniendo un valor en "item-price" para leerlo con querySelector pero no me funciono porque al precio que quedaba le sumaba o restaba 
    if(e.target.value == "Ceramica"){
        /* let price = numberprice;
        message.innerHTML = `$ ${price}`; */
        message.innerHTML = `$ 700`;
    }
    else if(e.target.value == "Plastico"){
        /* let price = parseInt(numberprice) -100;
        message.innerHTML = `$ ${price}`; */
        message.innerHTML = `$ 600`;
    }
    else if(e.target.value == "Termica"){
        /* let price = parseInt(numberprice) +100;
        message.innerHTML = `$ ${price}`; */
        message.innerHTML = `$ 800`;
    }
})

$(".selectBoton2").change(function(e){
    let child = e.target;
    let father = child.parentNode;

    let message = father.querySelector(".item-price2");
    
    if(e.target.value == "Ceramica"){
        message.innerHTML = `$ 800`;
    }
    else if(e.target.value == "Plastico"){
        message.innerHTML = `$ 700`;
    }
    else if(e.target.value == "Termica"){
        message.innerHTML = `$ 900`;
    }
})

$(".selectBoton3").change(function(e){
    let child = e.target;
    let father = child.parentNode;

    let message = father.querySelector(".item-price3");
    
    if(e.target.value == "Musculosa"){
        message.innerHTML = `$ 700`;
    }
    else if(e.target.value == "Remera"){
        message.innerHTML = `$ 800`;
    }
    else if(e.target.value == "Buzo"){
        message.innerHTML = `$ 1200`;
    }
})

// ----------------------- TOGGLE DEL CARRITO ------------------
$("#cartImg").on("click", function(){
    $("#cartInfo").slideToggle();
})


// ----------------------- AGREGAR AL CARRITO ------------------

let addToCartBotton = document.querySelectorAll(".addToCart");

for(let button of addToCartBotton){
    button.addEventListener("click", addToCart)
}

// obtener info del prod hacer un objeto para dsp agregarlo al cart[]
function addToCart(e){
    let child = e.target;
    let father = child.parentNode.parentNode;

    let itemTitle = father.querySelector("h5").textContent;
    let itemMaterial = father.querySelector("select").value;
    let itemPrice = father.querySelector("p").textContent;
    let itemImg = father.querySelector("img").src;

    if(itemMaterial === ""){
        alert("Por favor seleccione una opción")
    }
    else{
        let productinCart = {
            nombre:itemTitle,
            material:itemMaterial,
            price:itemPrice,
            img: itemImg,
            cantidad:1
        }

        addItemCart(productinCart);
    }

    
}

// si ya seleccione el prod anteriormente solo lo suma
let tbody = document.querySelector(".tbody");
function addItemCart(productinCart){
    let inputCant = tbody.getElementsByClassName("input_cant")
    
    for(let i=0; i<cart.length; i++){
        if(cart[i].img === productinCart.img && cart[i].material === productinCart.material){
            cart[i].cantidad++;
            totalPrice();

            let inputvalue = inputCant[i]; 
            inputvalue.value++;
            return null;
        }
    }
    cart.push(productinCart);
    insertHtml(productinCart);
    
} 

// insertar en el HTML carrito
function insertHtml(item){
   
    tbody.innerHTML = "";
    cart.map(item => {
        let tr = document.createElement('tr')
        tr.classList.add("shoppingCart_item") //agrega la clase al tr
        let trContent = `<th scope="row">1</th>
            <td><img src="${item.img}" alt="Imagen del Producto" class="card_img"></td>
            <td>${item.nombre}</td>
            <td>${item.material}</td>
            <td>${item.price}</td>
            <td>
                <input type="number" min="1" class="input_cant" value=${item.cantidad} >
                <button class="delete_item">Eliminar producto</button>
            </td>
        `
        tr.innerHTML = trContent;
        tbody.append(tr);

        tr.querySelector('.delete_item').addEventListener('click', removeItem)
        tr.querySelector('.input_cant').addEventListener('change', changeQty)
    })

    totalPrice();
}

function totalPrice(){
    let total = 0;
    
    for(item of cart){
        let price = item.price.slice(2);
        let qty = item.cantidad;
        let multi = parseInt(price) * parseInt(qty);
        
        total = total + multi;  

        let spanContainer = document.getElementById("cartTotal")
        spanContainer.innerHTML = total;
    } 
    addLocalStorage()
}

function removeItem(e){
    let deleteButon = e.target
    let father = deleteButon.closest('.shoppingCart_item')
    let img = father.querySelector("img").src;
    for(let i=0; i<cart.length; i++){
        if(cart[i].img === img){
            cart.splice(i, 1)
        }
    }

    father.remove()
    totalPrice()
}
function changeQty(e){
    let input = e.target
    let father = input.closest('.shoppingCart_item')
    let img = father.querySelector("img").src;
    for(let item of cart){
        if(item.img === img){
            if(input.value<0){alert("El valor ingresado no es correcto")}
            item.cantidad = input.value
            totalPrice()
        }
    }
}

function addLocalStorage(){
    jsonCart = JSON.stringify(cart)
    localStorage.setItem('cart', jsonCart)
}

window.onload = function(){
    let storageData = JSON.parse(localStorage.getItem('cart'));
    if(storageData){
        cart = storageData;
        insertHtml()
    }
}

// ----------------------- HOME / REQUISITOS / BOTONES ------------------
$("#requirementButon2").on("click", function(){
    $("#requirementsItem2").slideToggle();
})

$("#requirementButon").on("click", function(){
    $("#requirementsItem").slideToggle()
})

// ----------------------- CONTACTO ------------------

$("#next1").on("click", function(){
    $("#form1").css("left", "-450px");
    $("#form2").css("left", "40px");
    $("#progress").css("width", "240px");
})

$("#back1").on("click", function(){
    $("#form1").css("left", "40px");
    $("#form2").css("left", "450px");
    $("#progress").css("width", "120px");
})

$("#next2").on("click", function(){
    $("#form2").css("left", "-450px");
    $("#form3").css("left", "40px");
    $("#progress").css("width", "360px");
})

$("#back2").on("click", function(){
    $("#form2").css("left", "40px");
    $("#form3").css("left", "450px");
    $("#progress").css("width", "240px");
})

// ------------------------ DESAFIO AJAX EN TU PROYECTO ---------------------   
/* 
let ubication = navigator.geolocation.getCurrentPosition(showUbi)
function showUbi(data){
    console.log(data);
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;

    let weatherapi = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6ac6addf5d33fe1c34b2b23b3d39f7bb
    `
    $.get(weatherapi, function(datos){
        console.log(datos)
        let min = parseInt(datos.main.temp_min)-273.15;
        let max = parseInt(datos.main.temp_max)-273.15;

        let writeMin = min.toFixed(1);
        let writeMax = max.toFixed(1);

        let weatherContainer = document.getElementById("weather");
        weatherContainer.innerHTML = `<h4>El clima en ${datos.name}</h4>
                                    <p>La temperatura varia entre: ${writeMin}C - ${writeMax}C`
    })
} */
