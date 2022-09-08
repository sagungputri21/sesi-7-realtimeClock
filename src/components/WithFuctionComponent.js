import React, { useState } from "react";
import "../../src/App.css";

const WithFuctionComponent = () => {

    const [date, setDate] = useState(new Date())

    function tick() {
        setDate(new Date())
    }

    setInterval(() => tick(), 1000);

    return (
        <div className="Clock">
          <h1 className="title">Realtime Clock</h1>
          <hr/>
          <h1>{date.toLocaleTimeString()}</h1>
        </div>
    );
}

export default WithFuctionComponent;