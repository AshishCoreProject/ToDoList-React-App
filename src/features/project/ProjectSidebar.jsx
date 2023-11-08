import {
  Accordion,
  AccordionSummary,
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddProjectSideForm from "./AddProjectSideForm";
import ProjectItems from "./ProjectSidebarItems";

const style = {
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

function ProjectSidebar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleStopBubbling(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <Accordion
      sx={{
        width: "293px",
        margin: "0",
        fontFamily: "Montserrat",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          padding: "0",
          margin: "0px",
          height: "35px",
        }}
      >
        <WorkOutlineIcon
          sx={{
            margin: 0,
            paddingRight: "7px",
            color: "rgb(37 99 235)",
          }}
        />
        <Typography sx={{ margin: "1px", fontWeight: "800", color: "#404258" }}>
          Project
        </Typography>
        <Button
          onClick={(event) => {
            handleOpen();
            handleStopBubbling(event);
          }}
          sx={{
            position: "relative",
            left: "105px",
            fontSize: "25px",
            height: "25px",
            zIndex: "3",
            cursor: "auto",
            color: "#360982",
          }}
        >
          <AddIcon sx={{ color: "#360982" }} />
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
            <Box sx={style} onClick={handleStopBubbling}>
              <AddProjectSideForm handleClose={handleClose} />
            </Box>
          </Fade>
        </Modal>
      </AccordionSummary>
      {/* Project Items list */}
      <ProjectItems />
    </Accordion>
  );
}

export default ProjectSidebar;
