import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserForm from "./components/UserForm";
import Table from "./components/Table";

const App = () => {
  const [userList, setUserList] = useState([])
  const addUser = (userObj)=>{
    setUserList((prevUser)=>
      [...prevUser, userObj]
    )

  }
  // console.log(userList)

  return (
    <div className="min-h-screen bg-gray-300 px-4 py-2">
      <div className=" m-3 flex justify-center">
        <h2 className="font-medium text-3xl">User List</h2>
      </div>
      <hr className="text-gray-500"/>

      <UserForm addUser={addUser}/>
      <Table userList={userList}/>
    </div>
  );
};

export default App;
