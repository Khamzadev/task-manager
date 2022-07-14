import React, { useState } from "react";
import addSvg from "../../assets/img/add.svg";
import closeSvg from "../../assets/img/close.svg";
import List from "../List";
import Badge from "../Badge";
import "./AddListButton.scss";

const AddButtonList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  console.log(selectedColor);
  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(!visiblePopup)}
        className="list__add-button"
        items={[{ icon: addSvg, name: "Добавить задачу" }]}
      />
      {visiblePopup && (
        <div className="add-list-popup">
          <img
            className="add-list-popup-close-btn"
            src={closeSvg}
            alt="Close Btn"
            onClick={() => setVisiblePopup(false)}
          />

          <input className="field" type="text" placeholder="Название задачи" />
          <div className="add-list-popup-colors">
            <ul>
              <li>
                {colors.map((color) => (
                  <Badge
                    onClick={() => setSelectedColor(color.id)}
                    key={color.id}
                    color={color.name}
                    className={selectedColor === color.id && "active"}
                  />
                ))}
              </li>
            </ul>
          </div>
          <button className="button">Добавить</button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
