                       ** SERVER SIDE **

* All mathematical logic **must** be implemented on the server.

* Create a `GET '/calculations'` route that will send the `calculations` array back to the client. 
* Calculation history data **must** be stored on the server.


<!-- cardcoded data. Don't forget to delete

  * ```
      let calculations = [
        {
          numOne: 3,
          numTwo: 5,
          operator: '+',
          result: 8
        },
        {
          numOne: 11,
          numTwo: 7,
          operator: '-',
          result: 4
        }
         {
          numOne: 10,
          numTwo: 7,
          operator: '*',
          result: 70
        }
        {
          numOne: 60,
          numTwo: 2,
          operator: '/',
          result: 30
        }
    
      ]
    ```


* Create a `POST '/calculations` route that will "do the math" and obtain the correct `result` value. It must be able to handle addition, subtraction, multiplication, and division.
  * For example, if the `POST` route receives this data:
    * `{ numOne: 25, numTwo: 10, operator: '+' }`

 -- for loop?

  * It should "do the math," then push this object into the server-side `calculations` array:
    * `{ numOne: 25, numTwo: 10, operator: '+', result: 35 }`
  * After this successful calculation, the `POST` route must send status `201` back to the client.
  * 🔥 Note: **Do not use** the built-in JS `eval()` function. It's incredibly dangerous to obtain user input and *execute it as code*! -->







                     ***** CLIENT SIDE *****

* The client-side code **must** be able to:
  * Ask the server for its calculation history, then render it appropriately on the DOM.

  // the onReady will load the calcuation historty right away when the page loads.

onReady(
 the calcuation function goes here
)

// write a function that will recieve the data from the sever get end pt 

`getCalcHistory = () => {
    `console.log("getCalcHistory is working!")`

 axios({
        method: 'GET', // HTTP method
        url: '/calculations'
    })
        .then((response) => {
            // Captures the response from server
- Remeber to do console logs:
    `console.logs('response.data is:', response.data)`
    
        })
        .catch((error) => {
            // Manages errors
                `console.logs('getCalcHistory failed:', error)`

        })

***   * Update this list when a new calculation is made.

Inside the `<section data-testid="recentResult">` element, display the most recent calculation **result**.
`recentCalculation = document.getElementById('recentResult')`

       `.innerhtml =`

         `<h2></h2>`

//Render the entire calcuatation history:
 // we need to loop throught getCalcHistory array of object to list and display in the section

  `let historyCalcList = document.getElementById('renderResultHistory').innerhtml +=`
       
     `<li> ${} ${} ${} = ${} </li>`

}

** HTML
*  inside the form
    -user can input values and select operater
    - each operater is represtend by a button  
        -- create onsubmit for each input in HTML
            `<onSubmit="inputOne(event)">`

*** CLIENT  **
-- get the user inputs from the number and operator 
--send to post request to calcualations 
    -- should look like this:   
         * `{ numOne: 25, numTwo: 10, operator: '+' }`
--when the user clicks on he 'c' button, clear inputs 

function  (event){
    event.preventDefault
let numOne = numOne
let numTwo = numTwo
Let Operator = operator 
}

            
