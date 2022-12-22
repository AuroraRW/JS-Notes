
// function sendHTTPRequest(method, url){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.onload = function(){
//             if (xhr.status>= 300){
//                 reject(`Error, status code ${xhr.status}: ${xhr.statusText}`);
//             }else{
//                 let data = JSON.parse(xhr.response);
//                 resolve(data);
//             }
//         }
//         xhr.open(method, url);
//         xhr.send();
//     })
// }

// sendHTTPRequest('GET', 'https://fakestoreapi.com/products').then((response)=>console.log(response));

const getProducts = async (url)=>{
    try{
        const response = await fetch(url, {cache: 'no-cache'});
        if (response.ok){
            const jsonResponse = await response.json();
            return(jsonResponse);
        }
    }
    catch(error){
        console.log(error);
    }
}

function displayProducts(productsArray){
    productsArray.forEach(product =>{
        document.getElementById('container').innerHTML += 
        `<div class="card">
        <img class="product-img" src=${product.image} alt="">
        <h1>${product.title}</h1>
        <p>${product.price}</p>
        <p>${product.description}</p>
        </div>`
    })
}

getProducts('https://fakestoreapi.com/products')
.then((response)=>{
    // 1. sort by price
    // response.sort((a,b)=>a.price - b.price);
    
    // 2. filter Womens clothing
    // console.log(response)
    // let result = response.filter(product => product.category === "women's clothing")
    // console.log(result)
    
    // 3. get sum of price
    // let sumOfPrices = 0
    // response.forEach(product => sumOfPrices += product.price)
    // console.log(sumOfPrices)
    displayProducts(response)
});