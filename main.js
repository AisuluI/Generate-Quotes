const URL = 'https://programming-quotes-api.herokuapp.com/Quotes?count=0'
const text = document.querySelector('.text');
const author = document.querySelector('.author');
const nextBtn = document.querySelector('.next');

fetch('https://programming-quotes-api.herokuapp.com/Quotes?count=0')
.then(response => response.json())
.then(data => showQuote(data))

const showQuote = (data) =>{
  console.log(data)
  /* for(let el of data){
    console.log(el.en)
    //return el.en
  } */
    for(let i=0; i<data.length; i++){
    console.log(data[0].en, data[0].author)
   
  }
}

nextBtn.addEventListener('click',() =>{
    showQuote()
    text.innerHTML = Math.random(data[i].en)
})

