import { useState } from "react"
import "./App.css"
import { useRef } from "react"

const App = () => {


  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState([])
  const inputRef = useRef(null)

  // stop rendering page  

  const stopRendering = (e) => {

    e.preventDefault()

  }

  // add new item handler 

  const addNewItem = () => {
    if (!inputValue) {
      return false;
    }
    else if (inputValue.length > 2) {
      setItems(previtems => [...previtems, inputValue])
      setInputValue("")
    }

  }

  // Remove item handler
  const removeItemFromList = (indexToRemove) => {
    const updatedItems = items.filter((_, index) => index !== indexToRemove);
    setItems(updatedItems);
  };


  return (
    <>
      <h1 className="todo_title" > Todo App </h1>
      <hr />

      <form onSubmit={(e) => stopRendering(e)} className="form">
        <input ref={inputRef} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value.trim())} />
        <button onClick={addNewItem} > add Item </button>
      </form>

      <section className="item__box">

        <ul className="item__list">
          {items.map((item, index) => {
            return (
              <div className="items" key={index} >
                <li> {item} </li>
                <button onClick={() => removeItemFromList(index)} >X</button>
              </div>
            )
          })}
        </ul>
      </section>


    </>
  )
}

export default App