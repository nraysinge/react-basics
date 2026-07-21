import './App.css'

function App() {

  let name = "Mayur"

function handleClick(n) {
    console.log("clicked by JSX...", n)
  }

  let a = 10;
  let b = 3;

  let count = 0;

  const increase = () => {

    count++;
    status = true;
    console.log("count = ", count)
    console.log("status = ", status)
  }

  let digit = 35124;

  let cnt = 0;

  while (digit > 0) {
    cnt++;
    digit = Math.floor(digit / 10)
  }
 
  return (
    <div>
      <center>
      <h1>Hello From JSX</h1>
      <h2> Welcome in JSX....{name}</h2>

      <h4>sum = {a + b}</h4>
      <h4>diff = {a - b}</h4>
      <h4>mul = {a * b}</h4>
      <h4>div = {a / b}</h4>
      <h4>rem = {a % b}</h4>

      <h4>Digit = {digit}</h4>

        <h4>Count of Digit = {cnt}</h4>

        <br /> --------------------------------------------------------------- <br />

        <h3>Status : {status ? "Online" : "Offline"}</h3>

        <h2>Count = {count}</h2>
        <button onClick={increase}>Plus</button> <br /><br />

        <button onClick={() => handleClick(101)}>Delete</button>
      </center>
    </div>
  )
}

export default App






