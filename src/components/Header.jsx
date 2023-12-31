/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { styled } from "styled-components";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import SearchTodo from "./SearchTodo";

const HeaderStyle = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  align-content: center;
  color: #3e978b;
  height: 50px;
  text-align: left;
  justify-content: space-between;
  width: 99%;
  font-family: cursive;
  background: #beadfa;
  padding: 0 10px;
`;
const BrandTitle = styled.h1`
  margin: 1px;
`;

function Header({ api, setOpenSidebar }) {
  function handleClick() {
    setOpenSidebar((value) => !value);
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  }
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
              variant="p"
            >
              <DensityMediumOutlinedIcon
                onClick={handleClick}
                sx={{ color: "white", cursor: "pointer" }}
              />
              <Box sx={{ paddingLeft: "5px" }}>ToDo</Box>
            </Typography>
          </BrandTitle>
        </div>
        <SearchTodo />
      </HeaderStyle>
    </>
  );
}

export default Header;
