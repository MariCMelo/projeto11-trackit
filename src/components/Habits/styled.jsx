import styled from "styled-components"

export const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca';
    font-size: 24px;
    text-align: initial;
    color: #293845;
    background-color: #E5E5E5;
    padding: 5px 20px 40px 20px;
    box-sizing: border-box;
    position: absolute;
    h1{
        font-size: 23px;
        font-weight: normal;
        color: #126BA5;
        margin-bottom: 0px;
    }
    P{
        font-size: 18px;
        margin-top: 10px;
    }
    button{
        width: 40px;
        height: 35px;
        color: white;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        margin-left:auto;
        position: relative;
        top: -30px;
        font-size: 27px;
        font-family: 'Lexend Deca';
    }
`
export const HabitCard = styled.div`
    width: 340px;
    
    margin-bottom: 10px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
        input{
            width: 303px;
            height: 45px;
            border-radius: 5px;
            border:  1px solid #D4D4D4;
            padding-left: 10px;
            margin-bottom: 5px;
            font-size: 20px;
            color:#666666;
        }
`
export const HabitListed = styled.div`
 width: 303px;
            height: 45px;
            border-radius: 5px;
            border:  1px solid #D4D4D4;
            display: flex;
            align-items: center;
            padding-left: 10px;
            margin-bottom: 5px;
            font-size: 20px;
            color: #666666;
`
export const ButtonContainer = styled.div`
display: flex;
justify-content: end;
`
export const SaveButton = styled.div`
    width: 84px;
    height: 35px;
    color: white;
    border-radius: 5px;
    background-color: #52B6FF;
    font-size: 17px;
    display:flex;
    align-content: center;
    justify-content: center;
    align-items: center;
`
export const CancelButton = styled.div`
 width: 84px;
    height: 35px;
    color: #52B6FF;
    border-radius: 5px;
    font-size: 17px;
   margin-top: 7px;
    
    
`


export const DaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Day = styled.div`
width: 30px;
height: 30px;
margin-right: 5px;
border-radius: 5px;
font-family: 'Lexend Deca';
font-size: 25px;
border:  1px solid #D4D4D4;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

color: #DBDBDB;
background-color: white;
/* background-color: ${({ selecionado }) => (selecionado ? "blue" : "white")};
  color: ${({ selecionado }) => (selecionado ? "white" : "black")}; */

`