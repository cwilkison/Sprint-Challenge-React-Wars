import React from 'react';
import './App.css';
import CardPage from "./CardPage";
import styled from "styled-components";



const HeaderContext = styled.div`
color: black;
margin:5% 0;
font-size:3rem;
font-family: sans-serif;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <HeaderContext>React Wars</HeaderContext>
      <CardPage/>
    </div>
  );
}

export default App;