const ul = document.querySelector('ul')

fetch('https://telephone-assessment.herokuapp.com/api/v1/contacts')
    .then(response => response.json())
    .then(characters => characters.data.forEach(character => {
        
        const characterCard = document.createElement('div')
        const image = document.createElement('img') 
        const span = document.createElement('span')
        const p = document.createElement('p')
        const aTag = document.createElement ('a')  
        
        characterCard.className = 'card'
        image.src = character.imageURL
        span.textContent = `${character.name} ${character.phone}`
        p.textContent = `${character.message}`
        aTag.innerHTML = `<a href='contact.html?id=${character.name}'>Leave a message for ${character.name}</a>`
        
        ul.appendChild(characterCard)
        characterCard.append(image, span, p, aTag) 
    }))


    heroinePower.innerHTML = `<a href='show.html?id=${heroine.power_id}'>${heroine.power.name}</a>`