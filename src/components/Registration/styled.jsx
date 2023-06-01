import styled from "styled-components";
import { Link} from "react-router-dom"

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Lexend Deca';
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-top: 70px;

  img {
    width: 180px;
  }
`;

export const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;

export const LoginContainer = styled.form`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  font-size: 18px;

  button {
    width: inherit;
    max-width: 303px;
    padding: 10px;
    color: white;
    box-sizing: border-box;
    align-self: center;
    background: #52B6FF;
    border: none;
    border-radius: 5px;
  }

  input {
    width: inherit;
    max-width: 303px;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    color: black;
    border: 1px solid #AFAFAF;
    font-size: 20px;

    &::placeholder {
      color: #DBDBDB;
    }
  }

  p {
    color: #52B6FF;
    text-decoration: underline #52B6FF;
    font-size: 14px;
  }
`
export const StyledLink = styled(Link)`
  color: #52B6FF;
  text-decoration: underline #52B6FF;
  font-size: 14px;
`