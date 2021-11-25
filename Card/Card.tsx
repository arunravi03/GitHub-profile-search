import React from "react";
import "/src/Component/Card/Card.css";

function Card(props: any) {
  return (
    <div className="maincard">
      <div
        className="card"
        style={{
          border: "2px solid black",
          width: "20%",
          height: "10%",
          transition: "0.3s",
        }}
      >
        <div className="container" style={{ padding: "4px 16px" }}>
          <h3>Profile</h3>
          <h4>
            <img src={props.avatar} width={200} height={150} />
          </h4>
          <p>{props.id}</p>
        </div>
      </div>
      <div
        className="card"
        style={{
          border: "2px solid black",
          width: "30%",
          height: "10%",
          transition: "0.3s",
        }}
      >
        <div className="container" style={{ padding: "4px 16px" }}>
          <h4>
            <b>Repos</b>
          </h4>
          <p>{props.link}</p>
          <p>{props.name}</p>
          <p>{props.login}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
