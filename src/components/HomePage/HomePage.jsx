import React, { useContext, useState } from "react";
import { PageContainer, Logo, LoginContainer } from "./styled";
import logo from "../../assets/logo-completa.png";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/baseUrl";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { UserContext } from "../contexts/UserContext";

export default function HomePage({ setToken }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  
  const navigate = useNavigate();

  const handleForm = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newLogin = { email, password };

    axios
      .post(`${BASE_URL}/auth/login`, newLogin)
      .then((res) => {
        const { id, name, image, token } = res.data;
        setIsLoading(false);
        setUser({ id, name, image, token });
        setToken(res.data.token);
        navigate("/hoje");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(user)
        alert(err.response.data);
      });
  };

  return (
    <PageContainer>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <LoginContainer onSubmit={handleLogin}>
        <input
          data-test="email-input"
          placeholder="email"
          type="email"
          name="email"
          required
          disabled={isLoading}
          value={email}
          onChange={handleForm}
        />
        <input
          data-test="password-input"
          placeholder="senha"
          name="password"
          type="password"
          required
          disabled={isLoading}
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
        <Link to="/cadastro" data-test="signup-link">
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </LoginContainer>
    </PageContainer>
  );
}