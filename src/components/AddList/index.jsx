import React, { useState, useEffect } from "react";
import addSvg from "../../assets/img/add.svg";
import closeSvg from "../../assets/img/close.svg";
import List from "../List";
import Badge from "../Badge";
import "./AddListButton.scss";

const AddButtonList = ({ colors, onAdd }) => {
  // hooks
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(3);
  const [seletedColor, selectColor] = useState(3);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (Array.isArray(colors)) {
      selectColor(colors[0].id);
    }
  }, [colors]);


  const onClose = () => {
    setVisiblePopup(false);
    setInputValue("");
    selectedColor(colors[0].id);
  };

  const addList = () => {
    if (!inputValue) {
      alert("Введите название списка");
      return;
    }

    const color = colors.filter((c) => c.id === selectedColor)[0].name;

    onAdd({
      id: Math.random(),
      name: inputValue,
      color: color,
    });
    onClose();
  };

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
            onClick={onClose}
          />

          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="field"
            type="text"
            placeholder="Название задачи"
          />

          <div className="add-list-popup-colors">
            <ul>
              <li>
                {colors.map((color) => (
                  <Badge
                    onClick={() => setSelectedColor(color.id)}
                    key={color.id}
                    color={color.name}
                    className={setSelectedColor === color.id && "active"}
                  />
                ))}
              </li>
            </ul>
          </div>
          <button onClick={addList} className="button">
            Добавить
          </button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
