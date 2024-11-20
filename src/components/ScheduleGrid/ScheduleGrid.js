import React from "react";
import { Grid } from "@mui/material";
import ScheduleLayer from "../ScheduleLayer/ScheduleLayer";
import FinalRow from "../FinalSchedule/FinalScedule";
import OverRideLayer from "../OverLayer/OverRide";

//creating the grid here

const ScheduleGrid = ({ scheduleData, currentDateRange }) => {
  return (
    <Grid container spacing={1}>
      {scheduleData.layers.map((layerData, layerIndex) => (
        <Grid item xs={12} key={layerIndex}>
          <ScheduleLayer layerData={layerData} dateRange={currentDateRange} />
        </Grid>
      ))}

      {scheduleData.overrideLayer && (
        <Grid item xs={12}>
          <OverRideLayer
            finalSchedule={scheduleData.overrideLayer}
            currentDateRange={currentDateRange}
          />
        </Grid>
      )}
      {scheduleData.finalSchedule && (
        <Grid item xs={12}>
          <FinalRow
            finalSchedule={scheduleData.finalSchedule}
            currentDateRange={currentDateRange}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default ScheduleGrid;
