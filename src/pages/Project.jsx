import { useState } from "react";
import { styled } from "styled-components";
import { useTodo } from "../PostContext";
import { Backdrop, Box, Fade, List, Modal, Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Outlet } from "react-router-dom";
import Empty from "../data/empty.svg";
import AddProjectSideForm from "../features/project/AddProjectSideForm";
import MainProjectItem from "../features/project/MainProjectItem";
import ListImg from "../data/list.svg";

const ContentStyle = styled.div`
  display: flex;
  height: 800px;
  padding-top: 25px;
  background-color: #fbffdc;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Montserrat;
  flex-wrap: nowrap;
`;

const style = {
  paddingBottom: "0px",
  width: "600px",
  borderRadius: "5px",
  border: "1px",
  zIndex: "1",
  boxShadow: "1px 1px 7px 1px #B2A4FF",
  "&:hover": {
    bgColor: "#FFDEB4",
  },
};

const searchStyle = {
  width: "600px",
  marginBottom: "10px",
  paddingBottom: "10px 0 10px 0",
  boxShadow: "#B2A4FF 0px 2px 5px 0px, #fff 0px 1px 1px 0px",
  "&::before": {
    display: "none",
  },
  "&:focus-within": {
    outline: "1px solid #B2A4FF",
    outlineOffset: "1px",
  },
};

const Modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #360982",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

function Project() {
  const { projectList } = useTodo();
  const isEmpty = projectList[0];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleStopBubbling(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <>
      <ContentStyle>
        {/* If there is no project in the projectList array itshould dispaly no project otherwise */}
        <Box sx={{ padding: "5px 0 20px 0" }}>
          <Input
            startDecorator={<SearchRoundedIcon />}
            sx={searchStyle}
            name="Outlined"
            placeholder={"Search projects here..."}
            variant="outlined"
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={(event) => {
                handleOpen();
                handleStopBubbling(event);
              }}
              sx={{
                color: "#B2A4FF",
                bgcolor: "#fbffdc",
                width: "150px",
                fontSize: "13px",
                height: "10px",
                borderColor: "#B2A4FF",
                borderWidth: "1px",
              }}
              variant="outlined"
              startDecorator={<AddOutlinedIcon />}
            >
              Add Project
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={Modalstyle} onClick={handleStopBubbling}>
                  <AddProjectSideForm handleClose={handleClose} />
                </Box>
              </Fade>
            </Modal>
          </Box>
        </Box>
        {!isEmpty ? (
          <Box>
            <Box
              sx={{
                opacity: "85%",
                padding: "40px 40px 0 40px",
              }}
            >
              <img src={Empty} />
            </Box>
            <Typography
              sx={{
                color: "#000",
                fontSize: "17px",
                fontWeight: 700,
                width: "600px",
                textAlign: "center",
              }}
            >
              Emptiness Awaits Creation.
              <br /> Start a Project and Let Your Imagination Lead.
            </Typography>
          </Box>
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
                <MainProjectItem
                  key={projectItem.id}
                  projectId={projectItem.id}
                  projectItem={projectItem}
                />
              </>
            ))}
          </List>
        )}
        {isEmpty && (
          <Box
            sx={{
              display: "flex",
              width: "500px",
              position: "absolute",
              bottom: "40px",
              opacity: "40%",
              // zIndex: -1,
            }}
          >
            <img src={ListImg}></img>
          </Box>
        )}
        <Outlet />
      </ContentStyle>
    </>
  );
}

export default Project;
