import React from "react";
import { Box, Typography } from "@mui/material";

// FinalRow Component
const FinalRow = ({ finalSchedule, currentDateRange }) => {
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
          Final Schedule
        </Typography>
      </Box>
      {currentDateRange.map((date, index) => {
        const entry = finalSchedule.find(
          (item) =>
            date >= item.startDate.split(" ")[0] &&
            date <= item.endDate.split(" ")[0]
        );

        const bgColor = entry ? "#BBDEFB" : "transparent"; // Light blue for assigned date
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
            bgcolor={bgColor}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
            transition="all 0.3s ease-in-out"
            _hover={{
              bgcolor: entry ? "#2196F3" : "#f0f0f0", // Hover effect on hover
              color: entry ? "#fff" : "#000", // Change text color on hover
              transform: "scale(1.05)", // Slightly enlarge the box on hover
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
              cursor: "pointer", // Change cursor on hover
            }}
          >
            <Typography variant="body2" color="textPrimary" textAlign="center">
              {entry ? `User ${entry.userId}` : ""}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default FinalRow;
