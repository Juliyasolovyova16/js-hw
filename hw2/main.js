console.log("ex. 1:")
console.log(1 == 2)
console.log(1 != 2)
console.log(1 == 1)
console.log(1 != 1)
console.log("text" == 5)
console.log("text" == "text")
console.log(true == "true")
console.log(true == false)
console.log(false == 0)
console.log(false === 0)
console.log("" == false)
console.log("" !== false)
console.log(undefined === null)
console.log(undefined == null)
console.log(17 === true)
console.log("17" === true)
console.log({} === {})
console.log("ex. 2:")
let numberEven = prompt("please enter number")
console.log("Is number even?", numberEven%2 == 0)
console.log("ex. 3:")
let numberOdd = prompt("please enter number")
console.log("Is number2 odd?", numberOdd%2 == 1)
console.log("ex. 4:")
let num = 7
num += 2
num -= 3
num *= 9
console.log(num)
console.log("ex. 5:")
let c = "100"
console.log(typeof Number(c))
console.log(typeof(c/1))
console.log(typeof(c = +c))
console.log("ex. 6:")
let a = 7
let b = 3
let formulaL = (a + b)*(a - b)
let formulaR = a*a - b*b
console.log(`${formulaL} = ${formulaR}`)
console.log("ex. 7:")
let numberFirst = Number(prompt("please enter first number"))
let numberSecond = Number(prompt("please enter second number"))
let numberThird = Number(prompt("please enter third number"))
alert((numberFirst += 10) + (numberSecond += 10) + (numberThird += 10))
console.log("ex. 8:")
let k = 4
let m = 8
let l = 11
console.log("Does triangle exist?", k + m > l && m + l > k && k + l > m)
console.log("ex. 9:")
let x = 2
let y = 7
let formulaL2 = (x + y) ** 3
let formulaR2 = x ** 3 + 3 * x ** 2 * y + 3 * x * y ** 2 + y ** 3
console.log(`${formulaL2} = ${formulaR2}`)













