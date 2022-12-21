// jQuery
const quoteURL = 'https://type.fit/api/quotes'
const imageURL = 'https://picsum.photos/v2/list'

$(document).ready(()=>{
    $.getJSON(quoteURL,(response)=>{
        let quoteData = response
        // sort by author
        quoteData.sort((a,b)=>a.author < b.author ? -1: 1);
        
        $.getJSON(imageURL,(imageData)=>{
            for (let i=0;i<imageData.length;i++){
                addQuoteCardToContainer(quoteData[i].text, quoteData[i].author, imageData[i].download_url)
            }
        })
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