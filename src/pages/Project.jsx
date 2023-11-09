import { NavLink, Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { useTodo } from "../PostContext";
import { Box, Typography } from "@mui/material";
import LensIcon from "@mui/icons-material/Lens";

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

const Navlink = styled(NavLink)`
  text-decoration: none;
  color: #404258;
  cursor: pointer;
`;

function Project() {
  const { projectList } = useTodo();
  return (
    <ContentStyle>
      <Box
        sx={{
          width: "450px",
          display: "flex",
          flexDirection: "column",
          height: "70px",
          paddingTop: "120px",
        }}
      >
        {projectList.map((projectItem) => (
          <Navlink key={projectItem.id} to={`${projectItem.id}`}>
            <Typography
              key={projectItem.id}
              onClick={console.log(projectItem.id)}
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: "500",
                padding: "5px 0",
                "&:hover": { fontWeight: "900", fontSize: "21px" },
              }}
            >
              <br />
              <LensIcon
                sx={{
                  color: "limegreen",
                  fontSize: "15px",
                  padding: "3px",
                  marginRight: "20px",
                  "&:hover": { fontSize: "15px" },
                }}
              />
              {projectItem.projectName}
            </Typography>
          </Navlink>
        ))}
      </Box>
      {/* <p>ProjectPage</p> */}
      <Outlet />
    </ContentStyle>
  );
}

export default Project;
