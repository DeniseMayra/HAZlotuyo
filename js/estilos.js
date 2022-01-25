
let productList = [
    {id:"as1",
        name:"Diseño de Dragon Ball Z",
        img: "../assets/tazas/dragon1.1.jpeg", 
        img2: "../assets/tazas/dragon1.2.png",
        price: "800"},
    {id:"as2",
        name:"Diseño de Dragon Ball Z",
        img: "../assets/tazas/dragon2.2.png",
        img2: "../assets/tazas/dragon2.1.png",
        price:"700"},
    {id:"as3",
        name:"Diseño de Dragon Ball Z",
        img: "../assets/tazas/velez1.1.png",
        img2: "../assets/tazas/velez1.3.png",
        price:"850"},
    {id:"as4",
        name:"Diseño de Dragon Ball Z",
        img: "../assets/tazas/river1.1.png",
        img2: "../assets/tazas/river1.2.png",
        price:"700"},
    {id:"as5",
        name:"Diseño de Dragon Ball Z",
        img: "../assets/tazas/mama1.1.png",
        img2: "../assets/tazas/mama1.2.png",
        price:"700"},
]
let cart=[]; 

// --------------------------- AGREGAR CATALOGO ---------------------------


for(let product of productList){
    {/* <img src="${product.img}" class="card-img-top" alt="..."></img> */}
        $("#prod__container").append(`
        <div class="card item__description" style="width: 18rem;">
    
        <div id="${product.id}" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${product.img}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${product.img2}" class="d-block w-100" alt="...">
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


