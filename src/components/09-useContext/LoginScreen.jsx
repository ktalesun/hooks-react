import React, { useContext } from 'react'
import { UserContext } from './userContext'

import '../03-examples/styles.css';

export const LoginScreen = () => {

	const {user ,setUser} = useContext(UserContext)

	const userNew = {
		id: 123,
		name: 'Kevin'
	}

    return (
      <div>
		<h1>LoginScreen</h1>
		<hr />

		<button className='btn-siguiente'
				onClick={() => {
					setUser({
						...userNew
					})
				}}
		>Set User</button>



      </div>
    )
}
