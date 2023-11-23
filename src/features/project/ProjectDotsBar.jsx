/* eslint-disable react/prop-types */

import { useTodo } from "../../PostContext";
import { useState } from "react";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import {
  Backdrop,
  Box,
  Fade,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Modal,
  Paper,
} from "@mui/material";
import RenameForm from "./RenameForm";

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

function ProjectDotsBar({ projectId, projectName, projectTodo }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleStopBubbling(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const id = Date.now().toString().slice(9, 12);

  const { handleAddProject, handleDeleteProjectList } = useTodo();
  const projectDetails = {
    id,
    projectName: "Copy of " + projectName,
    projectTodo,
  };

  function handleClickDuplicate() {
    handleAddProject(projectDetails, 0);
  }

  function handleClickDelete() {
    handleDeleteProjectList(projectId);
  }
  return (
    <>
      <Paper sx={{ width: 220, maxWidth: "100%", padding: 0 }}>
        <MenuList sx={{ padding: 0 }}>
          <MenuItem onClick={handleClickDuplicate}>
            <ListItemIcon>
              <ContentCopyTwoToneIcon sx={{ color: "rgb(148 163 184)" }} />
            </ListItemIcon>
            <ListItemText>Duplicate</ListItemText>
          </MenuItem>

          <MenuItem
            onClick={(event) => {
              handleOpen();
              handleStopBubbling(event);
            }}
            sx={{ borderBottom: "1px solid rgb(203 213 225)" }}
          >
            <ListItemIcon>
              <DriveFileRenameOutlineTwoToneIcon
                sx={{ color: "  rgb(148 163 184)" }}
              />
            </ListItemIcon>
            <ListItemText>Rename</ListItemText>
          </MenuItem>

          {/* ///////////////////////////////////////////////////////////////////////////// */}
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
                <RenameForm
                  handleClose={handleClose}
                  projectId={projectId}
                  projectName={projectName}
                />
              </Box>
            </Fade>
          </Modal>
          {/* ///////////////////////////////////////////////////////////////////////////// */}

          <MenuItem onClick={handleClickDelete}>
            <ListItemIcon>
              <DeleteTwoToneIcon sx={{ color: "rgb(244 63 94);" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "rgb(244 63 94);" }}>
              Delete project
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </>
  );
}

export default ProjectDotsBar;
