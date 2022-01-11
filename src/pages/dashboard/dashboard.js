import React, { useState, useEffect, Fragment } from "react";
import { Grid, Typography, Switch } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountryList,
  fetchChartData,
  fetchCurrentCountry,
  setCountryCode,
  setLoader,
} from "../../Redux/Action";
import SelectDropdown from "../../components/select";
import Chart from "../../components/Chart";
import Card from "../../components/card";
import loaderGif from "../../assets/loader.gif";

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    chartData = [],
    countryList,
    countryCode,
    loader,
  } = useSelector((state) => state.chartReducer);

  console.log("Loader", countryList, countryCode);

  const [value, setValue] = useState(countryCode);
  const [graphType, setGraphType] = useState("column");
  const [chartType, setChartType] = useState(true);

  useEffect(async () => {
    dispatch(setLoader("SET_LOADER_VISIBLILITY", true));
    dispatch(fetchCountryList());
    dispatch(fetchCurrentCountry());
    dispatch(setLoader("SET_LOADER_VISIBLILITY", false));
  }, []);

  const handleChange = (input) => {
    setCountryCode(input);
    dispatch(setLoader("SET_LOADER_VISIBLILITY", true));
    dispatch(fetchChartData(input));
    dispatch(setLoader("SET_LOADER_VISIBLILITY", false));
  };
  const handleGrapthType = () => {
    setChartType(!chartType);
    const type = chartType ? "pie" : "column";
    setGraphType(type);
  };

  return (
    <Fragment>
      {loader ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className="loader"
        >
          <img src={loaderGif} alt="loader-image" />
        </Grid>
      ) : (
        <Fragment>
          <Grid contianer className="heading">
            {" "}
            <Typography variant="h3"> Covid Analytics</Typography>{" "}
          </Grid>
          <Grid container justifyContent="center" className="select-input">
            <Typography variant="h6">select country:</Typography>
            <SelectDropdown
              value={countryCode}
              handleChange={handleChange}
              options={countryList ? countryList : []}
            />
          </Grid>
          <Grid
            container
            justifyContent="space-evenly"
            className="card-container"
          >
            {chartData.length > 0
              ? chartData.map((data, key) => {
                  return <Card data={data} key={key} />;
                })
              : ""}
          </Grid>
          <Grid container justifyContent="center" className="select-input">
            <Typography variant="h6">change chart view:</Typography>
            <Switch
              checked={chartType}
              onChange={handleGrapthType}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Grid>
          <Grid container className="chart-conatiner">
            {JSON.stringify(chartData) === "{}" ? (
              ""
            ) : (
              <Chart data={chartData} type={graphType} />
            )}
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
