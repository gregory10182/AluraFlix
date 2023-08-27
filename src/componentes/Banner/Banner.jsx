import { styled } from "styled-components";
import Boton from "../Button/Boton";

const SectionBanner = styled.section`
  width: 100vw;
  height: 16.1875rem;
  box-sizing: border-box;
  padding: 0.6rem;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-content: flex-end;
  row-gap: 1.18rem;
  font-family: "Roboto", sans-serif;
  background-image: url("/Banner.jpeg");
  box-shadow: inset 0 0 10rem 4rem #000;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: 1440px) {
    height: 52rem;
    padding: 5rem 3rem;
    box-shadow: inset 0 0 25rem 30rem #0012338f;
  }
`;

const SmallScreenTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.6875rem;
  font-weight: 300;
  color: var(--color-gray-light);

  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

const BigScreenData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  column-gap: 3rem;
`;

const Left = styled.div`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: flex;
    row-gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

const VideoImage = styled.img`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: block;
    width: 40.375rem;
    height: 20.84rem;
    border-radius: 0.25rem;
    border: 4px solid var(--color-frontend);
  }
`;

const VideoTitle = styled.h1`
  width: 100%;
  font-size: 2.875rem;
  color: var(--color-gray-light);
  text-align: left;
`;

const VideoDesc = styled.p`
  color: var(--color-gray-light);
  font-size: 1.125rem;
  font-weight: 300;
`;

const CourseName = styled.div`
  width: 18.5rem;
  height: 5.75rem;
  margin-bottom: 2rem;
  background-color: var(--color-frontend);
  color: var(--color-gray-light);
  font-size: 3.75rem;
  font-weight: 400;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Banner() {
  return (
    <SectionBanner>
      <SmallScreenTitle>Challenge React</SmallScreenTitle>
      <Boton text={"Ver"} type={"ver"} />

      <BigScreenData>
        <Left>
          <CourseName>Front End</CourseName>
          <VideoTitle>Challenge React</VideoTitle>
          <VideoDesc>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </VideoDesc>
        </Left>
        <VideoImage src="/video Banner.jpeg" alt="" />
      </BigScreenData>
    </SectionBanner>
  );
}

export default Banner;
