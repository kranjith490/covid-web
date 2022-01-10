const SET_COUNTRY_LIST = "SET_COUNTRY_LIST";
const SET_CHART_DATA = "SET_CHART_DATA";
const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";
const SET_API_FAILURE = "SET_API_FAILURE";

const initialState = {
  chartData: [],
  countryList: [],
  countryCode: "",
};

export const chartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_COUNTRY_LIST: {
      return { ...state, countryList: action.response };
    }
    case SET_CHART_DATA: {
      return {
        ...state,
        chartData: action.response,
        countryCode: action.countryCode,
      };
    }
    case SET_API_FAILURE: {
      return { ...state, chartData: action.response };
    }

    default:
      return { ...state };
  }
};
