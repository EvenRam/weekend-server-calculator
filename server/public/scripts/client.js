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
// need to create a variale for the response date ( calcuations)
let calcualationHistory =  response.data

// will only want the last item of the object array
let recentCalculation = calcualationHistory[calcualationHistory.length-1].result
console.log(recentCalculation)

// we want the most recent item of the recentCalcualtion displayed in html <h2>

document.getElementById('recentResult').innerHTML = `
         <h2> Calculation: ${recentCalculation}<h2>
         `

  //Render the entire calcuatation history: 
 
let historyCalcList = document.getElementById('renderResultHistory')

 // we need to loop throught getCalcHistory array of object to list and display in the section 

 for(let number of calcualationHistory)

historyCalcList.innerHTML +=`
       
         <li> 
         ${number.numOne} 
         ${number.operator}
          ${number.numTwo} 
          = ${number.result}</li>`



    })
    .catch((error) => {
        // Manages errors
            console.log('getCalcHistory failed:', error)


    })
    }

function userInputForCalc(event){
event.preventDefault()

//get the user number and operator inputs

let numOne = Number(document.getElementById("inputNumOne").value)
let numTwo = Number(document.getElementById("inputNumTwo").value)

let operator = "+"

// create an object that will be sent to the post route 

let doMath = {
 numOne: numOne,
 numTwo : numTwo,
 operator : operator
}

 console.log("do math", doMath)
}






OnReady()


