const apiUrl = "https://breakingbadapi.com/api/"
//obtain data

function getData({
    endpoint,
    displayFunction,
    currentPage,
    pageSize
}) {

    // // send req to API
    // if( ! pageSize ) {
    //     pageSize = 5
    // }
    
    // if( ! currentPage ) {
    //     currentPage = 0
    // }


    // let queryString = "?"
    // queryString += "limit=" + pageSize
    // queryString += "&"
    // queryString += "offset=" + (
    //     pageSize * currentPage
    // )

    let url = apiUrl + endpoint

    if( pageSize ) {
    
        const offset = pageSize * currentPage
        const queryString = `?limit=${pageSize}&offset=${offset}`

        url += queryString

    }
    
    const request = fetch( url )

    request.then(function (response) {

        response.json().then(function (data) {

            displayFunction(data)
            
        })
    })

}