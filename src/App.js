import { useState, useRef } from "react";
import "./App.css";
import Box from "./component/Box";

function App() {
  const [count, setCount] = useState(15);

  const boxContainerRef = useRef();

  let arr = [];

  for (let i = 0; i < count; i++) {
    arr[i] = i + 1;
  }
  let checkScroll = () => {
    if (boxContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = boxContainerRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        setCount((prev) => prev + 5);
      }
    }
  };

  return (
    <div className="App">
      <div
        className="boxContainer"
        ref={boxContainerRef}
        onScroll={checkScroll}
      >
        {arr.map((item) => (
          <Box value={item} key={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
