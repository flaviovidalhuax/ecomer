import { data } from "./js/data.JS";
const contentCastBody =document.querySelector(".content_cast-body");
const cosntentClothing = document.querySelector(".cosntent_clothing");
let html='';
let cart = {};
data.forEach(({id, clothing, precio ,amount, img, stock}) => {
     html +=
    `
<div class="box_clothing_img">
    <div>
        <img src="${img}" alt="">
    </div>

   <div class="box_clothing" id="${id}">
        <h2 class="clothing_body_title">${clothing}</h2>

        <p>price:$ ${precio}</p>
        <p>Stock:$ ${stock}</p>
        <button class="btn btn_add">agregar</button>
   </div>
</div>
    `
     });

     cosntentClothing.innerHTML=html;

     const iconCard = document.querySelector("#icon_card");
     const itemCart = document.querySelector(".item_cart");
     const contentCart = document.querySelector(".box_cart_clowthing");//box_cart_clowthing


     iconCard.addEventListener("click", (e) => {
        contentCart.classList.toggle("box_cart_clowthing_show")

     });

     function printclowthincart() {
       // const contentCastBody =document.querySelector(".content_cast-body");
       const total = document.querySelector("#total")
       const productsTotal = document.querySelector("#productsTotal")

       let html = "";
        const arraycart = Object.values(cart);

        arraycart.forEach(({id, clothing, stock, img, amount, precio,subtotal }) => {
            let contCart = 0;
            let sumTotal = 0;
            html +=`
        <div class="item_cart">
            <div class="item_cart_img">
                <img src="${img}" alt="img">
            </div>
            <h4 class="aitem_cart_title">${clothing}</h4>
            <p> stock:${ stock}</p>
            <p> Total:${precio*amount}</p>
            <span class="amount">unidad: ${amount}</span>
            <div class="item_cart-ptions" id="${id}">
                <svg class ="plus"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;" ><path d="M11 10H9v3H6v2h3v3h2v-3h3v-2h-3z"></path><path d="M4 22h12c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2zM4 8h12l.002 12H4V8z"></path><path d="M20 2H8v2h12v12h2V4c0-1.103-.897-2-2-2z"></path></svg>

                <svg class="rest" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M14 11h8v2h-8zM8 4a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2zm-4 8a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></path></svg>
                <svg class="trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
            </div>
        </div>

           `;


        });
        contentCastBody.innerHTML = html;

        const carttotal = document.querySelector("#total")

            // COSTO TOTAL
        let totaltext = "";
        let totalnumber = 0;
        console.log(arraycart);
        arraycart.forEach(({ precio, amount}) => {
        let subtotalnumber = precio*amount;
        totalnumber += subtotalnumber;
        

        })
         totaltext += `<h3><span id="total">Tolal:$ ${totalnumber}.00</span></h3>`;
         carttotal.innerHTML= totaltext;
         console.log(totalnumber);

     }

     cosntentClothing.addEventListener("click", (e)=> {
        //let amount=1;
        if(e.target.classList.contains("btn_add")){

            const idClowth = +e.target.parentElement.id;
            const findsclowth = data.find((item) => item.id === idClowth);
            console.log(cart[idClowth]);

                 if (cart[idClowth]) {
                     cart[idClowth].amount++;
                 } else{
                    cart[idClowth]= findsclowth;
                    cart[idClowth].amount=1;
                }
            printclowthincart();
         }

     });

     contentCastBody.addEventListener( 'click', (e) =>{  ///   contentCastBody
        //console.log(e.target);
        if (e.target.classList.contains("plus")){
            const idClowth= +e.target.parentElement.id;
            const astockClowth= +e.target.parentElement.stock;
            console.log(cart[idClowth].amount);
            if (cart[idClowth].amount < cart[idClowth].stock){
                cart[idClowth].amount++ ;
            return
            }
            alert("no hay producto");
           
        }
        if (e.target.classList.contains("rest")){
            const idClowth= +e.target.parentElement.id;
            if (cart[idClowth].amount >= 1){
               
                cart[idClowth].amount--;
            }
        }
        if (e.target.classList.contains("trash")){
             const idClowth= +e.target.parentElement.id;
             delete cart[idClowth];

         }
         printclowthincart();
     } )

//slider img        
     const heckout = document.querySelector(".send");
     heckout.addEventListener('click', () => {
        alert('Thank you for your purchase!');
    });

    const before = document.querySelector('.before'); 
const next = document.querySelector('.next'); 
const slider = document.querySelector('.slider');

before.addEventListener('click', () =>{
    slider.scrollLeft -= 80;
})

next.addEventListener('click', () =>{
    slider.scrollLeft += 80;
})
//slider img 
