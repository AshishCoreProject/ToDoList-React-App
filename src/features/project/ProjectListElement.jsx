/* eslint-disable react/prop-types */
import { Draggable } from "react-beautiful-dnd";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { fetchDate } from "../../services/fetchDate";
import { useTodo } from "../../PostContext";
import ProjectForm from "./ProjectForm";

// eslint-disable-next-line react/prop-types
function ProjectListElement({
  id,
  title,
  description,
  priority,
  dueDate,
  dueMonth,
  index,
  projectId,
}) {
  const { handleDeleteProject, handleEditProject } = useTodo();
  let [openForm, setOpenForm] = useState(false);

  const { thisDate, year, monthNum } = fetchDate();
  const currentDate = `${year}/${monthNum}/${thisDate}`;

  const curDate = currentDate.replaceAll("/", "");
  const listDate = dueDate.replaceAll("/", "");

  let dayList = dueDate.slice(8);

  const isYesterday = curDate - listDate === 1;
  const isDelayed = curDate > listDate;

  console.log(priority);

  function handlePriority() {
    if (priority === "P4") return <BlurCircularIcon sx={{ color: "gray" }} />;
    if (priority === "P3")
      return <BlurCircularIcon sx={{ color: "rgb(34 197 94)" }} />;
    if (priority === "P2")
      return <BlurCircularIcon sx={{ color: " rgb(2 132 199);" }} />;
    if (priority === "P1")
      return <BlurCircularIcon sx={{ color: " rgb(225 29 72);" }} />;
  }

  function handleCheckPriority() {
    if (priority === "P4")
      return <CheckCircleIcon sx={{ color: "rgb(34 197 94)" }} />;
    if (priority === "P3")
      return <CheckCircleIcon sx={{ color: "rgb(34 197 94)" }} />;
    if (priority === "P2")
      return <CheckCircleIcon sx={{ color: " rgb(2 132 199);" }} />;
    if (priority === "P1")
      return <CheckCircleIcon sx={{ color: " rgb(225 29 72);" }} />;
  }

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          key={id}
          sx={{
            borderBottom: "1px inset  gray",
            borderRadius: "5px",
            marginBottom: "10px",
            boxShadow: "1px 1px 1px lightgray ",

            width: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            alignContent: "flex-start",
            flexWrap: "nowrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "600px",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <FormControlLabel
              color="black"
              control={
                <Checkbox
                  icon={handlePriority()}
                  color="success"
                  checkedIcon={handleCheckPriority()}
                  onChange={() => handleDeleteProject(projectId, id)}
                />
              }
              label={title}
            />
            <Button
              onClick={() => setOpenForm((value) => !value)}
              sx={{
                color: "#00d08aba",
                fontWeight: 200,
                "&:hover": {
                  color: "#360982",
                  opacity: "80%",
                },
              }}
            >
              <BorderColorIcon />
            </Button>
          </Box>
          <Box
            sx={{
              position: "relative",
              bottom: "10px",
              color: "#6a6363",
              marginLeft: "27px",
              width: "400px",
            }}
          >
            <Typography variant="caption">{description}</Typography>
            <br></br>
            {isDelayed && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "rgb(225 29 72)",
                  }}
                  variant="caption"
                >
                  <CalendarTodayOutlinedIcon
                    sx={{
                      color: "rgb(225 29 72)",
                      fontSize: "12px",
                      paddingRight: "4px",
                      paddingTop: "2px",
                    }}
                  />
                  {isYesterday ? `Yesterday ` : `${dayList} ${dueMonth}`}
                </Typography>
              </Box>
            )}
          </Box>
          <Box sx={{ width: "300px" }}>
            {openForm && (
              <ProjectForm
                handleEditProject={handleEditProject}
                projectId={projectId}
                myId={id}
                myTitle={title}
                myDescription={description}
                myPriority={priority}
                myDueDate={dueDate}
                myDueMonth={dueMonth}
                setOpenForm={setOpenForm}
              />
            )}
          </Box>
        </Box>
      )}
    </Draggable>
  );
}

export default ProjectListElement;
