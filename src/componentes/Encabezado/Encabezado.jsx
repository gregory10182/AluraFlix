import { styled } from "styled-components";
import Boton from "../Button/Boton";
import LogOut from "../LogOut/LogOut";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { tknContext } from "../../contexts/tknContext";

const Header = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  height: 2.5rem;
  background-color: var(--color-black-darker);
  border-bottom: 0.3rem solid var(--color-primary-medium);

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem;
    height: 5.875rem;
    background-color: var(--color-black-darker);
    border-bottom: 0.3rem solid var(--color-primary-medium);
  }
`;

const Logo = styled.img`
  height: 1.5625rem;
  object-fit: contain;

  @media only screen and (min-width: 1440px) {
    height: 2.5rem;
  }
`;

function Encabezado() {
  const location = useLocation();

  const { tkn } = useContext(tknContext);

  useEffect(() => {
    console.log(tkn);
  }, [tkn]);

  return (
    <Header>
      <Link to={"/"}>
        <Logo src="/Logo.png" alt="AluraLogo" />
      </Link>

      {localStorage.getItem("tkn") && <LogOut />}
      {location.pathname === "/" && (
        <Link to={"/nuevoVid"}>
          <Boton text={"Nuevo Video"} type={"nuevoVideoHeader"} />
        </Link>
      )}
    </Header>
  );
}

export default Encabezado;
