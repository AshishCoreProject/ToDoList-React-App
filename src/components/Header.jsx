/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { styled } from "styled-components";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  color: #3e978b;
  height: 50px;
  text-align: left;
  width: 100%;
  font-family: cursive;
  background: #beadfa;
  padding: 0 10px;
  /* margin: 0 10px; */
`;
const BrandTitle = styled.h1`
  margin: 1px;
`;

function Header({ setOpenSidebar }) {
  return (
    <>
      <HeaderStyle className="header">
        <div>
          <BrandTitle>
            <Typography
              sx={{
                fontSize: "30px",
                padding: "9px 0",
                display: "flex",
                alignItems: "center",
                color: " #360982",
                "&:hover": { color: "#360982" },
                fontFamily: "Montserrat",
                fontWeight: "600",
              }}
              variant="h1"
            >
              <DensityMediumOutlinedIcon
                onClick={() => setOpenSidebar((value) => !value)}
                sx={{ color: "white", cursor: "pointer" }}
              />
              <Box sx={{ paddingLeft: "5px" }}>ToDo</Box>
            </Typography>
          </BrandTitle>
        </div>
      </HeaderStyle>
    </>
  );
}

export default Header;
