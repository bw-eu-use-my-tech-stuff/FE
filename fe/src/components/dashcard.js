import React from "react";

export default function dashcard(props) {
  return (
    <div>
      <h1>Name{props.equip.name}</h1>
      <h2>Category{props.equip.category}</h2>
      <h3>Cost{props.equip.cost}</h3>
      <h3>Available{props.equip.available}</h3>
      <h3>Description{props.equip.description}</h3>
      <h3>Owner Name{props.equip.owner_username}</h3>
    </div>
  );
}
