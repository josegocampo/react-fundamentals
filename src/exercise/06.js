// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

function UsernameForm({onSubmitUsername}) {

  const [ userName, setuserName] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitUsername(userName)
  }

  const handleChange = (e) => {
    const formName = e.target.value.toLowerCase()
    setuserName(formName)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" value={userName} onChange={handleChange}/>
      </div>
    <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
