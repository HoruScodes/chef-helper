import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";
import { getAllMenuItems } from "../api/api";

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState();

  let buffer, base64Flag, imageStr;

  const arrayBufferToBase64 = (buffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  useEffect(() => {
    const fetchApiData = async () => {
      const { data } = await getAllMenuItems();
      setMenuItems(data);
    };
    fetchApiData();
    console.log(menuItems);
  }, []);

  return (
    <div className={`menu__content container container--pall`}>
      <h2>Menu</h2>
      <AddItem />
      <div className="menu__grid">
        {menuItems &&
          menuItems.map((item) => {
            // {
            //   console.log(item.photo.data.toString('base64'));
            // }

            buffer = item.photo.data.data; // e.g., <Buffer 89 50 4e ... >
            base64Flag = "data:image/jpeg;base64,";
            imageStr = arrayBufferToBase64(buffer);
            return (
              <a href="#" alt="404" className="menu__item">
                <img
                  className="menu__image"
                  // style={"background-image: "}
                  alt="404"
                  src={base64Flag + imageStr}
                ></img>
                <div className="menu__text">
                  <div className="menu__price">$ {item.price}</div>
                  <div className="menu__name">{item.name}</div>
                  <div className="menu__description">{item.description}</div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default MenuManagement;
