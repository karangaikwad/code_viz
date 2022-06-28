import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
function Problems(props) {
  const [userData, setUserData] = useState(null);
  let ratingData = {};
  let problemName = [];
  let labels = [];
  let data = [];
  const getRatingData = () => {
    for (let i = 0; i < userData.result.length; i++) {
      if (
        userData.result[i].verdict === "OK" &&
        problemName.indexOf(userData.result[i].problem.name) === -1
      ) {
        if (userData.result[i].problem.rating) {
          if (!ratingData[userData.result[i].problem.rating]) {
            ratingData[userData.result[i].problem.rating] = 0;
          }
          ratingData[userData.result[i].problem.rating]++;
        }
        problemName.push(userData.result[i].problem.name);
      }
    }
    for (const [key, value] of Object.entries(ratingData)) {
      labels.push(key);
      data.push(value);
    }
  };

  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch(
        "https://codeforces.com/api/user.status?handle=" + props.name
      );

      const data = await response.json();
      setUserData(data);
    }
  }, [props.name]);
  if (userData) getRatingData();
  return (
    <>
      <BarChart
        labels={labels}
        data={data}
        color={"rgba(54, 162, 235, 0.2)"}
        borderColor={"rgba(54, 162, 235)"}
      />
    </>
  );
}

export default Problems;
