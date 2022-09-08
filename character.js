function getId() {

    const queryString = window.location.search

    const urlParams = new URLSearchParams( queryString )

    const id = urlParams.get("id")

    if( ! id ) {

        throw new Error("Por favor agregar id a url")

    }
    
    return id

}


function loadCharacter() {

    try {

        const id = getId()

        getData({
            endpoint: `characters/${id}`,
            displayFunction: displayCharacter
        })

    } catch(err) {

        console.error( err.message );

    }


}



function formatCharacter(character) {
    const formattedCharacter = {
        image: character.img,
        name: character.name,
        nickname: character.nickname,
        id: character.char_id
    }

    return formattedCharacter

}

function displayCharacter(characterArray) {
    

    const character = formatCharacter( characterArray[0] )
    
    const newCharacter = document.querySelector(".character-detail")
    // const newCharacter = model.cloneNode(true)
    newCharacter.classList.remove("model")
    
    const name = newCharacter.querySelector(".name")
    const nickname = newCharacter.querySelector(".nickname")
    const image = newCharacter.querySelector(".image img")
    
    // date: new Date(Date.now()).getFullYear() - d.getFullYear()

    
    name.innerHTML = character.name
    nickname.innerHTML = character.nickname

    image.setAttribute("src", character.image)
    // cambiar valor de atributo para texto alternativo:
    image.setAttribute("alt", character.name)


    // newCharacter.setAttribute("data-id", character.id)

    // return newCharacter
}



loadCharacter()




console.log("character");