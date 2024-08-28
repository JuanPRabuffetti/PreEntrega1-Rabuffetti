import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListCointainer from './components/ItemListContainer/ItemListCointainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListCointainer greeting="My Orders"/>
    </>
  );
}

export default App;