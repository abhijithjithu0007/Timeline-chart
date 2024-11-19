import React from "react";
import { Grid } from "@mui/material";
import ScheduleLayer from "../ScheduleLayer/ScheduleLayer";

const ScheduleGrid = ({ scheduleData, currentDateRange }) => {
  return (
    <Grid container spacing={1}>
      {scheduleData.layers.map((layerData, layerIndex) => (
        <Grid item xs={12} key={layerIndex}>
          <ScheduleLayer layerData={layerData} dateRange={currentDateRange} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ScheduleGrid;
