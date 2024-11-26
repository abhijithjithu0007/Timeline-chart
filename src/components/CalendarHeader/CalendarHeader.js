import React from "react";
import { Box, Button, Typography } from "@mui/material";

//header of calendar

const CalendarHeader = ({
  dateRange,
  onRangeChange,
  onTodayClick,
  onPrevious,
  onNext,
  onMonthChange,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={2}
    >
      <Box display="flex" gap={1}>
        <Button variant="outlined" onClick={() => onRangeChange(1)}>
          1 Day
        </Button>
        <Button variant="outlined" onClick={() => onRangeChange(2)}>
          2 Days
        </Button>
        <Button variant="outlined" onClick={() => onRangeChange(7)}>
          1 Week
        </Button>
        <Button variant="outlined" onClick={() => onRangeChange(14)}>
          2 Weeks
        </Button>
        <Button variant="outlined" onClick={onMonthChange}>
          1 Month
        </Button>
      </Box>
      <Typography variant="h6">
        {new Date(dateRange.start).toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          year: "numeric",
        })}{" "}
        -{" "}
        {new Date(dateRange.end).toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          year: "numeric",
        })}
      </Typography>

      <Box display="flex" gap={1}>
        <Button variant="outlined" onClick={onTodayClick}>
          Today
        </Button>
        <Button variant="outlined" onClick={onPrevious}>
          Previous
        </Button>
        <Button variant="outlined" onClick={onNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CalendarHeader;
