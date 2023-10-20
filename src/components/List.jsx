import AllOutIcon from "@mui/icons-material/AllOut";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
function List({ tasks }) {
  console.log(tasks);
  return (
    <>
      {tasks.map((task) => (
        <Box
          key={task.title}
          sx={{
            width: "500px",
            height: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            alignContent: "flex-start",
            flexWrap: "nowrap",
            borderBottom: "1px inset  gray",
            borderRadius: "5px",
            marginBottom: "5px",
            boxShadow: "1px 1px 1px lightgray ;",
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<AllOutIcon />}
                  color="success"
                  checkedIcon={<CheckCircleIcon />}
                  size="small"
                />
              }
              label={task.title}
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
              <Typography variant="caption">{task.description}</Typography>
            </Box>
          </FormGroup>
        </Box>
      ))}
    </>
  );
}

export default List;
