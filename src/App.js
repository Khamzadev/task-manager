import React, { useState, useEffect } from "react";
import listSvg from "./assets/img/list.svg";
import { List, AddList, Tasks } from "./components/index";
import axios from "axios";

function App() {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/lists?_expand=color&_embed=tasks")
      .then(({ data }) => {
        setLists(data);
      });
    axios.get("http://localhost:3001/colors").then(({ data }) => {
      setColors(data);
    });
  }, []);



  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
    console.log(newList);
  };

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[{ icon: listSvg, name: "Все задачи", active: true }]} />
        <List
          items={lists}
          onRemove={(item) => console.log(item)}
          isRemovable
        />
        <AddList onAdd={onAddList} colors={colors} />
      </div>
      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
