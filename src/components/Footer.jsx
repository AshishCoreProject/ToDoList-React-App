import { styled } from "styled-components";
import { fetchDate } from "../services/fetchDate";
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
  const { year } = fetchDate();
  return (
    <>
      <FooterStyle>
        <FooterName>copyright {year}</FooterName>
      </FooterStyle>
    </>
  );
}

export default Footer;
