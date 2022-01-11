import React, { useState, useEffect, Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountryList,
  fetchChartData,
  fetchCurrentCountry,
} from "../../Redux/Action";
import SelectDropdown from "../../components/select";
import Chart from "../../components/Chart";
import Card from "../../components/card";

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    chartData = [],
    countryList,
    countryCode,
  } = useSelector((state) => state.chartReducer);

  const [value, setValue] = useState(countryCode);

  useEffect(async () => {
    dispatch(fetchCountryList());
    dispatch(fetchCurrentCountry());
  }, []);

  const handleChange = (input) => {
    setValue(input);
    dispatch(fetchChartData(input));
  };

  return (
    <Fragment>
      <Grid contianer className="heading">
        {" "}
        <Typography variant="h3"> Covid Analytics Dashboard</Typography>{" "}
      </Grid>
      <Grid container justifyContent="center" className="select-input">
        <SelectDropdown
          value={value}
          handleChange={handleChange}
          options={countryList}
        />
      </Grid>
      <Grid container justifyContent="space-evenly" className="card-container">
        {chartData.length > 0
          ? chartData.map((data, key) => {
              return <Card data={data} key={key} />;
            })
          : ""}
      </Grid>

      <Grid container className="chart-conatiner">
        {JSON.stringify(chartData) === "{}" ? "" : <Chart data={chartData} />}
      </Grid>
    </Fragment>
  );
};

export default Dashboard;
