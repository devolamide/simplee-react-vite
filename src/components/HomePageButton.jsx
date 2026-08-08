import Button from "./Button";
import { useEffect, useState } from "react";

export default function HomePageButton({ updateCounter }) {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState({
    name: "Class 26",
    age: 19,
  });
  // const inputValue2 = inputValue + "ing";

  useEffect(() => {
    console.log("input value is", inputValue);
  }, [inputValue, count]);

  const handleNameChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCountChange = () => {
    setCount((c) => ({
      ...c,
      age: 20,
      gender: "Mixed",
    }));
  };

  // console.log("input Value 2", count);

  return (
    <>
      <div>
        <input
          name="name"
          value={inputValue}
          onChange={(e) => handleNameChange(e)}
        />
        <Button onClick={() => updateCounter(inputValue)}>Click</Button>
      </div>
      <div>
        <div>Count </div>
        <div>
          <button onClick={handleCountChange}>Update Count</button>
        </div>
      </div>
    </>
  );
}
