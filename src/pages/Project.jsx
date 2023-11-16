import { NavLink, Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { useTodo } from "../PostContext";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import StarsTwoToneIcon from "@mui/icons-material/StarsTwoTone";

const ContentStyle = styled.div`
  display: flex;
  height: 800px;
  padding-top: 25px;
  background-color: #fbffdc;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Montserrat;
  flex-wrap: wrap;
`;

const Navlink = styled(NavLink)`
  text-decoration: none;
  /* color: #404258; */
  cursor: pointer;
`;

const style = {
  paddingBottom: "0px",
  width: "600px",
  borderRadius: "5px",
  border: "1px",
  boxShadow: "2px 5px 10px 2px #B2A4FF",
  "&:hover": {
    bgColor: "#FFDEB4",
  },
};

function Project() {
  const { projectList } = useTodo();
  return (
    <>
      <ContentStyle>
        {/* If there is no project in the projectList array itshould dispaly no project otherwise */}

        {!projectList[0] ? (
          <p>No Project is There Right Now You can Add it.</p>
        ) : (
          <List sx={style} component="nav" aria-label="mailbox folders">
            <Box
              sx={{
                paddingBottom: "10px",
                paddingLeft: "15px",
                fontSize: "20px",
                fontWeight: "700",
                width: "587px",
                color: "rgb(139 92 246)",
                border: "1px",
                borderBottom: "3px solid rgb(139 92 246);",
              }}
            >
              My Project
            </Box>
            {projectList.map((projectItem) => (
              <Navlink key={projectItem.id} to={`${projectItem.id}`}>
                <ListItem
                  sx={{
                    borderBottom: "1px solid #B2A4FF",
                    padding: "5px 15px ",
                    "&:hover": "bgColor: #B2A4FF",
                  }}
                >
                  <StarsTwoToneIcon
                    sx={{ color: "#82CD47", paddingRight: "15px" }}
                  />
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
            ))}
          </List>
        )}
        <Outlet />
      </ContentStyle>
    </>
  );
}

export default Project;
