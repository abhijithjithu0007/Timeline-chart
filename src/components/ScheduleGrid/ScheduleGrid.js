import React from "react";
import { Grid } from "@mui/material";
import ScheduleLayer from "../ScheduleLayer/ScheduleLayer";
import FinalRow from "../FinalSchedule/FinalScedule";
import OverRideLayer from "../OverLayer/OverRide";
import ShowDate from "../ShowDate/ShowDate";

//creating the grid here

const ScheduleGrid = ({ scheduleData, currentDateRange, view }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ShowDate dateRange={currentDateRange} view={view} />
      </Grid>

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
