import logo from "./logo.svg";
import "./App.css";
import styled from 'styled-components';
import { Navbar } from "./components/navbar";


const AppContainer = styled.div `
 width: 100%;
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: rgba(15, 15, 15, 1);
 color: #fff;

`;

const innerContiner = styled.div `
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 2em;

`;

const SomeContent = styled.h2`
 color: #fff;

`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <innerContiner>
        <SomeContent>Some Content</SomeContent>
      </innerContiner>
    </AppContainer>
    
  );
}

export default App;
