import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { AuthContext } from "../contexts/Autentication";
import { BASE_URL } from "../../constants/baseUrl";
import { Logo, LoginContainer, PageContainer, ButtonText, LoaderWrapper } from "./styled";
import logo from "../../assets/logo-completa.png";

export default function HomePage() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { setUserAccount, setToken } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmitLogin(event) {
    event.preventDefault();
    const form = { email, password };
    setIsLoggingIn(true);

    axios
      .post(`${BASE_URL}/auth/login`, form)
      .then(response => {
        console.log(response.data);
        loginApproved(response);
      })
      .catch(error => {
        console.log(error.response.data.message);
        loginDenied(error);
      });
  }
  function loginApproved(res) {
    const { token, image: imageURL } = res.data;

    setIsLoggingIn(false);
    setUserAccount(res.data.token);
    setToken(token);
    navigate('/hoje');

    localStorage.setItem("token", token);
    localStorage.setItem("imageURL", imageURL);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <PageContainer>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <LoginContainer onSubmit={handleSubmitLogin}>
        <input
          data-test="email-input"
          placeholder="email"
          name="email"
          required
          disabled={isLoggingIn}
          value={email}
          onChange={handleEmailChange}
        />
        <input
          data-test="password-input"
          placeholder="senha"
          name="password"
          type="password"
          required
          disabled={isLoggingIn}
          value={password}
          onChange={handlePasswordChange}
        />
        <button data-test="login-btn" type="submit" disabled={isLoggingIn}>
          <ButtonText isLoading={isLoggingIn}>Entrar</ButtonText>
          {isLoggingIn && (
            <LoaderWrapper>
              <BeatLoader color="#FFFFFF" loading={isLoggingIn} size={10} />
            </LoaderWrapper>
          )}
        </button>
        <Link to="/cadastro" data-test="signup-link">
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </LoginContainer>
    </PageContainer>
  );
}