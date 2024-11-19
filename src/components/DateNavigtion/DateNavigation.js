import React from "react";
import { Box, Button } from "@mui/material";

const DateNavigation = ({ onPrevious, onNext, onTodayClick }) => {
  return (
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
  );
};

export default DateNavigation;
