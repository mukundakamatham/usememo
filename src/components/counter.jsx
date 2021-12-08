import react, { usememo, useEffect, useState } from "react";

export const Counter1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    start();
  }, []);
  const start = () => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  return (
    <>
      {" "}
      <div>count:{count}</div>
    </>
  );
};
