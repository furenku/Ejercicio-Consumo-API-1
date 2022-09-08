const apiUrl = "https://breakingbadapi.com/api/"
//obtain data

function getData({
    endpoint,
    displayFunction,
    pageNum,
    elementsPerPage
}) {
    // send req to API
    if( ! elementsPerPage ) {
        elementsPerPage = 5
    }
    
    if( ! pageNum ) {
        pageNum = 0
    }


    // let queryString = "?"
    // queryString += "limit=" + elementsPerPage
    // queryString += "&"
    // queryString += "offset=" + (
    //     elementsPerPage * pageNum
    // )

    const offset = elementsPerPage * pageNum
    const queryString = `?limit=${elementsPerPage}&offset=${offset}`

    const request = fetch(
        apiUrl + endpoint + queryString
    )

    request.then(function (response) {

        response.json().then(function (data) {

            displayFunction(data)
            
        })
    })

}