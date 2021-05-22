let products = [
    {
        name:"WHITE t-SHIRT",
        size:"L",
        color:"white",
        price:"1000",
        image:"a.jpg",
        description:"Good looking white tshirt",
    },  
    {
        name:"WHITE t-SHIRT For Girls",
        size:"M",
        color:"white",
        price:"1200",
        image:"b.jpg",
        description:"white tshirt",
    },  
    {
        name:"SLAWAL kAMEJA",
        size:"L",
        color:"Green",
        price:"100000",
        image:"c.jpg",
        description:"Good looking",
    },  
    {
        name:"BLUE t-SHIRT FOR gIRL",
        size:"L",
        color:"bLUE",
        price:"10000",
        image:"d.jpg",
        description:"BLUE tshirt",
    },  
];

cart=[];


function displayProducts(productsData , who="productwrapper")
{
    let productsString="";
    productsData.forEach(function(product,index){ 
          
        let {name,image,color,description,price,size}=product;
       // let productString=JSON.stringify(product);
       if(who=="productwrapper") {
        productsString+=`<div class="product">
        <div class="prodimg">
            <img src="${image}" width="100%"  /></div>
        <h3>${name}</h3>
        <p>Price:${price}$</p>
        <p>Size:${size}</p>
        <p>Color:${color}</p>
        <p>${description}</p>
        <p>
            <button onClick ="addToCart('${index}')">Add to Cart</button> 
            </p>
    </div>`;
      } 
     else if(who=="cart") 
     {
        productsString+=`<div class="product">
        <div class="prodimg">
            <img src="${image}" width="100%"  /></div>
        <h3>${name}</h3>
        <p>Price:${price}$</p>
        <p>Size:${size}</p>
        <p>Color:${color}</p>
        <p>${description}</p>
        <p>
            <button onClick ="removeFromCart('${index}')">Remove from Cart</button> 
            </p>
    </div>`;
     }
    });

    document.getElementById(who).innerHTML=productsString;
}
displayProducts(products);


function searchProduct(searchValue){
 //let searchValue=document.getElementById('searchvalue').value;
 //console.log(searchValue);
      let searchedProducts=products.filter(function(product,index){
        let searchString=product.name+""+product.color+""+product.description;   
        return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!=-1; 
      }) ;
displayProducts(searchedProducts);
  }
  //temporary storage
function addToCart(index){
    cart.push(products[index]);
    displayProducts(cart,"cart");
   // console.log(cart);
}
function removeFromCart(index){
    cart.splice(index,1);
    displayProducts(cart,"cart");
    //console.log(cart);
}