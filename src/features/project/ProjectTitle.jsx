/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { fetchDate } from "../../services/fetchDate";

function ProjectTitle({ title }) {
  const { day, thisDate, month } = fetchDate();

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "baseline", width: "600px" }}>
        <Typography variant="h6" color="initial" sx={{ fontWeight: "700" }}>
          {title}
        </Typography>
        <Typography
          variant="caption"
          sx={{ marginLeft: "7px", color: " #54436B" }}
        >
          {day} {thisDate} {month}
        </Typography>
      </Box>
    </>
  );
}

export default ProjectTitle;
