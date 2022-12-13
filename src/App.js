import React from 'react';
import './App.css';
import { originals,action,trending,horror,comedy,romance,documentaries } from './urls.js';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Navbar/NavBar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <>
    <NavBar />
    <Banner />
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={trending} title='Action' isSmall/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={horror} title='Action' isSmall/>
    <RowPost url={comedy} title='Action' isSmall/>
    <RowPost url={romance} title='Action' isSmall/>
    <RowPost url={documentaries} title='Action' isSmall/>

    </>
  );
}

export default App;
