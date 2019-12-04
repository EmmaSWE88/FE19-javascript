const url = 'https://thaikokitallkrogen.azurewebsites.net/api/fooditems'
let result = document.getElementById('result')
let search = document.getElementById('search')
let input = document.getElementById('fooditem')
let category = document.getElementById('category')

search.addEventListener('click', function(e) {
    
    let value = input.value
    let cat = category.value

    fetch(url)
    .then(res => res.json())
    .then(data => {

        for(let item of data.categories[cat].fooditems) {          
            if(item.number == value) {
                result.innerHTML = `<p>#${item.number} - ${item.name}</p><p>${item.description}</p>`
            }
        }

    })
})