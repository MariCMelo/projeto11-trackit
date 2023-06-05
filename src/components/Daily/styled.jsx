import styled from "styled-components"

export const DailyPageContainer = styled.div`
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
        color: #BABABA;
    }
    `

    export const ActivityContainer = styled.div`
    width: 340px;
    height: 94px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #FFFFFF;
         h1{
        color: #666666;
        font-size:20px;
        margin: 0;
     }
      p{
        color: #666666;
        font-size:13px;
        margin: 5px;
      }
    `

    export const Activity = styled.div`
    
    `

    export const CheckButton = styled.button`
    width: 69px;
    height: 69px;
    color: #FFFFFF;
    font-size: 50px;
    border: none;
    border-radius: 5px;
    
    `