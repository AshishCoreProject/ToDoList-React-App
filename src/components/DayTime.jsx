import { Box, Typography } from "@mui/material";
import { fetchDate } from "../services/fetchDate";

function DayTime() {
  const { day, thisDate, year, month } = fetchDate();
  console.log(day, thisDate, year, month);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "baseline", width: "600px" }}>
        <Typography variant="h6" color="initial" sx={{ fontWeight: "700" }}>
          Today
        </Typography>
        <Typography
          variant="caption"
          sx={{ marginLeft: "7px", color: " #54436B" }}
        >
          {day} {thisDate} {year}
        </Typography>
      </Box>
    </>
  );
}

export default DayTime;
