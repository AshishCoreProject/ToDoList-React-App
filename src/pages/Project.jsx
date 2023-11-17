import { styled } from "styled-components";
import { useTodo } from "../PostContext";
import { Box, List } from "@mui/material";
import NumberOfProject from "../features/project/NumberOfProject";
import { Outlet } from "react-router-dom";

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
              <>
                <NumberOfProject
                  key={projectItem.id}
                  projectItem={projectItem}
                />
              </>
            ))}
          </List>
        )}
        <Outlet />
      </ContentStyle>
    </>
  );
}

export default Project;
