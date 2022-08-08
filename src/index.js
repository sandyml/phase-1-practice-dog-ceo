console.log('%c HI', 'color: firebrick')
// challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

//fetch request 
fetch(imgUrl)
.then(response => response.json())
.then(renderDogs)


function renderDogs(dogStuff) {
    console.log(dogStuff)

    dogStuff.message.forEach(buildAndAppendDogElement)
}

function buildAndAppendDogElement(imgUrl) {
    console.log(imgUrl)
    // create new element
    const newImg = document.createElement('img')
    // change the attribute to use the img string
    newImg.src = imgUrl 
    // then append to DOM
    const imgContainer = document.getElementById("dog-image-container")
    imgContainer.append(newImg)
}

// challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// fetch request with created breedUrl
// on page load, fetches all the dog breeds using the url above
fetch(breedUrl)
.then (response => response.json())
.then(breedResponse => {
    const breedArr = Object.keys(breedResponse.message)
    const breedsContainer = document.querySelector("#dog-breeds")

    breedArr.forEach(breedText => {
        // create new element 
        const newLi = document.createElement('li')
        // then change the text content of the element 
        newLi.textContent = breedText

                   newLi.addEventListener('click', (event) => {
                    
                    event.target.style.color = 'blue'
                })
                // append the new element to the DOM
                breedsContainer.append(newLi)
            })
        })
