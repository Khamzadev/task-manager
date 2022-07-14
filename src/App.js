import List from "./components/List";
import listSvg from "./assets/img/list.svg";
import AddButtonList from "./components/AddList";

import db from './assets/db.json' 

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[{ icon: listSvg, name: "Все задачи", active: true }]}
          isRemovable
        />
        <List
          items={[
            { color: "green", name: "Покупки" },
            { color: "blue", name: "Фронтенд", active: true },
            { color: "pink", name: "Фильмы и сериалы" },
          ]}
          isRemovable
        />
        <AddButtonList
          colors={db.colors}
         />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
