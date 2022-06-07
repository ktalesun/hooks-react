import React, { useState } from 'react'
import { MultiplesCustomHooks } from '../03-examples/MultiplesCustomHooks'

import '../03-examples/styles.css'

export const UseRefRealCase = () => {

    const [show, setShow] = useState(false)

  return (
    <div>
        <h1 className='title text-center mt-2'>UseRef Real Case</h1>
        <hr />

        { show && <MultiplesCustomHooks /> }

        <button className='btn-siguiente'
                onClick= { ()=> {
                    setShow(
                        !show
                    )
                }}
        >Hide / Unhide</button>

    </div>
  )
}
