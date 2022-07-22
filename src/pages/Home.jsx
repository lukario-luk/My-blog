import React from 'react';
import styled from 'styled-components';
import profileLucas from '../assets/profile-Lucas.jpeg'

const ProfileImg = styled.img`
  width:20vw;
  border-radius:50%;
  position:relative;
  bottom:90px;
  border:5px solid #fcfffd;
`
const TitleName = styled.h2`
    margin-left:3vw;
    color:#f9a620;
    font-size:7vh;
    word-spacing: -0.55ch;
    font-family: 'Press Start 2P', cursive;
    font-style:italic;
    font-weight:400;
    letter-spacing:0px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    &::before{
      content:"//";
      letter-spacing:-20px;
      font-style:normal;
    }
    `

export default function Home() {
  return(
    <>
    <ProfileImg src={profileLucas}/>
    <TitleName>Lucas de Souza Pinto</TitleName>
    </>
  );
}

