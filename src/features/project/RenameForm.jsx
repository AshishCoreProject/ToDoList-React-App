/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import { styled } from "styled-components";
import { useTodo } from "../../PostContext";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

const Form = styled.form`
  width: 400px;
  padding: 0;
`;
const Label = styled.label`
  font-family: "Montserrat";
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border-color: #360982;
  border-width: 1px;
  font-weight: 500;
  border-style: solid;
  font-size: medium;
  font-family: "Montserrat";
`;

function RenameForm({ projectId, projectName, handleClose }) {
  const { handleEditProjectList } = useTodo();
  const [renameProject, setRenameProject] = useState(projectName || "");

  const formRef = useRef(null);
  const formClickOutside = useOutsideClick(formRef, "someLogic");

  function handleSubmit(event) {
    event.preventDefault();
    // event.stopPropagation();
    // const id = Date.now().toString().slice(9, 12);

    handleEditProjectList(projectId, renameProject);
    // setRenameProject("");
    handleClose();
  }

  return (
    <>
      <Form onSubmit={handleSubmit} ref={formClickOutside}>
        <Label>Name</Label>
        <Input
          placeholder="Write the Project Name"
          type="text"
          value={renameProject}
          autoFocus
          onChange={(e) => setRenameProject(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "5px",
          }}
        >
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              color: "#360982",
              borderColor: "#360982",
              fontWeight: "700",
              margin: "0 20px 0 0",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            sx={{
              color: "#360982",
              borderColor: "#360982",
              fontWeight: "700",
            }}
          >
            Add
          </Button>
        </Box>
      </Form>
    </>
  );
}

export default RenameForm;
