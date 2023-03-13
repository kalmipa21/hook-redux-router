import { Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [count, setCount] = useState(0);
  const { hitung, wording } = useSelector((state) => state.name);
  const dispatch = useDispatch();

  function handlePlus() {
    setCount(count + 10);
    dispatch({
      type: "ACTION_INC",
      value: 1000,
    });
  }

  function handleMin() {
    setCount(count - 10);
    dispatch({
      type: "ACTION_DEC",
      value: 100,
    });
  }

  function handleTitle() {
    dispatch({ type: "CHANGE", value: "Apa kabar?" });
  }

  return (
    <>
      <div className="container py">
        <h1>Beranda {count}</h1>
        <p>
          {hitung} {wording}
        </p>
        <Button variant="outline-primary" onClick={handlePlus}>
          +
        </Button>
        <Button variant="outline-primary" onClick={handleMin}>
          -
        </Button>{" "}
        <Button variant="outline-primary" onClick={handleTitle}>
          Change
        </Button>
      </div>
    </>
  );
}
export default Home;
