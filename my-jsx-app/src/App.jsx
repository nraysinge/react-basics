import './App.css'

function App() {

  let name = 'Mayur'
  let num1= 10
  let num2= 20
  let digit=2335
let cnt= 0
while (digit > 0) {
  cnt++
  digit = Math.floor(digit / 10)
}
  return (
    <>
    <center>
      <h1>Hello from JSX App</h1>
      <h2>Welcome...{name}</h2>
      <h3> Sum = {num1 + num2}</h3>
      <h3> diff = {num1 - num2}</h3>
      <h3> mul = {num1 * num2}</h3>
      <h3> div = {num1 / num2}</h3>
      <h3> rim = {num1 % num2}</h3>

      <h3> digit = {digit}</h3>
      <h3> cnt = {cnt}</h3>
      </center>
    </>
  )
}

export default App
