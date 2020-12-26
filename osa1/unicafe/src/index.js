import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.hc}>
        {props.text}
    </button>
)

const Counter = (props) => (
    <p>{props.text} {props.value}</p>
)

const getDivisor = all => {
    if(Math.abs(all)>0){
        console.log("math abs is ",Math.abs(all))
    }
  return Math.abs(all)>0 ? all:1;
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const average = (good-bad)/(all?all:1)
  const positive = (good/(all?all:1))*100+"%"

  return (
    <div>
      <h1>give feedback</h1>
      <Button hc={()=>setGood(good+1)} text="good"/ >
      <Button hc={()=>setNeutral(neutral+1)} text="neutral"/ >
      <Button hc={()=>setBad(bad+1)} text="bad"/ >
      <Counter text="good" value={good}/>
      <Counter text="neutral" value={neutral}/>
      <Counter text="bad" value={bad}/>
      <Counter text="all" value={all}/>
      <Counter text="average" value={average}/>
      <Counter text="positive" value={positive}/>
    </div>

  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
