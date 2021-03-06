import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <>
        <button onClick={props.action}>{props.text}</button>
        </>
    )
}



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]} 
      <br/>
      <span>has {votes[selected]} votes</span>
      <br/>
      <Button action={()=>setVotes(votes.map((x,i)=>{return x+(i===selected?1:0)}))} text="vote"/>
      <Button action={()=>setSelected(anecdotes.length * Math.random() | 0)} text="new anecdote" />
      <h1>Anecdote with most votes</h1>
     {anecdotes[votes.indexOf(Math.max(...votes))]} 
      <br/>
    <span>has {Math.max(...votes)} votes</span>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
