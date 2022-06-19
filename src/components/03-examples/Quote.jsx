import React from 'react'

export const Quote = ({quote, author}) => {
  return (
    <blockquote className='blockquote-text'>
      <p className='blockquote-paragraph'>{quote}</p>
      <footer className='blockquote-footer'>{author}</footer>
    </blockquote>
  )
}
