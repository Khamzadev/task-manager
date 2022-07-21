import React, { useState } from "react";
import List from "./components/List";
import listSvg from "./assets/img/list.svg";
import AddButtonList from "./components/AddList";

import db from "./assets/db.json";

function App() {
  const [lists, setLists] = useState(
    db.lists.map((item) => {
      item.color = db.colors.filter(
        (color) => color.id === item.colorId
      )[0].name;
      return item;
    })
  );


  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
    console.log(newList);
  };

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[{ icon: listSvg, name: "Все задачи", active: true }]}
          isRemovable
        />
        <List items={lists} isRemovable />
        <AddButtonList onAdd={onAddList} colors={db.colors} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
