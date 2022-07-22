import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ForBetterWorld from  './pages/ForBetterWorld'
import { createGlobalStyle } from "styled-components";
import * as S from './GeneralStyling'
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`
const B = "https://i.pinimg.com/originals/a6/36/1d/a6361d7827f4ef58ae749ec0940adf91.png"


const App=()=> {
  const [NavbarDisplay, setNavbarDisplay] = useState(true)
  return (
    <>
    <S.Container>
    <GlobalStyle/>
      
      <Router>
      <S.Header wallpaper={B}>
          <S.LogoTitle>My Blog</S.LogoTitle>
          <S.NavBar>
          {NavbarDisplay &&( <S.Ul>
            <S.LI><Link to="/" >Home</Link></S.LI>
              <S.LI><Link to="/ForBetterWorld" >For Better World</Link></S.LI>
            </S.Ul>)
            }
          <S.Bttn onClick={()=>{setNavbarDisplay(!NavbarDisplay)}}>☰</S.Bttn>
          </S.NavBar>
      </S.Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ForBetterWorld" element={<ForBetterWorld />} />
      </Routes>
      </Router>
    </S.Container>
    </>
  );
}

export default App;
