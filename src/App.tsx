import React, { useState , useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Loading } from "./components/Loading";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Header from "./pages/Header";
import Projects from "./pages/Projects";
import GlobalStyle from "./styles/global";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
  
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <Container>
 
      <BrowserRouter>
      <Header />
      <GlobalStyle />
      <About />
        <Projects/>
      <Experience/>
      </BrowserRouter>
  
    </Container>
  );
};

const Container = styled.div`
 background:black;
`;

export default App;






