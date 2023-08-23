import { styled } from "styled-components";

const FooterSection = styled.section`
  box-sizing: border-box;
  width: 100vw;
  height: 6.88rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10rem;
  padding: 1.5rem 0.8rem;
  row-gap: 1rem;
  border-top: 0.125rem solid var(--color-primary-medium);
  font-family: "Roboto", sans-serif;

  @media only screen and (min-width: 1440px) {
    height: 8.81rem;
  }
`;

const Logo = styled.img`
  width: 7.5rem;
  object-fit: contain;

  @media only screen and (min-width: 1440px) {
    width: 15.78rem;
    height: 3.75rem;
  }
`;

const FooterText = styled.p`
  color: var(--color-gray-light);
  width: 100%;
  font-size: 0.9rem;
  font-weight: 300;
  text-align: center;

  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

const TextChallenge = styled.span`
  font-weight: 600;
`;

const TextAlura = styled.span`
  color: var(--color-primary-medium);
  font-weight: 600;
`;

function Footer() {
  return (
    <FooterSection>
      <Logo src="/Logo.png" alt="" />
      <FooterText>
        Site hecho en <TextChallenge>#challenge</TextChallenge> de{" "}
        <TextAlura>Alura Latam</TextAlura>
      </FooterText>
    </FooterSection>
  );
}

export default Footer;
