import React, { useState } from "react";
import { PageContainer, Logo, LoginContainer} from "./styled";
import logo from "../../assets/logo-completa.png";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/baseUrl";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

export default function HomePage({ setToken }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newLogin = { email, password };

    const promise = axios.post(`${BASE_URL}/auth/login`, newLogin);

    promise
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
        navigate('/hoje');
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
        <button data-test="signup-btn" type="submit" disabled={isLoading}>
          {isLoading ? (
            <BeatLoader color="#FFFFFF" loading={isLoading} size={10} />
          ) : (
            "Entrar"
          )}
        </button>
        <Link to="/hoje" data-test="signup-link">
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </LoginContainer>
    </PageContainer>
  );
}