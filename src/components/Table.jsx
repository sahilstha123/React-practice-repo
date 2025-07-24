import React from "react";
import { FemaleAvatar, MaleAvatar, OthersAvatar } from "./Avatar";

const Table = ({ userList }) => {
  return (
    <div className="flex justify-center mt-14">
      <div className="border border-gray-300 rounded-md bg-white shadow p-2">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Avatar</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Gender</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item, index) => (
              <tr className="border-b border-gray-300" key={index}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  {item.gender === "male" ? (
                    <MaleAvatar />
                  ) : item.gender === "female" ? (
                    <FemaleAvatar />
                  ) : (
                    <OthersAvatar />
                  )}
                </td>
                <td className="px-4 py-2">{item.UserName}</td>
                <td className="px-4 py-2">{item.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
