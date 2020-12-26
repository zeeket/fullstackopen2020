import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    return (
        <div>
        <p>
        Hello {props.name}, you are {props.age} years old
        </p>
        </div>
    )
}

const App = (props) => {
    const [ counter, setCounter ] = useState(0)
    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)
    const now = new Date()
    const a = 10
    const b = 20
    const nimi = 'Pekka'
    const ika = 10

    return (
        <div>
        <p>Hello world, it is {now.toString()}</p>
        <p>
        {a} plus {b} is {a + b}
        </p>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={nimi} age={ika} />
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>
        plus
        </button>
        <button onClick={() => setCounter(0)}> 
        zero
        </button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
