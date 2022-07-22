import React from 'react'
import { useState } from 'react'
import {ContainerDefault} from '../Components/Container'
import {SectionDefault} from '../Components/Section'
import {ContentDefault} from '../Components/Content'
import { ImgDefault } from '../Components/Img/styles'
import iconODS1 from "../assets/ODSs-cards/icon-ODS1.png"
import iconODS2 from "../assets/ODSs-cards/icon-ODS2.png"
import iconODS4 from "../assets/ODSs-cards/icon-ODS4.png"
import iconODS8 from "../assets/ODSs-cards/icon-ODS8.png"
import iconODS9 from "../assets/ODSs-cards/icon-ODS9.png"
import ODS1 from  "../assets/ODSs-cards/ODS-1.svg"
import ODS2 from  "../assets/ODSs-cards/ODS-2.svg"
import ODS4 from  "../assets/ODSs-cards/ODS-4.svg"
import ODS8 from  "../assets/ODSs-cards/ODS-8.svg"
import ODS9 from  "../assets/ODSs-cards/ODS-9.svg"
import Text from '../Components/Text'
export default function ForBetterWorld() {
  const [modal,setModal]=useState(Number(0))
  const listODSCards= [
    {id:1,img:ODS1},
    {id:2,img:ODS2},
    {id:4,img:ODS4},
    {id:8,img:ODS8},
    {id:9,img:ODS9}
  ]
  const listODSInfoCardsModal=[
    {id:1,icon:iconODS1, Color:"#e5243b", NameODS:"Erradicação da pobreza", objectiveODS:"Erradicar a pobreza em todas as formas e em todos os lugares", solutionODS:"",},
    {id:2,icon:iconODS2, Color:"#dda63a", NameODS:"Fome zero e agricultura sustentável", objectiveODS:"Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável", mySolutionODS:"",},
    {id:4,icon:iconODS4, Color:"#c5192d", NameODS:"Educação de qualidade", objectiveODS:"Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos", mySolutionODS:"",},
    {id:8,icon:iconODS8, Color:"#a21942", NameODS:"Trabalho decente e crescimento econômico", objectiveODS:"Promover o crescimento econômico inclusivo e sustentável, o emprego pleno e produtivo e o trabalho digno para todos", mySolutionODS:"",},
    {id:9,icon:iconODS9, Color:"#fd6925", NameODS:"Indústria, inovação e infraestrutura", objectiveODS:"Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação", mySolutionODS:"",}
  ]
  const MapODSCards = () =>{
    return(listODSCards.map(item =>(
          <ImgDefault onClick={()=> setModal(modal!=item.id? item.id: 0)} width={"8vw"} margin={"0.3vw 0.5vw"} key={item.id} src={item.img} />
    )))
  }
   const MapODSInfoCardsModal = () =>{
    return(listODSInfoCardsModal.filter(item=>item.id == modal).map(item =>(
          <ContainerDefault padding={"1.5% 4% 0"}>
              <ContentDefault
                width={'100%'}
                height={"53vh"}
                padding={'0 5%'}
                borderRadius={'10px'}
                flexDirection={'column'}
                justifyContent={'center'}
                backgroundColor={item.Color} 
                backgroundImage={item.icon} 
                bgSize={'30%'} 
                bgRepeat={'no-repeat'} 
                bgPosition={'90% center'}
              >
                <Text fontSize={'2.5vh'} fontWeight={'400'} > Objetivo de Desenvolvimento Sustentável</Text>
                <Text fontSize={'10vh'} fontWeight={'400'} >{item.id}</Text>
                <Text width={'50%'} fontSize={'6vh'} fontWeight={'600'} >{item.NameODS}</Text>
                <Text width={'50%'} fontSize={'2.5vh'} fontWeight={'400'} >{item.objectiveODS}</Text>
              </ContentDefault>
              <ContentDefault
                width={'100%'}
                padding={'3% 1%'}
                flexDirection={'column'}
                justifyContent={'center'}
              >
                <Text fontSize={'3vh'} color={'#2b2c28'} fontWeight={'600'}>Objetivo 2. Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável</Text>
                <Text margin={'2% 0'} fontSize={'2.5vh'} color={'#2b2c28'} fontWeight={'400'} >{item.mySolutionODS}</Text>
              </ContentDefault>
            </ContainerDefault>
    )))
  }
  return (
    <>
    <ContainerDefault>
      <SectionDefault width={'100%'} flexDirection={'column'} >
        <Text fontSize={'3vh'} fontWeight={'600'} color={'#2b2c28'}>Como as Nações Unidas apoiam os Objetivos de Desenvolvimento Sustentável no Brasil</Text>
        <Text fontSize={'2.5vh'} fontWeight={'400'} color={'#2b2c28'}>A ONU e seus parceiros no Brasil estão trabalhando para atingir os Objetivos de Desenvolvimento Sustentável. São 17 objetivos ambiciosos e interconectados que abordam os principais desafios de desenvolvimento enfrentados por pessoas no Brasil e no mundo.</Text>
        <Text fontSize={'3vh'} fontWeight={'600'} color={'#2b2c28'}>Os Objetivos de Desenvolvimento Sustentável no Brasil</Text>
        <Text fontSize={'2.5vh'} fontWeight={'400'} color={'#2b2c28'}>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</Text>

      </SectionDefault>
      <SectionDefault flexDirection={"row"}>

        <ContentDefault width={'10.5%'} height={"93vh"} padding={"1vw 0.01vw"} flexDirection={'column'} backgroundColor={"#f2f3fd"} >
          {MapODSCards()}
        </ContentDefault>
        <ContentDefault 
          width={'100%'} 
          flexDirection={'column'}
        >
        {MapODSInfoCardsModal()}
        </ContentDefault>
      </SectionDefault>
    </ContainerDefault>  
    </>
    );
}