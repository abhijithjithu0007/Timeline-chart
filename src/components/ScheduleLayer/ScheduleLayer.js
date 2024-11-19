import React from "react";
import { Box, Typography } from "@mui/material";

const ScheduleLayer = ({ layerData, currentDateRange }) => {
  return (
    <Box display="flex">
      <Box
        width="100px"
        border="1px solid lightgray"
        textAlign="center"
        bgcolor="lightgray"
      >
        <Typography variant="body2">Layer {layerData.number}</Typography>
      </Box>
      {currentDateRange.map((date, index) => {
        const entry = layerData.layers.find(
          (entry) =>
            date >= entry.startDate.split(" ")[0] &&
            date <= entry.endDate.split(" ")[0] &&
            entry.userId
        );
        const bgColor = entry
          ? index % 2 === 0
            ? "yellow"
            : "orange"
          : "transparent";
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

export default ScheduleLayer;
