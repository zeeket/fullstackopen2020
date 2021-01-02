import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <>
        <h1>{props.course}!</h1>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
        {props.parts.map((part) => 
            <Part name = {part.name} exercises = {part.exercises} />
        )}
            </div>
        )
        }

        const Part = (props) => {
            return (
                <>
                <p>{props.name} {props.exercises}</p>
                </>
            )
        }

        const Total = (props) => {
            const sumTotal = props.parts.reduce((totalSum, part) => totalSum + part.exercises, 0);
            return (
                <>
                <p>Number of exercises {sumTotal}</p>
                </>
            )
        }

        const App = () => {
            const course = {
                name: 'Half Stack application development',
                id: 1,
                parts : [
                    {
                        name: 'Fundamentals of React',
                        exercises: 10,
                        id: 1
                    },
                    {
                        name: 'Using props to pass data',
                        exercises: 7,
                        id:2
                    },
                    {
                        name: 'State of a component',
                        exercises: 14,
                        id:3
                    }
                ]
            }
            return (
                <div>
                <Header course={course.name} />
                <Content parts={course.parts} />
                <Total parts={course.parts}/>
                </div>
            )
        }

        ReactDOM.render(<App />, document.getElementById('root'))
