import React, { useState, useMemo } from "react";
import { Box } from "@mui/material";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import ScheduleGrid from "./ScheduleGrid/ScheduleGrid";
import scheduleData from "../data.json";

const ScheduleComponent = () => {
  const [view, setView] = useState("month");
  const [dateRange, setDateRange] = useState({
    start: new Date(2022, 9, 2),
    end: new Date(2022, 9, 31),
  });

  const handleRangeChange = (days) => {
    const today = new Date(2022, 9, 2);
    const end = new Date(today.getTime());
    end.setDate(today.getDate() + days - 1);
    setDateRange({ start: today, end });
    setView("day");
  };

  const handleMonthChange = () => {
    setDateRange({
      start: new Date(2022, 9, 2),
      end: new Date(2022, 9, 31),
    });
    setView("month");
  };

  const handleNext = () => {
    setDateRange({
      start: new Date(dateRange.start.getTime() + 7 * 24 * 60 * 60 * 1000),
      end: new Date(dateRange.end.getTime() + 7 * 24 * 60 * 60 * 1000),
    });
  };

  const handlePrevious = () => {
    setDateRange({
      start: new Date(dateRange.start.getTime() - 7 * 24 * 60 * 60 * 1000),
      end: new Date(dateRange.end.getTime() - 7 * 24 * 60 * 60 * 1000),
    });
  };

  const handleTodayClick = () => {
    const today = new Date();
    setDateRange({ start: today, end: today });
  };

  const currentDateRange = useMemo(() => {
    return Array.from(
      { length: (dateRange.end - dateRange.start) / (1000 * 60 * 60 * 24) + 1 },
      (_, i) => {
        const date = new Date(dateRange.start);
        date.setDate(date.getDate() + i);
        return date.toISOString().split("T")[0];
      }
    );
  }, [dateRange.start, dateRange.end]);

  return (
    <Box padding={2}>
      <CalendarHeader
        dateRange={dateRange}
        onRangeChange={handleRangeChange}
        onMonthChange={handleMonthChange}
        onTodayClick={handleTodayClick}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      <ScheduleGrid
        view={view}
        scheduleData={scheduleData}
        currentDateRange={currentDateRange}
      />
    </Box>
  );
};

export default ScheduleComponent;
