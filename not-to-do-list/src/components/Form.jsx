import React, { useState } from "react";

const randomIdGenerator = (length = 6) => {
  const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let id = "";
  for (let i = 0; i <= length; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);
    id += str[randomIndex];
  }
  return id;
};

const Form = ({ addNew }) => {
  const [userTasks, setUserTasks] = useState({
    Tasks: "",
    Hours: "",
    id: randomIdGenerator(),
    type: "entry"
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserTasks((prevTasks) => ({ ...prevTasks, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addNew(userTasks);
    setUserTasks({ Tasks: "", Hours: "", id: randomIdGenerator(),type: "entry" });
    console.log(userTasks);
  };

  
  return (
    <div className="flex justify-center">
      <form onSubmit={handleOnSubmit} className="w-full max-w-3xl m-4 ">
        <div className="w-full   border border-gray-300 p-4 grid grid-cols-1 md:grid-cols-8 gap-4 rounded shadow-lg items-end  ">
          {/* Tasks input */}
          <div className="col-span-full md:col-span-5">
            <label
              htmlFor="Tasks"
              className="block text-lg font-medium text-white"
            >
              Tasks
            </label>
            <input
              id="Tasks"
              type="text"
              name="Tasks"
              required
              value={userTasks.Tasks}
              onChange={handleOnChange}
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
          </div>

          {/* Hours input */}
          <div className="col-span-full md:col-span-1">
            <label
              htmlFor="Hours"
              className="block text-lg font-medium text-white"
            >
              Hours
            </label>
            <input
              id="Hours"
              type="number"
              name="Hours"
              step="1"
              min="0"
              required
              value={userTasks.Hours}
              onChange={handleOnChange}
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
          </div>

          {/* Add Button */}
          <div className="col-span-full md:col-span-2">
            <button
              type="submit"
              className="px-3 w-full py-3 text-white bg-indigo-500 rounded cursor-pointer hover:bg-indigo-600 hover:scale-105 transition-transform duration-300"
            >
              Add New
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
