/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Box, ListItem, ListItemText } from "@mui/material";
import ProjectDotsBar from "./ProjectDotsBar";
import StarsTwoToneIcon from "@mui/icons-material/StarsTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import useOutsideClick from "../../hooks/useOutsideClick";

const Navlink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
`;

function NumberOfProject({ projectItem }) {
  const [isOpenDotsClicked, setIsOpenDotsClicked] = useState(false);
  const [isOpenDotsVisible, setIsOpenDotsVisible] = useState(false);
  const buttonRef = useRef(null);
  const buttonClickedOutside = useOutsideClick(buttonRef);
  console.log(buttonClickedOutside);

  useEffect(() => {
    if (buttonClickedOutside) {
      setIsOpenDotsClicked(false);
      if (isOpenDotsClicked) setIsOpenDotsVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonClickedOutside]);

  function handleMouseClick(e) {
    e.stopPropagation();
    if (isOpenDotsClicked) setIsOpenDotsVisible(false);
    setIsOpenDotsClicked((value) => !value);
  }

  function handleHovering(e) {
    e.stopPropagation();
    if (isOpenDotsClicked) setIsOpenDotsVisible(true);
    else setIsOpenDotsVisible((value) => !value);
  }

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
        <Navlink
          key={projectItem.id}
          to={`${projectItem.id}`}
          onMouseOver={handleHovering}
        >
          <ListItem
            onMouseOut={handleHovering}
            sx={{
              width: "600px",
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
          onMouseOver={handleHovering}
          onMouseOut={handleHovering}
          sx={{ height: "45px" }}
        >
          {isOpenDotsVisible && (
            <MoreHorizTwoToneIcon
              onClick={handleMouseClick}
              sx={{
                textDecoration: "none",
                color: "#379237",
                padding: "10px 8px 2px 8px",
              }}
            />
          )}

          {isOpenDotsClicked && (
            <Box
              ref={buttonRef}
              onClick={handleMouseClick}
              // onMouseOver={handleHovering}
              sx={{
                position: "absolute",
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
