import React from "react";
import "./UserItems.css";
import { Link } from "react-router-dom";
const UsersItem = (props) => {
  return (
    <Link to={`/${props.id}/place`}>
      {/*  Dynamically allocating the link to the id specified */}
      <div>
        <div>
          <img className='avatar' src={props.image} alt={props.name} />
        </div>
        <h2>{props.name}</h2>
      </div>
    </Link>
  );
};

export default UsersItem;
