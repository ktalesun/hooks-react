import React, { useContext } from 'react'
import { StyledTitle } from '../StyledComponents/StyledTitle'
import { UserContext } from './userContext'

export const HomeScreen = () => {

  const {user, setUser} = useContext(UserContext)


  return (
    <div>
        <h1>HomeScreen</h1>
        <hr />

        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>

        <StyledTitle />
    
    </div>
  )
}
