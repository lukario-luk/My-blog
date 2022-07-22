import React from 'react';
import styled from 'styled-components';
import profileLucas from '../assets/profile-Lucas.jpeg'
import { ContainerDefault } from '../Components/Container';
import Text from '../Components/Text'

const ProfileImg = styled.img`
  width:20vw;
  border-radius:50%;
  position:absolute;
  bottom:190px;
  border:5px solid #fcfffd;
  z-index:9999;
`

export default function Home() {
  return(
    <>
    <ContainerDefault 
      flexDirection={'row'}
    >
      <ProfileImg src={profileLucas}/>
      <Text margin={'2% 30%'} fontSize={'6vh'} color={'#2b2c28'} fontWeight={'600'} >Lucas de Souza Pinto</Text>
    </ContainerDefault>
    </>
  );
}

