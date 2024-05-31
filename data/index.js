"use strict"
import{cardComponent} from "../coponent/cardconponent.js"
import { usercomponent } from "../coponent/userconponent.js"
import { getData } from "../store/fetchApi.js"
const reanderArea=document.querySelector("#reanderArea")

// let basURL="https://fakestoreapi.com/products";
// fetch(basURL)
// .then(res => res.json())
// .then((data) => {
//     let product = data
//     product.map((product) => reanderArea.innerHTML += cardComponent(product));
// } );

// const products= await getData("products")
// products.map((products)=>(reanderArea.innerHTML+= cardComponent(products)));

const user=await getData("users")
user.map((user) => (reanderArea.innerHTML+=usercomponent(user)));
console.log(user)

