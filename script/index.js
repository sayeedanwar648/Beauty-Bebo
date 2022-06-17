var productarr=[
    {
        
        img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg",
        title: "Lotus Herbals Whiteglow Vitamin",
        oldprice: "475.00",
        newprice: "428.00",
        ratings: "5",
       
      },
      {
        img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/e/3eb5e308904311902874_1.jpg",
        title: "Wow Skin Science Raw African Shea Body Butter",
        oldprice: "499.00",
        newprice: "440.00",
        ratings: "5",
       
      },
      {
        img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/a/9a262018906087777229__7_.jpg",
        title: "Mamaearth Vitamin C Nourishing Cold Cream",
        oldprice: "299.00",
        newprice: "299.00",
        ratings: "5",
        
        
      },
      {
        img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be3a2018906087777212__7_.jpg",
        title: "Mamaearth Ubtan Nourishing Cold Cream ",
        oldprice: "299.00",
        newprice: "299.00",
        ratings: "5",
       
        
      }
]
let container=document.getElementById("thirddiv")

productarr.forEach(function(el){
    let div1=document.createElement("div")
    div1.style.height="100%"
    div1.style.width="25%"
    div1.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"

    
    let div2=document.createElement("div")
    div2.style.display="flex"
    div2.style.gap="10px"
    div2.style.marginLeft="60px"
    

    let off=document.createElement("p")
    off.innerText="15% off"
    off.style.color="green"
    off.style.fontWeight="bolder"
    // off.setAttribute("class","off")
    let image=document.createElement("img")
    image.src=el.img;
    image.style.height="236px"
    image.style.width="236px"
    // image.setAttribute("class","image")
    let title=document.createElement("p")
    title.innerText=el.title
    // title.setAttribute("class","title")
    let oldprice=document.createElement("p")
    oldprice.innerText=el.oldprice
    oldprice.style.textDecoration="line-through"
    // oldprice.setAttribute("class","oldprice")
    let newprice=document.createElement("p")
    newprice.innerText=el.newprice
    newprice.style.fontWeight="bolder"
    newprice.style.fontSize="16px"
    newprice.style.color="#c60277"

    // newprice.setAttribute("class","newprice")
    let rating=document.createElement("h4")
    rating.innerText=el.ratings
    
    let btn=document.createElement("button")
    btn.innerText="Add to Cart"
    btn.style.backgroundColor="#c60277"
    btn.style.border="none"
    btn.style.padding="10px"
    btn.style.color="white"

    // btn.setAttribute("addtocart")
    btn.addEventListener("click",function(){
        addtocart(el)

    })
    div2.append(oldprice,newprice,off)
    div1.append(image,title,div2,btn)
    container.append(div1)
    
})
let container2=document.getElementById("thirddiv2")
productarr.forEach(function(el){
  let div1=document.createElement("div")
  div1.style.height="100%"
  div1.style.width="25%"
  div1.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"

  
  let div2=document.createElement("div")
  div2.style.display="flex"
  div2.style.gap="10px"
  div2.style.marginLeft="60px"
  

  let off=document.createElement("p")
  off.innerText="15% off"
  off.style.color="green"
  off.style.fontWeight="bolder"
  // off.setAttribute("class","off")
  let image=document.createElement("img")
  image.src=el.img;
  image.style.height="236px"
  image.style.width="236px"
  // image.setAttribute("class","image")
  let title=document.createElement("p")
  title.innerText=el.title
  // title.setAttribute("class","title")
  let oldprice=document.createElement("p")
  oldprice.innerText=el.oldprice
  oldprice.style.textDecoration="line-through"
  // oldprice.setAttribute("class","oldprice")
  let newprice=document.createElement("p")
  newprice.innerText=el.newprice
  newprice.style.fontWeight="bolder"
  newprice.style.fontSize="16px"
  newprice.style.color="#c60277"

  // newprice.setAttribute("class","newprice")
  let rating=document.createElement("h4")
  rating.innerText=el.ratings
  
  let btn=document.createElement("button")
  btn.innerText="Add to Cart"
  btn.style.backgroundColor="#c60277"
  btn.style.border="none"
  btn.style.padding="10px"
  btn.style.color="white"

  // btn.setAttribute("addtocart")
  btn.addEventListener("click",function(el){
      addtocart(el)

  })
  div2.append(oldprice,newprice,off)
  div1.append(image,title,div2,btn)
  container2.append(div1)
  
})

let logo=document.getElementById("logo");
logo.addEventListener("click",function(){
  clickfn()
})
function clickfn(){
  window.location="index.html"
}
let he=document.getElementById("heart");
he.addEventListener("click",function(){
  heartfn()
})
function heartfn(){
  window.Location="./register.html"
}

let pro=document.getElementById("profile");
pro.addEventListener("click",function(){
  profilefn()
})
function profilefn(){
  window.Location="./login.html"
}

let product=JSON.parse(localStorage.getItem("data"))||[]
function addtocart(el){
  product.push(el)
  localStorage.setItem("data",JSON.stringify(product))
}


