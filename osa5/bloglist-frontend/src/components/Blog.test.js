import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
//import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Test Author',
    likes: 0,
    user: '603cf19ca6be945dc8791c50'
  }

  const component = render(
    <Blog blog={blog} doLike={()=>console.log("liked")}/>
  )
  
  //const p = component.container.querySelector('p')
  //console.log(prettyDOM(p))

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})


test('does not render likes', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Test Author',
    likes: 0,
    user: '603cf19ca6be945dc8791c50'
  }

  const component = render(
    <Blog blog={blog} doLike={()=>console.log("liked")}/>
  )
  
  //const p = component.container.querySelector('p')
  //console.log(prettyDOM(p))

  expect(component.container.querySelector('.details')).toHaveStyle('display: none')
})

test('renders likes after show details button pressed', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Test Author',
    likes: 0,
    user: '603cf19ca6be945dc8791c50'
  }

  const component = render(
    <Blog blog={blog} doLike={()=>console.log("liked")}/>
  )

//component.debug()

const button = component.container.querySelector('button')
 fireEvent.click(button) 
  //const p = component.container.querySelector('p')
  //console.log(prettyDOM(p))

  expect(component.container.querySelector('.details')).not.toHaveStyle('display: none')
})



test('like function called twice by clicking like button twice', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Test Author',
    likes: 0,
    user: '603cf19ca6be945dc8791c50'
  }
const mockHandler = jest.fn()
  const component = render(
    <Blog blog={blog} doLike={mockHandler}/>
  )

component.debug()

const button = component.container.querySelector('button')
 fireEvent.click(button) 



const likeButton = component.getByText('like')
 fireEvent.click(likeButton) 
 fireEvent.click(likeButton) 
  //const p = component.container.querySelector('p')
  //console.log(prettyDOM(p))

expect(mockHandler.mock.calls).toHaveLength(2)
})
