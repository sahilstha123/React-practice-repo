import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [userTasksList, setUserTasksList] = useState([]);
  const addNew = (userObj) => {
    setUserTasksList((prevAddnew) => [...prevAddnew, userObj]);
  };
  const handleOnDelete = (id) => {
    const filteredList = userTasksList.filter((item) => item.id !== id);
    setUserTasksList(filteredList);
  };

  const switchTasks = (id, type) => {
    const newuserList = userTasksList.map((item) => {
      if (item.id === id) {
        return { ...item, type: type };
      }
      return item;
    });
    setUserTasksList(newuserList);
    console.log("Updated list:", newuserList);
  };
  return (
    <div className="body">
      <div className="min-h-screen ">
        <h2 className="pt-5 text-center text-white text-2xl md:text-3xl font-mono font-semibold  ">
          Not To Do List
        </h2>
        <hr className="m-3 border border-gray-400" />
        <Form addNew={addNew} />
        <Table
          userTasksList={userTasksList}
          handleOnDelete={handleOnDelete}
          switchTasks={switchTasks}
        />
      </div>
    </div>
  );
}

export default App;
