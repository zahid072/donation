import { useState } from 'react'
import './App.css'
import { Button } from '@material-tailwind/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>button </Button>
    </>
  )
}

export default App
