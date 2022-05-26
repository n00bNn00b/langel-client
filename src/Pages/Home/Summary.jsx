import React from "react";
import CountUp from "react-countup";

const Summary = () => {
  const startYear = 2010;
  const runningYear = new Date().getFullYear();
  return (
    <div>
      <h1 className="text-center my-5 text-4xl font-bold text-secondary">
        Thousands of Customers trust us
      </h1>
      <div className="stats stats-vertical md:stats-horizontal lg:stats-horizontal shadow-2xl flex mx-auto">
        <div className="stat bg-secondary text-white">
          <div className="stat-title font-bold text-2xl">Years Served</div>
          <div className="stat-value">
            <CountUp end={10} duration={4} />
          </div>
          <div className="stat-desc">
            {startYear} - <CountUp start={startYear} end={runningYear} />
          </div>
        </div>

        <div className="stat bg-secondary text-white">
          <div className="stat-title font-bold text-2xl">
            Distributor Network Associates
          </div>
          <div className="stat-value">
            <CountUp start={100} end={4500} duration={7} />+
          </div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat bg-secondary text-white">
          <div className="stat-title font-bold text-2xl">
            Global Distributors
          </div>
          <div className="stat-value">
            <CountUp start={100} end={1200} duration={5} />+
          </div>
          <div className="stat-desc">↗︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
