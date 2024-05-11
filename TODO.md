                       ** SERVER SIDE **

* All mathematical logic **must** be implemented on the server.



* Calculation history data **must** be stored on the server.




                        ** CLIENT SIDE **

* The client-side code **must** be able to:

  * Ask the server for its calculation history
    - using a `GET '/calculations'` request
        -- get the soultions and put them in the 

       `let  historyCalc = document.getElementById('resultHistory')`
       `historyCalc.innerhtml =`
       
     `<section>(list of calculation results goes here)</section>`

* create a render function
`let render"name variable" = ("enter variable with no quotes") => {}`
    - Render it appropriately on the DOM.
    

  * Obtain "new calculation" data via user input
    - send it to the server.
        *   `let newCalculation = document.getElementById('recentResult')`

       `historyCalc.innerhtml =`

         `<section>(most recent calculation result here)</section>`
