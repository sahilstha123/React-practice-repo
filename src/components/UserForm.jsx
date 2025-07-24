import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [user, setuser] = useState({gender:" ", UserName:" "});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setuser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // console.log(user);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setuser({gender:" ", UserName:" "})
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="border border-gray-400 rounded-lg p-6 max-w-2xl w-full bg-white shadow">
        <form onSubmit={handleOnSubmit}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-8">
            <div className="sm:col-span-2">
              <select
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                aria-label="Gender"
                name="gender"
                defaultValue="Male"
                value={user.gender}
                onChange={handleOnChange}
              >
                <option value="">Choose...</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="sm:col-span-4">
              <input
                name="UserName"
                type="text"
                placeholder="Enter your User Name"
                className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={user.UserName}
                onChange={handleOnChange}
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="bg-blue-500 w-full px-4 py-2 rounded hover:bg-blue-600 cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                Add user
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
