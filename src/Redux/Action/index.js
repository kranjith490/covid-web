import axios from "axios";
import config from "../../config/config";
import modifyGraphData from "../../utils/modifyData";
const SET_COUNTRY_LIST = "SET_COUNTRY_LIST";
const SET_CHART_DATA = "SET_CHART_DATA";
const SET_API_FAILURE = "SET_API_FAILURE";
export const setCountryList = (actionType, response) => {
  return {
    type: actionType,
    response: response,
  };
};
export const setCharData = (actionType, response, countryCode) => {
  return {
    type: actionType,
    response: response,
    countryCode: countryCode,
  };
};

export const setAPIFailure = (actionType, response) => {
  return {
    type: actionType,
    response: response,
  };
};

export const fetchCurrentCountry = () => {
  return (dispatch) => {
    axios
      .get(config.urls.geolocation)
      .then((response) => {
        dispatch(fetchChartData(response.data.location.country.code));
      })
      .catch((error) => {
        dispatch(
          setAPIFailure(SET_API_FAILURE, {
            message:
              "Service Unavailable, due to some technical reasons, try sometime later",
            status: 500,
          })
        );
      });
  };
};

export const fetchCountryList = () => {
  return (dispatch) => {
    axios
      .get(config.urls.countryList)
      .then((response) => {
        dispatch(
          setCountryList(
            SET_COUNTRY_LIST,
            JSON.parse(JSON.stringify(response.data.countries))
          )
        );
      })
      .catch((error) => {
        dispatch(
          setAPIFailure(SET_API_FAILURE, {
            message:
              "Service Unavailable, due to some technical reasons, try sometime later",
            status: 500,
          })
        );
      });
  };
};
export const fetchChartData = (countryCode) => {
  let url = `${config.urls.countryList}${countryCode}`;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(
          setCharData(
            SET_CHART_DATA,
            modifyGraphData(JSON.parse(JSON.stringify(response.data))),
            countryCode
          )
        );
      })
      .catch((error) => {
        dispatch(
          setAPIFailure(SET_API_FAILURE, {
            message:
              "Service Unavailable, due to some technical reasons, try sometime later",
            status: 500,
          })
        );
      });
  };
};
