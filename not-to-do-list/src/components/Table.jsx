import React from "react";
import bin from "../assets/bin.png";
import arrow from "../assets/arrow.png";
import leftArrow from "../assets/leftArrow.png";

const Table = ({ userTasksList, handleOnDelete, switchTasks }) => {
  const entryList = userTasksList.filter((item) => item.type === "entry");
  const badList = userTasksList.filter((item) => item.type !== "entry");

const TotalHours = entryList.reduce((acc, curr) => {
  console.log("curr",curr); 
  return acc + +curr.Hours;
}, 0);

  const SaveHours = badList.reduce((acc, curr) => acc + +curr.Hours, 0);
  
  return (
    <div className="container-fluid">
      <div className="flex justify-center">
        <div className="mt-7 grid gap-5 md:grid-cols-2 grid-cols-1 max-w-6xl w-full">
          {/* Entry List Table */}
          <div>
            <h3 className="text-center m-3 text-white font-serif font-semibold">
              Entry List
            </h3>
            <hr className="border border-white m-4" />
            <div className=" m-4 md:m-1">
              <table className="table-auto   w-full text-black border border-gray-300  bg-white shadow p-2">
                <tbody>
                  {entryList.map((item, index) => {
                    return (
                      <tr className="border-b border-gray-300" key={item.id}>
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{item.Tasks}</td>
                        <td className="px-4 py-2">{item.Hours}</td>
                        <td className="px-4 py-2">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleOnDelete(item.id)}
                              className="cursor-pointer hover:scale-105 transition-transform duration-300"
                            >
                              <img src={bin} alt="" width="30px" />
                            </button>
                            <button
                              onClick={() => switchTasks(item.id, "bad")}
                              className="cursor-pointer hover:scale-105 transition-transform duration-300"
                            >
                              <img src={arrow} alt="" width="30px" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bad List Table */}
          <div>
            <h3 className="text-center m-3 text-white font-serif font-semibold">
              Bad List
            </h3>
            <hr className="border border-white m-4" />
            <div className=" m-4 md:m-1">
              <table className="table-auto   w-full text-black border border-gray-300  bg-white shadow p-2 ">
                <tbody>
                  {badList.map((item, index) => {
                    return (
                      <tr className="border-b border-gray-300" key={item.id}>
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{item.Tasks}</td>
                        <td className="px-4 py-2">{item.Hours}</td>
                        <td className="px-4 py-2">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleOnDelete(item.id)}
                              className="cursor-pointer hover:scale-105 transition-transform duration-300"
                            >
                              <img src={bin} alt="" width="30px" />
                            </button>
                            <button
                              onClick={() => switchTasks(item.id, "entry")}
                              className="cursor-pointer hover:scale-105 transition-transform duration-300"
                            >
                              <img src={leftArrow} alt="" width="30px" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="m-4 md:mr-1 md:mt-2 md:ml-1 bg-white px-3 py-4 rounded">
              <p className="text-2xl font-mono">
                You could have saved = {SaveHours}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="m-4  md:mt-1 bg-white px-3 py-4 rounded w-full max-w-[1148px]">
          <p className="text-2xl font-mono">
            The total hour allocated = {TotalHours}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Table;
