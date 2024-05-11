console.log('client.js is sourced!');

function OnReady(){
    getCalcHistory()
}

let getCalcHistory = () => {
    console.log("getCalcHistory() is working!")

axios({
    method: 'GET', // HTTP method
    url: '/calculations'
})
    .then((response) => {
        // Captures the response from server
console.log('response.data is:', response.data)


    })
    .catch((error) => {
        // Manages errors
            console.log('getCalcHistory failed:', error)


    })
    }





OnReady()




