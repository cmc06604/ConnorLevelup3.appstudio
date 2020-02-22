
function carLoanPayment(p, i, n) {
  return p * i / (1 - (Math.pow(1/(1 + i), n)));
  
  }
function homeLoanPayment(p, i, n) {
  return p * i / (1 - (Math.pow(1/(1 + i), n)));
  }
  
// Declares varibles for the loop
let newLoan = "Yes"
let choice = " "

// Declares Varibles for the car loan 
let principleCar = " "
let interestCar = " "
let monthCar = " "
let interestCarFinal = " "
let carLoanAmount = " "

// Declares Varibles for the car loan
let principleHome = " "
let interestHome = " "
let yearHome = " "
let interestHomeFinal = " "
let yearHomeFinal = " "
let homeLoanAmount = " "
let finalLoop = " "
  
while (newLoan == "Yes") {
  
    choice = prompt("Would you like a Home loan or a Car loan?")

   if (choice =='Car' || choice == 'car') {

      principleCar = parseInt(prompt(" Enter the principle amount i.e 30000"))
      interestCar = parseFloat(prompt("Enter the interest in decimal form ex.3.2"))
      monthCar = parseInt(prompt("Enter the amount of months of your loan ex. 60"))
      interestCarFinal = interestCar / 1200

      carLoanAmount = carLoanPayment(principleCar, interestCarFinal, monthCar)
      alert(`A car loan for $${principleCar}  over ${monthCar} months at ${interestCar}% interest would have a monthly payment of $${carLoanAmount}`) 


    } else if (choice =='Home' || choice == 'home') {
  
          principleHome = parseInt(prompt(" Enter the principle amount i.e 200000"))
          interestHome = parseFloat(prompt("Enter the interest in decimal form ex.5.7"))
          yearHome = parseInt(prompt("Enter the amount of years of your loan ex. 30"))
          interestHomeFinal = interestHome / 1200
          yearHomeFinal = yearHome * 12

          homeLoanAmount = homeLoanPayment(principleHome, interestHomeFinal, yearHomeFinal)


          alert(`A home loan for $${principleHome}  over ${yearHome} years at ${interestHome}% interest would have a monthly payment of $${homeLoanAmount}`) 

     } else 
                  alert("Unknown error please check you spelling")
 
        newLoan = prompt('Do you want to calculate a loan? ex. Yes or No')
        
        
} //end of while loop
alert("Have a good day")

