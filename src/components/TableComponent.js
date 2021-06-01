import React, { useState } from "react";

const Table = ({ data: { data } }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <table className={`wrapper container container-pall`}>
      <tr className={`row header green`}>
        <th>id</th>
        <th>name</th>
        <th>Prepration Time</th>
        <th>Type</th>
        <th>Operation</th>
      </tr>
      {data &&
        data.map((elem) => {
          return (
            <tr className="row">
              <td className="cell">{elem["id"]}</td>
              <td className="cell">{elem["name"]}</td>
              <td className="cell">{elem["timeToPrep"]}</td>
              <td className="cell">{elem["type"]}</td>
              <td className="cell">
                <button id={elem["_id"]} onClick={handleClick}>
                  Delete This Item
                </button>
              </td>
            </tr>
          );
        })}
    </table>
  );
};

export default Table;
