import Input from "../Input/Input";
import styled from "styled-components";
import Boton from "../Button/Boton";
import loginService from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FormContainer,
  FormTitle,
  Form,
  ButtonsContainer,
} from "../Registro/FormComponents";

const FormContainerLogin = styled(FormContainer)`
  box-sizing: border-box;
  padding: 2rem;

  @media only screen and (min-width: 768px) {
    padding: 5rem 6rem;
    justify-content: center;
  }

  @media only screen and (min-width: 1024px) {
    padding: 5rem 10rem;
    justify-content: center;
  }

  @media only screen and (min-width: 1440px) {
    padding: 5rem 15rem;
    justify-content: center;
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activo, setActivo] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      email.match(
        "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
      ) &&
      password.length >= 6
    ) {
      setActivo(true);
    } else {
      setActivo(false);
    }
  }, [email, password]);

  const loginFunc = () => {
    loginService({
      email,
      password,
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("tkn", res.data.accessToken);

        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      })
      .catch(() => {
        location.reload();
      });
  };

  return (
    <FormContainerLogin>
      <FormTitle>Login</FormTitle>
      <Form>
        <Input
          type={"email"}
          placeholder={"Email"}
          data={email}
          dataOutput={setEmail}
        />
        <Input
          type={"password"}
          placeholder={"password"}
          data={password}
          dataOutput={setPassword}
        />
      </Form>
      <ButtonsContainer>
        <Boton
          type={"guardar"}
          text={"Login"}
          onClick={loginFunc}
          activo={activo}
        />
      </ButtonsContainer>
    </FormContainerLogin>
  );
}

export default Login;
