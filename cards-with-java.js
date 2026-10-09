    let products=[ {
        productImage:"ea.jpg",
         productName:" open",
        productDes:"Lorem ipsum dolor sit amet consectetur adipisicing elit Saepe ex nam consequatur esse dolores voluptatibus a enim beatae ",
    },

    {
        productImage:"imge1.jfif",
         productName:" open",
        productDes:"Lorem ipsum dolor sit amet consectetur adipisicing elit Saepe ex nam consequatur esse dolores voluptatibus a enim beatae ",
    },

    {
        productImage:"imge2.jfif",
         productName:" open",
        productDes:"Lorem ipsum dolor sit amet consectetur adipisicing elit Saepe ex nam consequatur esse dolores voluptatibus a enim beatae ",
    }

    ]

 let con=document.getElementById('countainer')
 
    products.forEach(p=>{
        let ahtml=`<div class="card">
        <img src=${p.productImage} alt="">
        <h1>${p.productName}</h1>
        <p>${p.productDes}
            </p> </div>
`
  
 con.innerHTML+=ahtml 
} )