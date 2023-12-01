import { styled } from "styled-components";
import underDevelopment from "../data/underDevelopment.svg";
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

function Signup() {
  return (
    <ContentStyle>
      <Box
        sx={{
          height: "500px",
          width: "600px",
          opacity: "60%",
          padding: "30px 0",
        }}
      >
        <Typography
          sx={{
            color: "gray",
            fontFamily: "Montserrat",
            fontSize: "28px",
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          Page Under Development
        </Typography>
        <img src={underDevelopment} />
      </Box>
    </ContentStyle>
  );
}

export default Signup;
