const modifyGraphData = (response) => {
  return [
    { label: "confirmed", y: response.confirmed.value },
    { label: "deaths", y: response.deaths.value },
    { label: "recovered", y: response.recovered.value },
  ];
};

export default modifyGraphData;
