import { useState } from "react";
import Message from "./Message";

export default function Home({ data }) {
  const [people, setPeople] = useState(data);

  const container = {
    backgroundColor: "#E8C872",
    width: "30%",
    height: "auto",
    margin: "3% 35%",
    padding: "20px",
  };
  const buttonStyle = {
    backgroundColor: "#1F2544",
    padding: "5px 10px",
    color: "white",
    width: "100px",
    margin: "20px",
  };

  const divStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "100%",
    padding:'5%',
    aspectratio:'fit'
   
  };

  const messageButton = {
    backgroundColor: "#1F2544",
    padding: "5px 10px",
    color: "white",
    width: "100px",
    margin: "30px 1px 1px 5px",
  };
  function handleClick() {
    if (people.length > 1) {
      setPeople([]);
    } else {
      setPeople(data);
    }
  }

  return (
    <div style={container}>
      <h2 style={{ color: "white" }}>{data.length} Birthday Today</h2>
      {people.map((profile) => {
        return (
          <div key={profile.id} style={divStyle}>
            <div>
            <img src={profile.image} style={imageStyle} />
            </div>
            <div>
              <p style={{padding:'0px',margin:'30px 1px 1px 5px'}}><strong>{profile.name}</strong></p>
              <p style={{padding:'0px',margin:'1px'}}><strong>{profile.age} years</strong></p>
            </div>
            <div>
              <button style={messageButton} onClick={<Message/>}>message</button>
            </div>
          </div>
        );
      })}
      <button style={buttonStyle} onClick={() => handleClick()}>
        {people.length > 1 ? "Clear All" : "View All"}
      </button>
    </div>
  );
}
