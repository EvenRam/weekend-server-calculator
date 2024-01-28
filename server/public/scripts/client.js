console.log('client.js is sourced!');

function onReady(){

}

onReady()


function getCalculations(){

    axios({
        method:'GET',
        url:'/calculations'
    })

.then(function(response){
console.log( "Request to GET/calculations succeeded with status:", response.status);
console.log("Response payload:", response.data);

let calculationsFromTheServer = response.data
renderToDOM(calculationsFromTheServer);

})

.catch(function (error){
    alert('Request to GET / calculation failed. Try again later.');
console.log('Request to GET/ calculation failed:', error);

    
});



}
