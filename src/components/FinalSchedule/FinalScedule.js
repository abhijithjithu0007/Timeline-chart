import React from "react";
import { Box, Typography } from "@mui/material";

//final schedule data

const FinalRow = ({ finalSchedule, currentDateRange }) => {
  return (
    <Box display="flex">
      <Box
        width="100px"
        border="1px solid lightgray"
        textAlign="center"
        bgcolor="lightgray"
      >
        <Typography variant="body2">Final Schedule</Typography>
      </Box>
      {currentDateRange.map((date, index) => {
        const entry = finalSchedule.find(
          (item) =>
            date >= item.startDate.split(" ")[0] &&
            date <= item.endDate.split(" ")[0]
        );
        const bgColor = entry ? "lightblue" : "transparent";
        return (
          <Box
            key={index}
            flex={1}
            height="40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid lightgray"
            bgcolor={bgColor}
          >
            <Typography variant="body2">
              {entry ? `User ${entry.userId}` : ""}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default FinalRow;
