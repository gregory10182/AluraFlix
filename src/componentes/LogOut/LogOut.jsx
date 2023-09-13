import styled from "styled-components";

const LogOutButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonImg = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: cover;
  filter: invert(37%) sepia(70%) saturate(2252%) hue-rotate(200deg)
    brightness(94%) contrast(89%);
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
        src="https://cdn-icons-png.flaticon.com/512/8034/8034856.png"
        alt=""
      />
    </LogOutButton>
  );
}

export default LogOut;
