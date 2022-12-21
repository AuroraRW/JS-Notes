// fetch: a simplified way of doing XMLHttpRequests
const quoteURL = 'https://type.fit/api/quotes'
const imageURL = 'https://picsum.photos/v2/list'

fetch(quoteURL)
.then(response=>{
        // console.log(response.json())
        return response.json()
})
.then(response=>{
    let quoteData = response
    // sort by author
    quoteData.sort((a,b)=>a.author < b.author ? -1: 1);

    fetch(imageURL)
    .then(response=>{
        return response.json()
    })
    .then(imageData=>{
        for (let i=0;i<imageData.length;i++){
            addQuoteCardToContainer(quoteData[i].text, quoteData[i].author, imageData[i].download_url)
        }
    })
})
.catch(err=>{
    console.log(err)
})


// async function getData(quoteURL, imageURL){
//     const quoteData = await fetch(quoteURL)
//                         .then(response=>{
//                             if(response.ok){
//                                 // console.log(response.json())
//                                 return response.json()
//                             }
//                         })
//                         .catch(err=>{
//                             console.log(err)
//                         })
//     const imageData = await fetch(imageURL)
//                         .then(response=>{
//                             if(response.ok){
//                                 // console.log(response.json())
//                                 return response.json()
//                             }
//                         })
//                         .catch(err=>{
//                             console.log(err)
//                         })
//     // console.log(quoteData)
//     // console.log(imageData)
//     for (let i=0;i<imageData.length;i++){
//         addQuoteCardToContainer(quoteData[i].text, quoteData[i].author, imageData[i].download_url)
//     }
// }
// getData(quoteURL, imageURL)

function addQuoteCardToContainer(quote, author, imageURL){
    document.getElementById('container').innerHTML +=
      `  
      <div class="card">
        <img src=${imageURL}>
          <div class="card-body">
            <h5 class="card-text">${quote}</h5>
            <p class="card-title">${author}<p>
          </div>
        </div>
      `
}

