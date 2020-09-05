import React from "react";

import UsersItem from "./UsersItems";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h1>No users found</h1>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((user) => (
        <UsersItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          places={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
