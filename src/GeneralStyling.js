import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100vh;
    padding:0.5% 2%;
    background-color:#fcfffd;
    overflow:auto;
  &::-webkit-scrollbar {
  width: 10px;
  position: fixed;
}
&::-webkit-scrollbar-track {
  border-radius: 100px;
}
&::-webkit-scrollbar-thumb {
  background-color: #606060; 
  border-radius: 100px;
}
&::-webkit-scrollbar-thumb:hover {
  background-color: #2b2c28; 
}

`;
export const Header = styled.header`
    width:100%;
    height:280px;
    border-radius:10px;
    display:flex;
    justify-content:space-between;
    background-image:url(${({wallpaper})=>wallpaper});
    background-size:100%;
    background-repeat:no-repeat;
    background-position-z:1;
    z-index:1;
    position:relative;
`
export const LogoTitle = styled.h2`
    margin:1.5vw 2vw;
    color:#f9a620;
    font-size:4vh;
    word-spacing: -0.55ch;
    font-family: 'Press Start 2P', cursive;
    font-weight:400;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #db8802;
`

export const NavBar = styled.nav`
    max-height:4.5vw;
    display:flex;
    position:fixed;
    right:3%;
`
export const Ul = styled.ul`
    border-radius:0 0 0 100px;
    padding:0 1vw;
    display:flex;
    align-items:center;
    background-color:rgba(46, 46, 46, 0.7);
`
export const LI = styled.li`
    margin:0.1vw 1vw;
    padding:0.5vw 1vw;
    border-radius:30px;
    background-color:rgb(68, 68, 68,0.5);
    list-style:none;
    text-align:center;
    font-size:3vh;
    a{
        text-shadow:1px 0px 2px rgb(30, 70, 0,0.5);
        color:#ebf2fa;
        text-decoration:none;
    }
    `
    export const Bttn = styled.button`
        width:4.5vw;
        height:4.5vw;
        border:none;
        border-radius:50%;
        background-color:#131515;
        color:#ebf2fa;
        font-size:150%;
        cursor: pointer;
    `
