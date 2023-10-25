import AllOutIcon from "@mui/icons-material/AllOut";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
function ListElement({ id, title, description, deleteTask }) {
  return (
    <Box
      key={id}
      sx={{
        width: "440px",
        height: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "flex-start",
        flexWrap: "nowrap",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            icon={<AllOutIcon />}
            color="success"
            checkedIcon={<CheckCircleIcon />}
            size="small"
            onChange={() => deleteTask(id)}
          />
        }
        label={title}
      />
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
      </Box>
    </Box>
  );
}

export default ListElement;
