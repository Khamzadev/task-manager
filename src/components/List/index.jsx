import React from "react";
import classNames from "classnames";
import removeSvg from "../../assets/img/remove.svg";
import "./List.scss";

import Badge from "../../components/Badge";

const List = ({ items, isRemovable, onClick, onRemove }) => {

  const removeList = (item) => {
    if(window.confirm('Вы действительно хотите удалить список ?')){
      onRemove(item)
    }
  }


  return (
    <>
      <ul className="list" onClick={onClick}>
        {items.map((item, index) => (
          <li
            key={index}
            className={classNames(item.className, { active: item.active })}
          >
            <i>
              {item.icon ? (
                <img src={`${item.icon}`} alt="Icon" />
              ) : (
                <Badge color={item.color} />
              )}
            </i>
            <span>{item.name}</span>
            {isRemovable && (
              <img
                onClick={() => removeList(item)}
                className="list__remove-icon"
                src={removeSvg}
                alt="Remove"
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
