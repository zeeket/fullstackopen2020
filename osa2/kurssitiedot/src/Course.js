
import React from 'react'

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
            <Part key = {part.id} name = {part.name} exercises = {part.exercises} />
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

const Course = ({ course }) => {
  return (
                <div>
                <Header course={course.name} />
                <Content parts={course.parts} />
                <Total parts={course.parts}/>
                </div>
  )
}
export default Course
