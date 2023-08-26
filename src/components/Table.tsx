import React from "react";
import { UserData } from "@/constants/mockData";

interface TableProps {
  data: UserData[];
}

const Table = ({ data }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Friends invited</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.email}>
            <td>{user.email}</td>
            <td>{user.numFriendsInvited}</td>
            <td>{user.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
