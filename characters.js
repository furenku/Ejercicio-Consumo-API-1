let pageNum = 0



function formatCharacter(character) {
    const formattedCharacter = {
        image: character.img,
        name: character.name,
        nickname: character.nickname,
        id: character.char_id
    }

    return formattedCharacter

}

function createCharacter(character) {
    
    const model = document.querySelector(".character.model")
    const newCharacter = model.cloneNode(true)
    newCharacter.classList.remove("model")
    
    const name = newCharacter.querySelector(".name")
    const nickname = newCharacter.querySelector(".nickname")
    const image = newCharacter.querySelector(".image img")
    
    
    name.innerHTML = character.name
    nickname.innerHTML = character.nickname

    image.setAttribute("src", character.image)
    // cambiar valor de atributo para texto alternativo:
    image.setAttribute("alt", character.name)


    newCharacter.setAttribute("data-id", character.id)

    return newCharacter
}

function setupInteraction(element) {
    element.addEventListener("click", function (event) {

        const el = event.target
        console.log(el.getAttribute("data-id"))
    })
}

function displayCharacter(character) {
    const container = document.querySelector("#characters")

    const newCharacter = createCharacter(character)

    setupInteraction(newCharacter)
    container.append(newCharacter)

}

function displayCharacters(characters) {

    console.log( characters )

    const formattedCharacters = characters.map(formatCharacter)

    formattedCharacters.forEach(displayCharacter)
}



// function getAndDisplayCharacters() {
//     getData({
//         endpoint: "characters",
//         pageNum: 3,
//         elementsPerPage: 3,
//         displayFunction: displayCharacters
//     })
    
// }


function loadMore() {
    console.log("load more", pageNum)
    
    getData({
        endpoint: "characters",
        pageNum: pageNum,
        elementsPerPage: 3,
        displayFunction: displayCharacters
    })

    pageNum++
}

function setupPagination() {
    const btn = document.querySelector("#nextpage")
    btn.addEventListener("click", loadMore)
}

setupPagination()


loadMore()
// getAndDisplayCharacters();

console.log( "Characters")