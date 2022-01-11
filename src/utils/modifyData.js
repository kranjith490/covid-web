const modifyGraphData = (response) => {
  return [
    { label: "confirmed", y: response.confirmed.value, title: "Active Cases" },
    { label: "deaths", y: response.deaths.value, title: "Death Cases" },
    { label: "recovered", y: response.recovered.value, title: "Rescued Cases" },
  ];
};

export default modifyGraphData;
