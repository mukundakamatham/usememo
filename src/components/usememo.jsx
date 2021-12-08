import react, { useMemo, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const Counter = () => {
  const [post, setPost] = useState("");
  const [titles, setTitles] = useState("");
  const [state, setState] = useState([]);
  const [color, setColor] = useState("#000");
  // useEffect(() => {
  //   start();
  // }, []);
  // const start = () => {
  //   setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  const handleadd = () => {
    var data = {
      id: uuidv4(),
      title: titles,
      body: post,
      verify: false
    };
    setState(data);
    console.log(state, data);
  };
  const onChangeHandler = (e) => {
    setTitles(e.target.value);
  };
  const onChangeHandlerpost = (e) => {
    setPost(e.target.value);
  };
  useEffect(() => {
    colors();
  }, []);
  const colors = () => {
    setInterval(() => {
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    }, 2000);
  };
  const mystyle = {
    color: "white",
    backgroundColor: color,
    padding: "10px",
    fontFamily: "Arial",
    height: "15px",
    width: "15px"
  };
  const handleclick = (e) => {
    console.log("asdf");

    var datass = {
      id: state.id,
      title: state.titles,
      body: state.post,
      verify: true
    };
    const computeExpensiveValue = (a, b) => {
      if (a === b) return a;
      else return b;
    };
    const memoizedValue = useMemo(() => computeExpensiveValue(datass, state), [
      datass,
      state
    ]);
    setState(memoizedValue);

    console.log(datass);
  };
  return (
    <>
      {" "}
      <div>
        <input
          type="text"
          placeholder=" enter title"
          onChange={onChangeHandler}
        />

        <input
          type="text"
          placeholder=" enter post"
          onChange={onChangeHandlerpost}
        />
        <input type="button" value="add" onClick={handleadd} />
      </div>
      <div>
        <div style={mystyle}></div>
        <div>
          <h1>title:{state.title}</h1>
          <p>
            <b>post:</b>
            {state.body}
          </p>
          <p>
            <b>status:</b>
            {state.verify ? "true" : "false"}
          </p>
          <input type="button" value="verify" onclick={handleclick} />
        </div>
      </div>
    </>
  );
};
