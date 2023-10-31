import { styled } from "styled-components";
const ContentStyle = styled.div`
  display: flex;
  height: 800px;
  padding-top: 10px;
  background-color: #fbffdc;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  font-family: Montserrat;
`;

function Signup() {
  return (
    <ContentStyle>
      <p>Sign up page</p>
    </ContentStyle>
  );
}

export default Signup;
