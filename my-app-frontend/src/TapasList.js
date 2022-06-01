import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

function TapasList() {
  const [info, setInfo] = useState([]);

  function getData() {
    fetch("http://localhost:9292/tapas")
      .then((res) => res.json())
      .then((res) => setInfo(res));
  }

  useEffect(getData, []);

  return (
    <div>
      <h2>tapas list</h2>
      <ul>
        {info.map((dish) => (
          <Card>
            <Card.Title>{dish.name}</Card.Title>
            {/* <Card.Text>{dish.restaurant.name}</Card.Text>
            <Card.Text>{dish.restaurant.review}</Card.Text> */}
          </Card>
        ))}
      </ul>
    </div>
  );
}

export default TapasList;
