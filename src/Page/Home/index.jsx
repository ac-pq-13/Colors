import { useState } from 'react'

const Home = () => {

  const [show, setShow ] = useState(0)
  const handleshow = (num) => {
    setShow(num)
  }

  return (
    <div >
      <h1>Cubos</h1>
      <button onClick={()=>handleshow(1)}>red</button>
      <button onClick={()=>handleshow(2)}>blue</button>
      <button onClick={()=>handleshow(3)}>yellow</button>
      <button onClick={()=>handleshow(4)}>X</button>
      <br/><br/>
      {
        show ===1 && (
          <div id="red"></div>
        )
      }
      {
        show ===2 && (
          <div id="blue"></div>
        )
      }
            {
        show ===3 && (
          <div id="yellow"></div>
        )
      }

    </div>
  )
}

export default Home



