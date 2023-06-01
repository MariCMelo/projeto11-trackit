import React, { useState } from "react";
import { PageContainer, Logo, LoginContainer, StyledLink } from "./styled";
import logo from "../../assets/logo-completa.png";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/baseUrl";
import axios from "axios";

export default function HomePage({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    const newLogin = { email, password };

    const promise = axios.post(`${BASE_URL}/auth/login`, newLogin);

    promise
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
      })
      .catch((err) => alert(err.response.data.mesage));
  };

  return (
    <PageContainer>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <LoginContainer onSubmit={login}>
        <input
          data-test="email-input"
          placeholder="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          data-test="password-input"
          placeholder="senha"
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button  data-test="login-btn" type="submit">Entrar</button>
        <Link to="/cadastro" data-test="signup-link">
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </LoginContainer>
    </PageContainer>
  );
}