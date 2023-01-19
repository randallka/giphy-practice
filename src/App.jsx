import { useState, useEffect } from 'react'
import './App.css'
import Form from './Components/Form/Form'
import Gif from './Components/Gif/Gif'
function App() {
const [gifState, setGifState] = useState()
const [toggleState, setToggleState] = useState(true)

useEffect(() => {
async function apiCall() { 
  let data = await fetch('https://api.giphy.com/v1/gifs/random?api_key=8yV83htzrcE32bJTq9kBgdkTi0BOfERA&tag=&rating=g')
  let jsonData =await data.json()
  setGifState(jsonData.data.images.fixed_height.url)
}
apiCall()
}, [toggleState])

function handleSubmit() { 
  setToggleState(!toggleState)
}
  return (
    <div className="App">
      <Form submit={handleSubmit}/>
      <Gif url={gifState}/>
    </div>
  )
}

export default App
