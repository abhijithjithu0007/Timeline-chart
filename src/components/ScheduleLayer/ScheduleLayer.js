import React from "react";
import { Box, Typography } from "@mui/material";

// scheduleLayer component
const ScheduleLayer = ({ layerData, dateRange }) => {
  return (
    <Box display="flex" gap={1}>
      <Box
        width="100px"
        border="1px solid #ddd"
        textAlign="center"
        bgcolor="#f7f7f7"
        borderRadius="8px"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      >
        <Typography variant="body2" color="textSecondary" fontWeight="bold">
          Layer {layerData.number}
        </Typography>
      </Box>
      {dateRange.map((date, index) => {
        const entry = layerData.layers.find(
          (entry) =>
            date >= entry.startDate.split(" ")[0] &&
            date <= entry.endDate.split(" ")[0] &&
            entry.userId
        );

        const bgColor = entry
          ? index % 2 === 0
            ? "#EE763B"
            : "#000"
          : "transparent";

        return (
          <Box
            key={index}
            flex={1}
            height="40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid #ddd"
            borderRadius="8px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
            bgcolor={bgColor}
            transition="all 0.3s ease-in-out"
            cursor="pointer"
          >
            <Typography
              variant="body2"
              color="textPrimary"
              textAlign="center"
              sx={{
                fontSize: "12px",
                color: entry
                  ? index % 2 === 0
                    ? "black"
                    : "white"
                  : "transparent",
              }}
            >
              {entry ? `User ${entry.userId}` : ""}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default ScheduleLayer;
