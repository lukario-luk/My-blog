import React from 'react'
import { useState } from 'react'
import {ContainerDefault} from '../Components/Container'
import {SectionDefault} from '../Components/Section'
import {ContentDefault} from '../Components/Content'
import { ImgDefault } from '../Components/Img/styles'
import { CiteDefault } from '../Components/Cite'
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
    {id:1,icon:iconODS1, Color:"#e5243b", NameODS:"Erradicação da pobreza", objectiveODS:"Erradicar a pobreza em todas as formas e em todos os lugares", solutionODS:"Podemos devolver a dignidade as pessoas em situação de rua. No meu bairro já existem pessoas e igrejas com iniciativa  de juntar para doar roupas, alimentos, itens de higiene pessoal, porem essas iniciativas isoladas, com uma ação conjunta e bem organizada teria-se mais condições de ajudar aqueles que precisão.",},
    {id:2,icon:iconODS2, Color:"#dda63a", NameODS:"Fome zero e agricultura sustentável", objectiveODS:"Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável", mySolutionODS:"Comunicação é essencial para algo dar certo, em minhas conversas com os meus vizinhos vejo que muitos tem a vontade de fazer uma horta sustentável local, mas nunca ouve iniciativa por motivos de desunião. ",},
    {id:4,icon:iconODS4, Color:"#c5192d", NameODS:"Educação de qualidade", objectiveODS:"Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos", mySolutionODS:"Divulgar cursos no Cais e nos comercios locais.",},
    {id:8,icon:iconODS8, Color:"#a21942", NameODS:"Trabalho decente e crescimento econômico", objectiveODS:"Promover o crescimento econômico inclusivo e sustentável, o emprego pleno e produtivo e o trabalho digno para todos", mySolutionODS:"Conectar as ortas organicas locais ao comercio local.",},
    {id:9,icon:iconODS9, Color:"#fd6925", NameODS:"Indústria, inovação e infraestrutura", objectiveODS:"Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação", mySolutionODS:"Criar uma campanha de divulgação dos projetos de universidades como politica publica.",}
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
                bgColor={item.Color} 
                backgroundImage={item.icon} 
                bgSize={'30%'} 
                bgRepeat={'no-repeat'} 
                bgPosition={'90% center'}
              >
                <Text Size={'2.5vh'} Weight={'400'} > Objetivo de Desenvolvimento Sustentável</Text>
                <Text Size={'10vh'} Weight={'500'} >{item.id}</Text>
                <Text width={'50%'} Size={'6vh'} Weight={'600'} >{item.NameODS}</Text>
                <Text width={'50%'} Size={'2.5vh'} Weight={'400'} >{item.objectiveODS}</Text>
              </ContentDefault>
              <ContentDefault
                width={'100%'}
                padding={'3% 1%'}
                flexDirection={'column'}
                justifyContent={'center'}
              >
                <Text 
                  Size={'3vh'} 
                  color={'#2b2c28'} 
                  Weight={'600'}
                >
                   O que meu bairro pode fazer nesse objetivo?</Text>
                <Text margin={'2% 0'} Size={'2.5vh'} color={'#2b2c28'} Weight={'400'} >{item.mySolutionODS}</Text>
              </ContentDefault>
            </ContainerDefault>
    )))
  }
  return (
    <>
    <ContainerDefault>
      <SectionDefault width={'100%'} flexDirection={'column'} >
        
      
        <Text margin={'2% 1%'} Size={'6vh'} Weight={'600'} color={'#2b2c28'}>Os Objetivos de Desenvolvimento Sustentável no Brasil</Text>
        <Text margin={'0 1%'} Size={'2.5vh'} Weight={'400'} color={'#2b2c28'}>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</Text>
        <Text margin={'1% 1%'} Size={'2.5vh'} Weight={'400'} color={'#2b2c28'}>Todos temos como contribuir com um mundo melhor e tudo começa com uma ideia que se torna um sonho, ao compartilhar podemos dar vida a esses sonhos de um mundo melhor</Text>
        <CiteDefault width={'70vw'} display={'block'} margin={'1% 1%'} >
          <Text width={'100%'} Size={'3vh'} Weight={'400'} color={'#2b2c28'}>"Sonho que se sonha só, é só um sonho que se sonha só, mas sonho que se sonha juntos é realidade. "</Text>
          <Text margin={'0.2% 0 0.2% 80%'} Size={'2.5vh'} Weight={'400'} color={'#2b2c28'}>— Raul seixas</Text>
        </CiteDefault>
      </SectionDefault>
      <SectionDefault flexDirection={"row"}>

        <ContentDefault width={'10.5%'} height={"93vh"} padding={"1vw 0.01vw"} flexDirection={'column'} bgColor={"#f2f3fd"} >
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