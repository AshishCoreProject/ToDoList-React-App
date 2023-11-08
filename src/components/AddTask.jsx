/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function AddTask({ isAddTask, setIsAddTask }) {
  return (
    <>
      <Box sx={{ width: "600px" }}>
        <Button
          sx={{
            color: "#360982",
            padding: "6px 2px",

            "&:hover": {
              bgcolor: "#AC92FA",
              opacity: "90%",
              color: "#fff",
            },
          }}
          onClick={() => setIsAddTask(!isAddTask)}
        >
          <AddOutlinedIcon
            sx={{
              color: "#360982",
              "&:hover": {
                bgcolor: "#AC92FA",
                opacity: "50%",
                color: "#fff",
              },
            }}
          />
          Add task
        </Button>
      </Box>
    </>
  );
}

export default AddTask;
