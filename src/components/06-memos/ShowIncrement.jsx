import React from 'react'
import PropTypes from 'prop-types';

export const ShowIncrement = React.memo(({increment}) => {

  console.log('Me volví a llamar !');

  
  return (
    <button className='btn-siguiente'
            onClick={ () => {
                increment(5);
            }}
    >Incrementar</button>
  )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired,
}
