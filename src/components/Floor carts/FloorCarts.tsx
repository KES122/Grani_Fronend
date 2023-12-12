import "./FloorCarts.module.scss"
import React from "react";

const commonList = [
  { name: "Boy1", gender: "male" },
  { name: "Girl1", gender: "female" },
  { name: "Boy2", gender: "male" },
  { name: "Girl2", gender: "female" },
];

const BoysList = () => {
  const boys = commonList.filter((item) => item.gender === "male");
  return (
    <div>
      <h3>Мальчики</h3>
      <ul>
        {boys.map((boy, index) => (
          <li key={index}>{boy.name}</li>
        ))}
      </ul>
    </div>
  );
};

const GirlsList = () => {
  const girls = commonList.filter((item) => item.gender === "female");
  return (
    <div>
      <h3>Девочки</h3>
      <ul>
        {girls.map((girl, index) => (
          <li key={index}>{girl.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h2>Участники</h2>
      <ul>
        {commonList.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: "20px" }}>
        <BoysList />
        <GirlsList />
      </div>
    </div>
  );
}