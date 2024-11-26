import React from "react";
import { Box, Typography } from "@mui/material";

const formatDate = (dateString, view) => {
  const date = new Date(dateString);

  if (view === "month") {
    return date.getDate();
  }

  const options = { weekday: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const ShowDate = ({ dateRange, view }) => {
  return (
    <Box display="flex" gap={1}>
      <Box
        width="100px"
        border="1px solid #ddd"
        textAlign="center"
        bgcolor="#f7f7f7"
        borderRadius="8px"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        transition="all 0.3s ease-in-out"
      >
        <Typography
          variant="body2"
          color="textSecondary"
          fontWeight="bold"
          textAlign="center"
          marginTop="8px"
        >
          Date
        </Typography>
      </Box>
      {dateRange.map((date, index) => (
        <Box
          key={index}
          flex={1}
          height="40px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid #ddd"
          borderRadius="8px"
          bgcolor="#fff"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
          transition="all 0.3s ease-in-out"
        >
          <Typography
            variant="body2"
            color="textPrimary"
            sx={{ fontSize: "12px" }}
          >
            {formatDate(date, view)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ShowDate;
