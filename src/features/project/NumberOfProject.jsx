/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Box, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import ProjectDotsBar from "./ProjectDotsBar";
import StarsTwoToneIcon from "@mui/icons-material/StarsTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";

const Navlink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
`;

function NumberOfProject({ projectItem }) {
  const [isOpenDots, setIsOpenDots] = useState(false);

  function handleMouseEnter(e) {
    e.stopPropagation();
    setIsOpenDots((value) => !value);
  }

  // function handleMouseLeave(e) {
  //   e.stopPropagation();
  //   setIsOpenDots((value) => !value);
  // }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          alignContent: "flex-start",
        }}
      >
        <Navlink key={projectItem.id} to={`${projectItem.id}`}>
          <ListItem
            sx={{
              width: "560px",
              borderBottom: "1px solid #B2A4FF",
              padding: "5px 15px ",
              "&:hover": "bgColor: #B2A4FF",
            }}
          >
            <StarsTwoToneIcon sx={{ color: "#82CD47", paddingRight: "15px" }} />
            <ListItemText
              primaryTypographyProps={{
                fontSize: "17px",
                fontWeight: "500",
              }}
              sx={{
                textDecoration: "none",
                color: "black",
              }}
              primary={projectItem.projectName}
            />
          </ListItem>
        </Navlink>
        <Box
          // onMouseOut={handleMouseEnter}
          sx={{
            borderBottom: "1px solid #B2A4FF",
          }}
        >
          <MoreHorizTwoToneIcon
            onClick={handleMouseEnter}
            // onMouseOut={handleMouseLeave}
            sx={{
              textDecoration: "none",
              color: "#379237",
              padding: "0 8px 2px 8px",
            }}
          />

          {isOpenDots && (
            <Box
              // onMouseOver={handleMouseEnter}
              // onMouseOut={handleMouseLeave}
              sx={{
                position: "absolute",
                // top: "6%",
                left: 550,
                zIndex: 1,
                backgroundColor: "white",
              }}
            >
              <ProjectDotsBar />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default NumberOfProject;
