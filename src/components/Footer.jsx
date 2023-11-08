import { styled } from "styled-components";
const FooterStyle = styled.div`
  position: relative;
  color: #fff;
  height: 40px;
  text-align: center;
  font-family: Archivo Black;
  background-color: #ac92fa;
`;

const FooterName = styled.p`
  margin: 0;
`;

function Footer() {
  return (
    <>
      <FooterStyle>
        <FooterName>copyright 2023</FooterName>
      </FooterStyle>
    </>
  );
}

export default Footer;
