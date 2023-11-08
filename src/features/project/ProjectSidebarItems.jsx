/* eslint-disable react/jsx-key */
import { AccordionDetails, Typography } from "@mui/material";
import LensIcon from "@mui/icons-material/Lens";
import randomColor from "randomcolor";
import { useTodo } from "../../PostContext";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Navlink = styled(NavLink)`
  text-decoration: none;
  color: #404258;
  cursor: pointer;
`;

function ProjectItems() {
  const { projectList } = useTodo();

  let color = randomColor();

  return (
    <>
      <AccordionDetails sx={{ padding: "0px 32px 16px" }}>
        {projectList.map((projectItem) => (
          <Navlink key={projectItem.id} to={`project/${projectItem.id}`}>
            <Typography
              key={projectItem.id}
              onClick={console.log(projectItem.id)}
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: "500",
                padding: "5px 0",
                "&:hover": { fontWeight: "800", fontSize: "14px" },
              }}
            >
              <br />
              <LensIcon
                sx={{
                  color: color,
                  fontSize: "15px",
                  padding: "3px",
                  "&:hover": { fontSize: "15px" },
                }}
              />
              {projectItem.projectName}
            </Typography>
          </Navlink>
        ))}
      </AccordionDetails>
    </>
  );
}

export default ProjectItems;
