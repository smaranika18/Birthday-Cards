import React, { useState } from "react";
import "./Birthday.css";

const App = () => {
  const Data = [
    { id: 1, name: "Sam", age: 23, image: "https://imgur.com/Hi35Ede.jpeg" },
    { id: 2, name: "Sibani", age: 22, image: "https://cdn.pixabay.com/photo/2019/01/18/20/08/heart-3940561_640.jpg" },
    { id: 3, name: "Swadhin", age: 25, image: "https://cdn.pixabay.com/photo/2024/05/06/05/57/butterfly-8742569_640.jpg" },
    { id: 4, name: "Koustav", age: 17, image: "https://i.imgur.com/6j09OXL_d.jpeg?maxwidth=520&shape=thumb&fidelity=high" },
    { id: 5, name: "Amit", age: 22, image: "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg" },
    { id: 6, name: "Sameer", age: 22, image: "https://cdn.pixabay.com/photo/2024/11/04/21/39/kingfisher-9174586_640.jpg" },
  ];

  const [birthdays, setBirthdays] = useState(Data);

  return (
    <div className="birthday-container">
      <h2>{birthdays.length} birthdays today</h2>
      {birthdays.map((birthday) => {
        return(
            <div className="birthday" key={birthday.id}>
                <img src={birthday.image} alt={birthday.name} className="img" />
                <div className="info">
                    <h3>{birthday.name}</h3>
                    <p>{birthday.age} years</p>
                  </div>
                </div>
        );
      })}
      <button className="clear-btn" onClick={() => setBirthdays([])}>
        Clear All
      </button>
    </div>
  );
};

export default App;