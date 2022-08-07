import React, { useState } from "react";
import LineChart from "../assets/svg/LineChart.svg";
import Expired from "../Components/Expired";
import { Line } from "react-chartjs-2";

function Home(props) {
  return (
    <div className="flex flex-col  h-full">
      <div className="">
        <Line
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "June",
              "July",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Data",
                backgroundColor: "rgb(5, 102, 141,0.24)",
                borderColor: "rgb(5, 102, 141)",
                data: [10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              },
            ],
          }}
          width="300"
          height="300"
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div className="pt-20  h-full">
        <div className="homePage-box">
          <p className="homePage-box_text-head">PENDING VERIFICATION</p>
          <div className="my-5">
            <p className="text-graytwo">NIL</p>
          </div>
          {/* <Expired name="Odogwu Emeka" callToAction="Profile" />
          <Expired name=" Zani Akbeb" callToAction="Profile" />
          <Expired name="Bisola Ojeh" callToAction="Profile" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
