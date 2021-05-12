import React, { useState } from "react";

const Table = ({ data: { data } }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
  };
  return (
    <table className={`items container container-pall`}>
      <tr className="items__header">
        <th>id</th>
        <th>name</th>
        <th>Prepration Time</th>
        <th>Type</th>
        <th>Operation</th>
      </tr>
      {data &&
        data.map((elem) => {
          return (
            <tr className="items__row">
              <td className="items__name">{elem["id"]}</td>
              <td className="items__name">{elem["name"]}</td>
              <td className="items__name">{elem["timeToPrep"]}</td>
              <td className="items__name">{elem["type"]}</td>
              <td className="items__name">
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
