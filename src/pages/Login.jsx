import { styled } from "styled-components";
import UnderDevelopment from "../data/underProgress.svg";
import { Box, Typography } from "@mui/material";
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

function Login() {
  return (
    <ContentStyle>
      <Box
        sx={{
          width: "600px",
          height: "500px",
          opacity: "60%",
          padding: "30px  0",
        }}
      >
        <Typography
          sx={{
            color: "gray",
            fontFamily: "Montserrat",
            fontSize: "28px",
            fontWeight: "800 ",
            textAlign: "center",
          }}
        >
          Page Under Development
        </Typography>
        <img src={UnderDevelopment} />
      </Box>
    </ContentStyle>
  );
}

export default Login;
