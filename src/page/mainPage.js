import React, { useState } from "react";
import BarChart from "../components/BarChart";
import Chart from "../components/Chart";

const Page = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <button onClick={() => settoggle(!toggle)}>Change graph</button>
      {toggle ? <BarChart /> : <Chart />}
    </>
  );
};

export default Page;
