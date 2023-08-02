import React, { useState } from "react";
import BarChart from "../components/BarChart";
import Chart from "../components/Chart";
import style from "./main.module.css";

const Page = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <button
        onClick={() => settoggle(true)}
        className={toggle ? style.active : style.inactive}
      >
        Bar chart
      </button>
      <button
        onClick={() => settoggle(false)}
        className={!toggle ? style.active : style.inactive}
      >
        Line chart
      </button>

      {toggle ? <BarChart /> : <Chart />}
    </>
  );
};

export default Page;
