import React from "react";

class Canvas extends React.Component {
  render() {
    return (
      <canvas
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: "1",
        }}
      ></canvas>
    );
  }
}

export default Canvas;
