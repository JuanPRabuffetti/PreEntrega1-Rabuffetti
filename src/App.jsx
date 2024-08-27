import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListCointainer from './components/ItemListContainer/ItemListCointainer'
//import CartWidgets from './components/CartWidget/CartWidget'
const App = () => {
  return (
    <>
    
    <NavBar/>
    <ItemListCointainer greeting="My Orders"/>
    </>
  )
}

export default App