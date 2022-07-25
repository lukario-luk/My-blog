import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import profileLucas from '../assets/profile-Lucas.jpeg'
import { ContainerDefault } from '../Components/Container';
import { FiureDefault } from '../Components/Figure';
import { FigcaptionDefault } from '../Components/Figcaption';
import { ContentDefault } from '../Components/Content'
import { RepositoryCardDefault } from '../Components/RepositoryCardDefault';
import { Anchor } from '../assets/Anchor';
import Text from '../Components/Text'
import Img from '../Components/Img'

export default function Home() {
  const [Repositorys, setRepositorys]=useState([])
  useEffect(()=>{
    axios.get(`https://api.github.com/users/lukario-luk/repos`).then((responci)=>{
      setRepositorys(responci.data)
    })
  },[])
  const MapRepository=()=>{
    return Repositorys.map(item=>(
      <Anchor key={item.id} href={item.html_url}><RepositoryCardDefault 
        width={'25vw'} 
        height={"10vw"}
        borderRadius={"13px"}
        bgColor={"#e4e4e4"}
      >
        <Text
          padding={"3%"}
          bgColor={"#2b2c28"}
          color={"#fff"}
          Size={"2.4vh"}
          Text
        >
          {item.name}
        </Text>
        <Text
          padding={"3%"}
          color={"#2b2c28"}
          Size={"2.4vh"}
          Text
        >
          
          {item.description}
        </Text>
        
        </RepositoryCardDefault>
        </Anchor>
    ))
  }
  return(
    <>
    <ContainerDefault 
      padding={'1% 0'}
    >
      <FiureDefault
        width={'15vw'}
        left={'40px'}
        position={'absolute'} 
        borderRadius={'50%'} 
        bgColor={'#fcfffd'}
        
      >
      <Img 
        width={"100%"} 
        border={'0.3vw solid #fcfffd'} 
        borderRadius={'50%'} 
        SRC={profileLucas}
        alt={'Foto de perfil do criador da pagina Lucas de souza Pinto.'} 
        />
        </FiureDefault>
      <FigcaptionDefault
        width={'100%'}
        padding={' 5% 0 8% 0'}
      >
        <Text  margin={'0 0 0 24%'} Size={'6vh'} color={'#2b2c28'} Weight={'600'} >Lucas de Souza Pinto</Text>
        <Text  margin={'0 0 0 24.2%'} Style={'italic'} Size={'4vh'} color={'#5c5c56'} Weight={'400'} >Web developer</Text>
      </FigcaptionDefault>
      <Text Size={'6vh'} color={'#2b2c28'} Weight={'600'}>Portifolio:</Text>
      <ContentDefault
        height={"260vh"}
        padding={"1%"}
        justifyContent={"space-around"}
        flexDirection={'row'}
        flex
      >
        {MapRepository()}
      </ContentDefault>
    </ContainerDefault>
    </>
  );
}

