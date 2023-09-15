import styled from "styled-components";

const LogOutButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 0.6rem;
  right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1440px) {
    height: 2rem;
    width: 2rem;
    top: 1.6375rem;
    right: 1.1rem;
  }
`;

const ButtonImg = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: cover;
  filter: invert(100%);

  @media only screen and (min-width: 1440px) {
    height: 2rem;
    width: 2rem;
  }
`;

function LogOut() {
  const logOutHandler = () => {
    localStorage.removeItem("tkn");

    setTimeout(() => {
      location.replace("/");
    }, 1000);
  };

  return (
    <LogOutButton onClick={() => logOutHandler()}>
      <ButtonImg
        src="https://cdn-icons-png.flaticon.com/512/8336/8336213.png"
        alt=""
      />
    </LogOutButton>
  );
}

export default LogOut;
