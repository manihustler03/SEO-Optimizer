import React from "react";
import './RankPage.css'

const RankPage = () => {
  return (
    <>
      <form className="rankpage-form">
        <h2>Audit Report</h2>
        <div className="rankpage-div">
          <label>Enter your Website</label>
          <input type="text" />
        </div>
        <div className="rankpage-div">
          <label>Enter keyword</label>
          <input type="text" />
        </div>
        <button> Let's Evaluate</button>
      </form>
    </>
  );
};

export default RankPage;
