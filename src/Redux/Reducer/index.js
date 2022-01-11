const SET_COUNTRY_LIST = "SET_COUNTRY_LIST";
const SET_COUNTRY_CODE = "SET_COUNTRY_CODE";
const SET_CHART_DATA = "SET_CHART_DATA";
const SET_API_FAILURE = "SET_API_FAILURE";
const SET_LOADER_VISIBLILITY = "SET_LOADER_VISIBLILITY";

const initialState = {
  chartData: [],
  countryList: [],
  countryCode: "",
  loader: true,
};

export const chartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_COUNTRY_LIST: {
      console.log("CoutrynList", action.response);
      return { ...state, countryList: action.response };
    }
    case SET_COUNTRY_CODE: {
      return { ...state, countryCode: action.countryCode };
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
    case SET_LOADER_VISIBLILITY: {
      console.log("Reducer", action.show);
      return { ...state, loader: action.show };
    }

    default:
      return { ...state };
  }
};
