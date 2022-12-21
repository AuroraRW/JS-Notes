// AJAX: Asynchronous JavaScript And XML 
const quoteURL = 'https://type.fit/api/quotes'
const imageURL = 'https://picsum.photos/v2/list'

const sendHTTPRequest = (method, url)=>{
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            // console.log(xhr.status)
            if (xhr.status >= 300){
                reject(`Error, status code ${xhr.status}: ${xhr.statusText}`)
            } else{
                let data = JSON.parse(xhr.response)
                resolve(data)
            }
        }
        xhr.open(method, url)
        xhr.send()
    })
}

sendHTTPRequest('GET', quoteURL)
  .then(response => {
    // console.log(response[0].author)
    let quotes = response
    // sort by author
    quotes.sort((a,b)=>a.author < b.author ? -1: 1);
    
    sendHTTPRequest('GET', imageURL)
    .then(response => {
        console.log(response)
        for (let i=0;i<response.length;i++){
            addQuoteCardToContainer(quotes[i].text, quotes[i].author, response[i].download_url)
        }
    })
})

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