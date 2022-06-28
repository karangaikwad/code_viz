import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
function Levels(props) {
  const [userData, setUserData] = useState(null);
  let levelingData = {};
  let problemName = [];
  let labels = [];
  let data = [];
  const getLevelData = () => {
    for (let i = 0; i < userData.result.length; i++) {
      if (
        userData.result[i].verdict === "OK" &&
        problemName.indexOf(userData.result[i].problem.name) === -1
      ) {
        if (userData.result[i].problem.index[0]) {
          if (!levelingData[userData.result[i].problem.index[0]]) {
            levelingData[userData.result[i].problem.index[0]] = 0;
          }
          levelingData[userData.result[i].problem.index[0]]++;
        }
        problemName.push(userData.result[i].problem.name);
      }
    }
    const sorted = Object.keys(levelingData)
      .sort()
      .reduce((accumulator, key) => {
        accumulator[key] = levelingData[key];

        return accumulator;
      }, {});
    // console.log(sorted);

    for (const [key, value] of Object.entries(sorted)) {
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
  //   console.log(userData);
  if (userData) getLevelData();
  return (
    <>
      <BarChart
        name={"Problem Levels"}
        labels={labels}
        data={data}
        color={"rgba(54, 162, 235, 0.2)"}
        borderColor={"rgba(54, 162, 235)"}
      />
    </>
  );
}

export default Levels;
