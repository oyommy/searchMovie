const searchBtn = document.getElementById("submit")
const searchItem = document.getElementById("search_item")

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const userInput = searchItem.value;
    fetch(`http://api.tvmaze.com/search/shows?q=${userInput}`)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.length; i++){
                if(data[i].show.image){
                    const img = document.createElement('img')
                    img.src = data[i].show.image.medium;
                    img.classList.add('imgur')
                    document.body.append(img)
                }
            }            
        });
            
})
//if there are multiple params aside userInput, use config
//const config = {params: {q: searchTerm, isFunny: 'yomi' }}
//fetch will now be `url`, config
