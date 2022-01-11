const modifyGraphData = (response) => {
  return [
    { label: "confirmed", y: response.confirmed.value, title: "Active Cases" },
    { label: "deaths", y: response.deaths.value, title: "Death" },
    { label: "recovered", y: response.recovered.value, title: "Rescued" },
  ];
};

export default modifyGraphData;
