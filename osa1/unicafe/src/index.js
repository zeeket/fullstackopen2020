import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.hc}>
    {props.text}
    </button>
)

const StatisticLine = (props) => (
    <p>{props.text} {props.value}</p>
)

const Statistics = (props) => {
    let all = props.good + props.neutral + props.bad;
    let average = (props.good - props.bad) / (all?all:1);
    let positive = (props.good / (all?all:1)) * 100+"%";
    
    return all?(
        <>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive}/>
        </>
    ):(<p>No Feedback given</p>)
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
        <h1>give feedback</h1>
        <Button hc={()=>setGood(good+1)} text="good"/ >
        <Button hc={()=>setNeutral(neutral+1)} text="neutral"/ >
        <Button hc={()=>setBad(bad+1)} text="bad"/ >
        <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>

    )
}

ReactDOM.render(<App />, 
    document.getElementById('root')
)
