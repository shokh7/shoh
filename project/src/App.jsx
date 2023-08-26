import { useState } from 'react'
import './App.css'


function App() {

  const [open, setOpen] = useState(false)
  const [content, setContent] = useState({
    textContent: '',
    buttonContent: ''
  })
  function openMenu(key) {
    if (key === 'run') {
      setContent({
        textContent: 'Please don\'t run!',
        buttonContent: 'Close'
      })
    } else if (key === 'search') {
      setContent({
        textContent: 'Whoa! You found me!',
        buttonContent: 'Hide back'
      })
    }
    setOpen(true)
  }

  function closeMenu() {
    setOpen(false)
  }


  return (
    <div className="wrapper">
      <div className="box">
        <button className="search__btn" onClick={() => openMenu('search')} >Search</button>
        <button className="search__btn" onClick={() => openMenu('run')} >Run</button>
      </div>
      <div className="search__menu hide"></div>
      <div className={open ? 'run__menu show' : "run__menu hide"}>
        <h2 className="menu__title" >{content.textContent}</h2>
        <button className="search__btn" onClick={() => closeMenu()}>{content.buttonContent}</button>
      </div>
    </div>
  )
}

export default App

