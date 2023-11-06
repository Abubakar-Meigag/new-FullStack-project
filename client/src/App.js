import React, { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";


function App() {
  const userEmail = "beko.m@beko.com";
  const [todoData, setTodoData] = useState(null);
  const url = `http://localhost:8008/todo/${userEmail}`;


  const getData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setTodoData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);  
  
  console.log(todoData);
  const sortedTodoData = todoData?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="mt-20 p-5 app-card app-width">
      <ListHeader listName={"Holiday tick list"} />
      {sortedTodoData?.map((todoItem) => (
        <ListItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </div>
  );
}

export default App;
